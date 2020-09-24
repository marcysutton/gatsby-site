---
title: "Prototype Testing for Accessible Client-Side Routing"
date: "2019-03-12"
path: "/prototype-testing-accessible-clientside-routing/"
---

**Update:** In July 2019, I worked with [Fable Tech Labs](https://www.makeitfable.com/) to conduct research on client-side routing and accessibility using the prototypes outlined in this post. You can read the results on the Gatsby blog: https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/

A talk on this subject was also done as part of the Inclusive Design 24 conference, and can be viewed online: https://www.youtube-nocookie.com/embed/Tr21FqQQv-U

---

Since the 2019 [CSUN Assistive Technology conference](http://www.csun.edu/cod/conference/2019/sessions/index.php/public/website_pages/view/1), I've been conducting prototype testing with users with disabilities to learn how to best support accessible navigation of [client-rendered websites](https://www.smashingmagazine.com/2015/05/client-rendered-accessibility/). My goal is to determine common user preferences amongst the many possible techniques: are there any clear winners?

I hope to identify patterns that can influence the JavaScript frameworks and libraries of today, and potentially the web platform APIs of tomorrow. When we pull this off together, we can help to improve accessibility defaults in client-rendered web applications and make a big impact for users across the globe.

## Background

When building JavaScript-heavy websites and web applications with popular frameworks and libraries like React, Vue, Ember, Angular and so on, parts of a page can change without a traditional page reload (we call them "view changes"). This paradigm requires developers to manually manage focus and screen reader announcements to ensure assistive technology and keyboard-only users aren't left behind while sighted mouse users can follow along. JavaScript "client-rendering" of this nature–as opposed to rendering views on the server–requires developers to do some work to create an accessible user experience.

Except those of us in the community who work with accessibility regularly still can't quite agree on a best practice: should we send focus to a heading, or a wrapper element? Should we announce a page change with [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)? Even with tools like [Reach Router](https://github.com/reach/router) for React, which was developed with accessibility in mind, there are still questions about which technique works best. At [Gatsby](https://gatsbyjs.org), we're [highly committed](https://www.gatsbyjs.org/blog/2019-04-18-gatsby-commitment-to-accessibility/) to creating accessible defaults that work for users.

So I figured, why not take the opportunity to test with users with disabilities at one of the biggest accessibility conferences in the world (CSUN) and beyond? As a web accessibility advocate, I see broad and lasting value in conducting these tests to determine best practices moving forward. Simply put: no matter the framework, we all stand to benefit.

## What are Prototypes?

Prototypes in this case are basic interactive code demos that are mostly identical in content, but differ in user interactions, to test rapidly and provide feedback of what works and what doesn't with minimal investment.

Each prototype has a header describing the example, with a navigation panel and main content area below. When a user clicks on a navigation link, it changes the main content area to show a new "view" with a heading and text content. The differences lie in how keyboard focus is handled with JavaScript: where it leaves a keyboard or screen reader user on the page, and what information (if any) is announced in the screen reader.

## Testing objectives

Prototype testing of this nature should 15-30 minutes of your time. Ideally you can pull up [my prototypes](https://marcy.codes/prototypes/routing/) on your own computer and navigate through them, while I take notes and/or record your experience (with permission, of course).

What I would like to know:

- Which technique is the most ergonomic and intuitive for you?
- Do any of the techniques present barriers that detract from your browsing experience?

As a user with a disability, your participation in this study can help to move the web forward. Your insights are truly valuable in the world of shiny JavaScript web applications, as they can influence implementations in reusable frameworks, UI libraries, and potentially even web standards.

## Let's make it happen

If you or someone you know is interested in participating in this study, please get in touch with me to set up a time to meet:

- Tweet at me: [@marcysutton](https://twitter.com/marcysutton)

If you're more interested in providing feedback online than meeting in person, you can also review the prototypes for yourself and then contact me: https://marcy.codes/prototypes/routing/

No matter your feedback preferences, please [get in touch](https://marcysutton.com/contact/). I look forward to working with you!
