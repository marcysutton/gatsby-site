---
title: "Button Focus Hell"
date: "2015-04-25"
path: "/button-focus-hell"
---

> Note: This post (in part) led to a web standards proposal by Brian Kardell and Alice Boxhall called [CSS Input Modality](https://github.com/alice/modality/blob/master/docs/modality-mq.md) and later, the proposed CSS pseudo class <a href="https://github.com/WICG/focus-visible">:focus-visible</a>. The problem described below can be addressed with the :focus-visible polyfill, or alternatively, the [What Input](https://github.com/ten1seven/what-input) library by Jeremy Fields. They are really helpful tools!

When I started working on [Angular Material](https://material.angularjs.org/ "Link opens in a new window"), there was a lot of low-hanging fruit with regards to things I could fix for accessibility. One of my [first Github issues](https://github.com/angular/material/issues/197 "Material buttons should be accessible, opens in a new window") captured the state of `mdButton`, a fancy [Material Design button](http://www.google.com/design/spec/components/buttons.html "opens in a new window") component using `<canvas>` to create an interactive [touch ripple](http://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-user-input "Material Design specification, opens in a new window"):

```
<material-button class="material-button-raised">
  <canvas class="material-ink-ripple" style="top:0px; left:0px"></canvas>
  <button class="material-button-inner"></button>
  <span class="ng-scope">Button</span>
</material-button>
```

Angular Material Button, August 2014

A few things have changed with this UI component since then, including the tag name, now `md-button` for brevity; CSS class prefixes; and, the ripple approach, which instead of `canvas` nests a child `div` with CSS animations. My first accessibility pass put the text content into the native child button. Buttons provide native semantics and are focusable by default, so text content can be read aloud in a screen reader. (This exercise showed me that UI framework developers really need accessibility skills.)

Angular Material has come a long way since then. We’ve added a bunch of features and closed 1500+ Github issues! These days, you can instantiate `mdButton` by including the custom element in a [project with the required dependencies](https://github.com/angular/material/#installing "Github Read-me opens in a new window").

```
<md-button>Button</md-button>
```

The default button uses Angular to render markup that looks like this:

```
<button class="md-button md-default-theme" ng-transclude="">
    <span class="ng-binding ng-scope">Button</span>
    <div class="md-ripple-container"></div>
</button>
```

## A persistent “bug”

Throughout many changes to the framework, there was one issue that came up again and again–sometimes it had a different title, but the underlying problem always smelled the same: _“button stays highlighted after clicking.”_ It came up for buttons, checkboxes, sliders and radio buttons, and people thought it was a mistake in our CSS. Knowing the root cause was the browser and without an obvious solution, I put some [feelers out on Twitter](https://twitter.com/marcysutton/status/530490701239558144 "Link opens in a new window") and got a telling response from Patrick Lauke:

> “Welcome to a world of pain.”

Google Chrome, in which (admittedly) most of our users test, clicking with the mouse on a native or custom button does what it should: it sets focus on the element, so hitting TAB will move on to the next focusable element in the DOM. What it shouldn’t do, however, is persist the focus style, be it the browser-default focus ring or a custom background color.

![Animated GIF showing persistent focus on Material Flat Button](https://cloud.githubusercontent.com/assets/1788596/4944296/49b32bbc-65fc-11e4-91d7-873f0f6a3c95.gif)

Firefox actually gets it right for native buttons: clicking sets focus, but not the visible focus style. Hitting TAB will show the focus style on the _next_ button, since it was an intentional keyboard interaction. Custom `<div>` buttons, on the other hand, suffer the same fate as Chrome. (There's a reason why everyone says _use native buttons_: they're more predictable!)

I could have spent an infinite amount of time checking this in other browsers, but it wouldn't change the fact that Chrome has a perceived bug as far as our users are concerned. A quick search in the [Angular Material Github repo](https://github.com/angular/material "Link opens in a new window") turned up 7 related issues, and without a fix duplicates would keep rolling in. So I started experimenting with solutions, knowing all of them would be some kind of hack.

To see how it was _not_ handled at this point, check out my [Codepen focus sandbox using Angular Material 0.8.3](http://codepen.io/marcysutton/pen/Wvbrvj "Link opens in a new window").

I imagined a fix would include detecting whether the user had in fact clicked with the mouse, setting a flag with JavaScript, and only showing keyboard focus if this flag was not present. Obviously, requiring JavaScript to set the correct focus style is…not good. But considering this was for an Angular UI framework, it seemed like a moot point.

I will say that Material Design needs better visual contrast, especially for interactions. It has become very apparent as I've included components in conference talk slides and within my website's design. But that is a separate issue.

## Finding Solutions

In this post, we'll focus on the fix that went into Angular Material, which uses a single button element. An [alternative version](http://codepen.io/marcysutton/pen/OPveqd "Link opens in a new window") required managing two elements (one offscreen) and using ARIA, which was a completely different code smell.

After some [experimentation with mdButton](https://github.com/angular/material/pull/1594 "Link opens in a new window"), I landed on a solution with JavaScript looking like this:

```
// restrict focus styles to the keyboard
    scope.mouseActive = false;
    element.on('mousedown', function() {
        scope.mouseActive = true;
        $timeout(function(){
          scope.mouseActive = false;
        }, 100);
      })
      .on('focus', function() {
        if(scope.mouseActive === false) { element.addClass('md-focused'); }
      })
      .on('blur', function() { element.removeClass('md-focused'); });
```

[Angular Material Button Directive Source](https://github.com/angular/material/tree/master/src/components/button "Link opens in a new window")

In English: initialize a `mouseActive` "flag" variable to `false`. Bind a `mousedown` listener that sets the flag to `true` when a user actually clicks with the mouse, resetting it to `false` after 100 milliseconds. Bind a `focus` listener that checks whether `mouseActive` is `false` and adds an `.md-focused` CSS class. A `blur` event removes the class. This way, the focus style will _only_ be added if the user is truly using the keyboard.

Not exactly related but sort-of, in version 0.9.0 I removed CSS preventing the browser's default focus style on all elements (a blue ring in Chrome). As a UI framework, being this heavy-handed with your CSS is bad for people who use it. You are essentially setting them up to fail with keyboard accessibility, since there is no easy way to add it back (and many won't). In my case, creating sandboxes on Codepen comparing native elements to Angular Material components necessitated this change. Instead, we override the default focus style in each specific component. It felt good to do the right thing as a framework developer, despite a [Github issue questioning the move](https://github.com/angular/material/issues/2404 "Link opens in a new window").

## UI heaven…for now

A similar, but slightly more complicated, approach was added to checkboxes and radio buttons. They are more complicated because there are use cases where you might click with the mouse to select something and then use the SPACE bar to activate or deactivate the control. But for buttons, this approach seems to work fine for now. Ideally, Chrome will just fix the bug on the browser side and then we can remove these hacks and await the next version of custom-UI-hell.

Note: relying on NO focus styles to "fix" the persistent focus problem does not count as a solution.

Here is an updated [Codepen using Angular Material 0.9.0-rc2](http://codepen.io/marcysutton/pen/WvbrYJ "Link opens in a new window") (final release coming soon):

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
