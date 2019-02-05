---
title: "Mobile Web Accessibility with VoiceOver"
date: "2013-04-22"
path: "/mobile-web-accessibility-with-voiceover"
---

Should mobile webpages be accessible? (That seems so obvious when I ask it out loud.) The answer is, YES!

With smartphone and tablet usage growing dramatically for users of all kinds, it recently occurred to me that we should apply the same principles to mobile web that we do for desktop. At POP, we haven't been required to test webpages with mobile screen readers...yet. But I know people who use their devices this way, so I wanted to learn more. Many people in the blind community use iPhone with VoiceOver enabled since it has the "best accessibility in the mobile space" (quote from [Steve Sawczyn](https://twitter.com/steveofmaine/status/325081431900581888 "Link opens in a new window"), my colleague over at Target). That means, it's easy to test if you have an iPhone–just turn on VoiceOver from your General settings menu (easiest is to enable triple-click of the Home button) and start listening.

Here are some of the things I've found after developing & testing specifically for mobile web with VoiceOver (Note: I plan to test other devices as well, this is just the beginning):

## The Double-Tap

VoiceOver users interact with a page by selecting an element via single-tap and then double-tapping to click. A custom toggle widget such as an accordion or interactive tile bound with only a 'click' event can be unusable because 'double-tap' is essentially two clicks. My accordion widget was opening and closing on each double-tap, making it very frustrating to use with VoiceOver. To get around this on a recent mobile site, we included a touch-specific event library to bind the 'tap' event instead of a 'click'. The events 'dblclick' (included in regular jQuery) and 'double-tap' (custom event) don't fire in Voiceover, but 'tap' does work, as I found in my initial testing on both iPhone and Android devices. The 'tap' event made my accordion behave the way it was supposed to. There is also a difference in mobile Safari with and without VoiceOver enabled, so be sure to test both.

### What is the 'tap' event?

How is 'tap' different than 'click' and 'touchstart/touchend'? Touch events occur sooner than clicks because they skip the delay added to make sure a user is really clicking (read some great info from the [jqTouch blog](http://blog.jqtjs.com/post/205113875/milliseconds-responsiveness-and-the-fast-tap "Link opens in a new window")). We wanted to specifically rule out someone swiping down the page when coding the interaction for an accordion panel, so we needed more than just 'touchend'. Because this isn't officially in our QA or development budget yet, we implemented the existing [jquery.finger](https://github.com/ngryman/jquery.finger "Link opens in a new window") plugin to bind the 'tap' event. If you are coding something for desktop and/or older mobile devices, you may need to bind clicks as well. Be sure to test with all of your target devices–screen readers included. More info on taps vs. clicks here: [Tap vs. Click: Death by Ignorance](https://coderwall.com/p/bdxjzg "Link opens in a new window") by John Bender

Developing for VoiceOver may require you to disable user scaling with the meta viewport tag: after all, the double-tap is usually used to zoom in to something. If you are going down this route, be sure to consider whether this is something you can and _should_ disable–it really depends if your content is readable at a small screen size. In our case, the site was designed & coded specifically for tablets and smartphones so it was an acceptable user experience.

## The same HTML, CSS and JS rules apply (mostly)

Your HTML needs relevant text that tells users what is on the page even when they can't see it. Images need alt text, headings must be used and Javascript widgets need labels that update when you interact with them.

Just because you're developing for mobile web doesn't mean you can ditch the regular accessibility standards. ([See my other post](/css-and-accessibility/ "CSS + JS + Accessibility") with tips for basic front-end accessibility). I have, however found that there are a few bugs–or should I say quirks–that make developing for VoiceOver a unique, sometimes frustrating experience. For example, VoiceOver will stop reading text when it encounters a child element placed offscreen. See this code:

```
<p><span class="offscreen">Brand Name </span> introduced 2012</p>
```

VoiceOver reads "Brand Name", the only portion that is offscreen, and leaves off the rest of it (the same is true of <strong />, <em />, or any other inline tag). Combining on- and off-screen text together to be read by JAWS like we normally do for desktop doesn't work in this case. You have to put the entire sentence onscreen or offscreen for VoiceOver to read the whole thing. The example code below does get read as a sentence ("Brand Name Expand Panel 1 of 12 In-page Link"):

```

<a href="#in-page-link" class="accordion-trigger">
    <img alt="" src="../_ui/img/_mobile/logo-sprite.png" class="sprite">
    <span class="offscreen">Brand Name <span>expand</span> panel 1 of 12</span>
    <span class="icon-in-pseudo-element"></span>
</a>
```

This is stuff I discovered with mostly trial and error. Because every design and dev experience will be different, my best advice is to enable VoiceOver and listen for yourself!

### DOM tricks at a Glance

- HTML5's new heading algorithm is fine for VoiceOver, unlike old versions of JAWS.
- Offscreen text methods sometimes hide content from VoiceOver. Experiment with offscreen classes, negative text-indent and color:transparent or position:absolute to remove it from display but still be read aloud.
- Provide users information offscreen about widgets as they update, for example: "Unique Content Title Expand 1 of 12" (default state) & "Unique Content Title Collapse 1 of 12" (active state)
- Use CSS pseudo-elements or background-images for display icons and flourishes that make no sense when read aloud (such as + and - for an accordion panel)
- Alt attributes in images are sometimes the only thing read aloud in a group of child elements. Consider using an empty alt attribute and putting a whole sentence offscreen so it makes sense when read.

## Mobile Web Accessibility Resources

- [Are Mobile Applications Required to be Accessible?](https://www.ssbbartgroup.com/blog/2013/01/11/are-mobile-applications-required-to-be-accessible/ "Link opens in a new window")
- [Voiceover 2 – a WebDev’s guide](http://alastairc.ac/2007/12/voiceover-2-a-webdevs-guide/ "Link opens in a new window")
- [iPhone accessibility with VoiceOver](http://blind.wikia.com/wiki/IPhone "Link opens in a new window")
- [Mobile Accessibility](http://www.w3.org/WAI/mobile/ "Link opens in a new window")
