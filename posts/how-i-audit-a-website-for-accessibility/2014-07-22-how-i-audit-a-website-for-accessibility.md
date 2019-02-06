---
title: "How I Audit a Website for Accessibility"
date: "2014-07-22"
path: "/how-i-audit-a-website-for-accessibility"
coverImage: "./how_i_audit_headings.png"
---

_This post was migrated from its original location on the [Substantial](http://substantial.com) blog._

## Contents

- Headings
- Keyboard Interactivity
- Automated Testing
- Screen Readers
- Color Contrast
- Tools

When I started working on [Distiller](http://drinkdistiller.com) in 2014, my initial feelings were that it had great visual design, super cool branding, and intriguing subject matter–whiskey–and it presented an opportunity to learn the server-side while innovating on the front-end. One of my personal goals for the project was to expose the product's "cool factor" to people who couldn't see it or use a mouse. Everyone wants a good user experience no matter their abilities. I was also pretty sure blind or visually impaired people would appreciate an app to help them find whiskey as much as anyone. Here are some of the key areas I've been addressing as I've adopted that challenge.

## Headings

Something I wish more developers and designers knew: the purpose of an HTML heading is to indicate structure, not to indicate style (that's what CSS is for!). Headings act as a table of contents for your page, similar to hierarchal outlines you may have created in Word using roman numerals and numbers. Screen readers use headings as an overall page outline and a device for navigating web content. In addition, even as search engines' page rank algorithms have evolved, meaningful content hierarchies with headings have continued to improve SEO.

![Distiller's Original Heading Outline and Styleguide](./how_i_audit_headings.png)

_Headings on the Distiller Homepage and in the Live Style Guide_

To begin my accessibility audit, I ran a quick test to look at the headings on the site using the View Document Outline feature of the [Firefox Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/web-developer/ "Link opens in a new window"). The test indicated we had quite a bit of room for improvement in our markup. Headings site-wide had been chosen for style purposes, without attention paid to semantics, and therefore there were no useful page outlines. I wanted to fix them all immediately. However, fixing headings would have to be an ongoing process–I had to resist the urge to refactor code beyond the scope of my current feature. Instead, I added global CSS classes that matched our live style guide and only refactored code that fit in with the current story. As we touched different parts of the app through feature stories, I would get the opportunity to improve the accessibility of the code-base. Also, I shared knowledge with my team on the purpose of headings and how best to use them so they could create more useful page structures moving forward.

## Keyboard Accessibility

My approach to testing keyboard navigation is simple: I tab through a webpage with the keyboard. Quite often, a lack of visual feedback shows me that keyboard accessibility was not a priority. Developers tend to develop only for themselves; with the ability to bail on keyboard navigation when they get lost by falling back to the mouse, most of the time it is forgotten. On Distiller, there wasn't much visual feedback even for mouse interactions. I created a story for hover and focus styles to be implemented first in the brand style guide and then throughout the rest of the app.

When you include focus styles in your CSS, keyboard accessibility can improve a lot. They're easy to add if hover states are already in place on “focusable” elements. If hover styles are applied to elements that can't receive focus by default, such as list items, they must be moved to elements that can receive focus, like buttons or form inputs. Anything else requires adding a tab index property in HTML and binding interaction events in JavaScript. Anchors, buttons and inputs get tab index and interaction events by default, so it's generally not worth the trouble to use other elements for anything that should be interactive.

Focus management is also a big part of keyboard accessibility and something we will continue to work on for Distiller. What is focus management? An example: when a modal window opens, focus should move from the element that triggered it to an element inside of the modal, preferably a close button. This enables a keyboard or screen reader user to easily tab and find their way to new content on the screen. When the modal window is closed, focus should be sent back to the triggering element.

On Distiller, I noticed a new feature badly needing keyboard interactivity and focus management: the Top Shelf allowed users to select up to 5 whiskey bottles for their personal profile. With this, we added the ability to rearrange the bottles with drag & drop. Making it accessible from the keyboard was challenging because every time you moved a bottle, the HTML for the entire list was ripped out and re-rendered, thereby sending focus back to the top of the page (this is called “freak-out mode”). To improve the experience, when the list was replaced in the DOM we used JavaScript to send focus back to it afterward. This allowed us to continue using the existing templating solution while improving the accessibility of Distiller's Top Shelf feature.

## Automated Testing

In addition to checking the heading outline and tabbing through a webpage, I usually start with a few automated tools. Chrome's Accessibility Developer Tools can audit your code to point out common issues, and now it can look inside Shadow DOM subtrees (for more on this topic, read my post on [Accessibility and the Shadow DOM](/accessibility-and-the-shadow-dom/))! Some items that came up in an audit of Distiller:

- A loading graphic without an alt attribute (courtesy of Zendesk's feedback tab)
- Color contrast warnings
- Warning about meaningful images not to be used as element backgrounds
- Warnings about focusable links being invisible or obscured by other elements

These warnings allow you to inspect the DOM to find out more information about the issues. In our case, we had links only containing icons and not any descriptive text; divs with background images for a responsive content strategy; and plenty of anchors used as buttons. As with the headings and keyboard navigation, I updated code only within the context of user stories and planned to address the rest in the coming weeks.

A new tool on the block that's definitely worth mentioning is [Tenon.io](http://tenon.io/index.html "Link opens in a new window"), created by Karl Groves and currently in private beta (you can sign up to participate). If it was available when I audited Distiller, I definitely would have tried it. There's currently a free URL or HTML testing form on the website, and I believe the service will provide automated, JavaScript-aware accessibility testing. While there will be paid options for corporate entities, it will always be free to open source projects.

## Screen Readers

In single-page apps, views are appended, updated or removed without page reloads. Imagine tabbing with the keyboard onto a nav item and expecting new content but instead not going anywhere, or worse, experiencing “freak out mode” where focus is lost. What changed? What were you trying to do, again? Without sending users' focus to new content after it is appended, web applications using Spine, Angular, Ember, Backbone, or other front-end JavaScript frameworks will not be accessible to keyboard or screen reader users. Unfortunately, it's happening a lot now that JavaScript MV\* frameworks are on the rise, and Distiller was no exception.

To experience the site from a non-sighted user's point of view, I fired up VoiceOver for Mac, closed my eyes and tried navigating through it in Chrome and Firefox. I also tested with JAWS and Internet Explorer on a Windows virtual machine using VirtualBox for Mac. Any time we made a change for accessibility, I could test whether the experience improved using my small test suite.

Some other items I tested and addressed for screen reader accessibility:

- Elements with only non-semantic, visual icons or images
- A global “flash notice” telling users when they had successfully logged in or out
- Non-visual current page indicators
- Audible notification of page changes (JAWS announces them, VoiceOver still needs help)

## Color Contrast

To test color contrast, I've started using the Color Contrast Analyzer for Chrome. This tool takes a screenshot of a webpage and evaluates the pixels surrounding any text to determine if it meets [WCAG color contrast ratio requirements](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast "Link opens in a new window"). Small non-bold text has a different ratio than medium bold and large non-bold text, so you can test both at levels AA and AAA. For Distiller, I found a few places where color contrast could be bumped up but overall, the brand colors stood out pretty well and major changes were not necessary.

Another great tool for testing foreground and background color combinations for accessibility is [Lea Verou's Contrast Ratio](http://leaverou.github.io/contrast-ratio/ "Link opens in a new window"). Simply enter two color values and see the ratio in red (failing) or green (passing) along with some text information to keep things accessible.

## Conclusion

Client-side web applications like Distiller are growing in numbers. We love snappy, responsive user interfaces and JavaScript libraries that encourage separation of concerns. But without attention paid to keyboards and assistive technologies, our apps won't be usable by people with disabilities. Ideally, we would build with accessibility in mind from the beginning…that's definitely the best approach (and the most fun). But if you do find yourself working on a code-base with room for accessibility improvement, having a collection of best practices and testing tools will make it easier to get started.

## Tools

The following list includes tools used on Distiller for accessibility. This is by no means a comprehensive list, just what I used for a quick accessibility audit and ongoing development. There are also more than three screen readers–including mobile devices–I chose to focus on the top three listed in the [WebAIM Screen Reader Survey #5](http://webaim.org/projects/screenreadersurvey5/#used "Link opens in a new window") (JAWS, NVDA and VoiceOver).

- Your keyboard
- [Chrome Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en "Link opens in a new window")
- [Firefox Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/web-developer/ "Link opens in a new window")
- [aXe Chrome Extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Tenon](http://tenon.io/index.html "Link opens in a new window")
- [Color Contrast Analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll?hl=en "Link opens in a new window")
- [Lea Verou's Contrast Ratio](http://leaverou.github.io/contrast-ratio/ "Link opens in a new window")

### Screen Reader Testing

- [VoiceOver for Mac OSX/iOS](http://webaim.org/articles/voiceover/ "Link opens in a new window")
- [Virtual Box (free)](https://www.virtualbox.org/wiki/Downloads "Link opens in a new window")
- [Modern.ie: Windows VMs for VirtualBox (free)](http://modern.ie/en-us/virtualization-tools#downloads "Link opens in a new window")
- [JAWS for Windows (free 40 min. demo version)](http://www.freedomscientific.com/downloads/jaws/jaws-downloads.asp "Link opens in a new window")
- [NVDA for Windows (free)](http://www.nvaccess.org/download/ "Link opens in a new window")
