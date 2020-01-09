---
title: "Girl Develop It Web Accessibility"
date: "2013-11-18"
path: "/girl-develop-it-web-accessibility"
---

In 2013, I became a member of an amazing community: [Girl Develop It Seattle (opens in a new window)](http://www.girldevelopit.com/chapters/seattle "Link opens in a new window")! I first got involved with the group on [Meetup.com (opens in a new window)](http://www.meetup.com/Girl-Develop-It-Seattle/ "Link opens in a new window") and joined Intro to Javascript as a Teaching Assistant to see what it was all about.

I met some fantastic people and got really energized about making a small difference in my community. Upon talking to our local organizer, Heather Wade, I found out that GDI just so happened to have a Web Accessibility curriculum that was a perfect fit for me to pick up. I expanded it from one two-hour class to two and added some hands-on code exercises. Now that both classes are over, I can say that my inaugural teaching gig was one of the best experiences of my life. We had great conversations and I think everyone got a lot out of it. I know I did!

> Class last night was just so good... Really, I felt like I should have paid to be there. I know the class didn't fill up, but it is a niche topic. In this case, I felt the smaller group size worked out really well. You are so awesome!

_Thanks to Heather Wade, my awesome GDI Seattle co-chair._

## Topics that Connected

### Offscreen Content

To new developers, learning that you can put content offscreen is a pretty handy tool for accessibility. CSS allows you to add content to your pages that screen readers will read aloud without having to jam everything into an image alt attribute (it's also helpful for SEO). For example, what if you're building an interactive annual report with a bunch of highly-designed tabular data? One solution is to embed an image for a table and put the live data offscreen. Pretty freaking cool.

- The presence of inaccessible Flash content
- CAPTCHA - images presenting text used to verify that you are a human user
- Links or buttons that do not make sense
- Images with missing or improper descriptions (alt text)
- Screens or parts of screens that change unexpectedly
- Complex or difficult forms
- Lack of keyboard accessibility
- Missing or improper headings
- Too many links or navigation items
- Complex data tables
- Inaccessible or missing search functionality
- Lack of "skip to main content" or "skip navigation" links

_Pictured: Problematic Items from the [WebAIM Screen Reader Survey (opens in a new window)](http://webaim.org/projects/screenreadersurvey4/ "Link opens in a new window") with data offscreen and topics we discussed highlighted in secondary color_

### Tab Index

Do you ever set tab index in your HTML? I'm actually very curious if anyone has a reason to use tab index values other than 0 or -1. In my experience, numbers higher than zero only cause problems since they create a new tab order. As a User, I'll tab once or twice in a document and all of a sudden I'm in the footer. Managing tab index numbers for large documents is hard to do. I had my students play with tab index on native (anchors, form inputs, etc.) and non-native elements (div, h1, etc.) and I think they were quite surprised! To keep the class at a basic level, I did have to skip Javascript, but experiencing a new tab order seemed to have an impact on my students' budding development skills. Success!

## What I'm Thinking About Now

### Localization

I'm a big advocate for offscreen text, especially for links that open in new windows. A valid question was brought up in class: how would you manage all of your accessibility content when localizing a site? Hopefully you could use templating and content files (like JSON) to let the computer do the heavy lifting for you. Without "seeing" all the content you're putting into your pages, however, it might cause mistakes–especially for a development team new to the process of building accessible websites. Definitely something to think about.

### Headings & HTML5

How do you explain the importance of headings & screen readers to new developers, and then turn around and explain how different/weird they can be in HTML5? It's a difficult topic. At their most basic level, headings add a semantic outline to your documents. Screen readers also use them to navigate, so they're an important accessibility tool. But if you've ever had to support old versions of JAWS while pushing ahead with new technology, you might be aware of the [bugs (opens in a new window)](http://accessibleculture.org/articles/2011/10/jaws-ie-and-headings-in-html5/ "Link opens in a new window") and lack of support of not only the new heading algorithm, but also [basic HTML5 tag support (opens in a new window)](http://tink.co.uk/2013/02/screen-reader-support-for-html5-sections/ "Link opens in a new window"). I'll continue to refine my explanation of this topic since it's so important!

### Web Components

After speaking at SeattleJS and attending CascadiaJS I've started to think more about what my future conference proposals will entail. Ever since Angelina Fabbro's talk on the ShadowDom at the first CascadiaJS, I had questions about the ShadowDom & accessibility. This time around, Soledad Penades' talk about Web Components and Audio got me thinking again about accessibility. For example: how does this new technology work with a keyboard? I've heard there is [ARIA support (opens in a new window)](http://blog.paciellogroup.com/2012/07/notes-on-web-components-aria/ "Link opens in a new window"), but I'm also thinking it's the perfect time to do some research (and maybe even make some impact on a new standard!). Excited to see where this all leads!
