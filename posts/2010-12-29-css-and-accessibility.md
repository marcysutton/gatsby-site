---
title: "CSS + JS + Accessibility"
date: "2010-12-29"
path: "/css-and-accessibility"
---

I have spent a lot of time retrofitting a certain website for screen readers recently. Before a month or two ago, I couldn't have told you how to really hide text from screen readers (and I received conflicting reports on how to do it). Through the process of code, review and repeat, I nailed down some of the basics of CSS and Javascript for improved accessibility.

One of the keys to improving screen reader user experience: users shouldn't be forced to listen to ALL of the content on the page when it is being hidden from sighted users (think Javascript accordion). Here's how to really hide content from screen readers:

```
<style type="text/css">
.reallyHidden {
      display:none;
      visibility:hidden;
}
</style>
```

Not to be confused with offscreen positioning, which is still read aloud to screen readers. This method is used to provide context for background images (like graphic headlines and logos) and to hide access menus from sighted users:

```
<style type="text/css">
.offscreen {
      position:absolute;
      left:-50000px;
}
</style>
```

The other thing I've spent a lot of time on is making custom JavaScript widgets keyboard & screen reader accessible (tab switchers, accordions, etc.). Because these widgets present new content on interaction, we have to alert screen reader users to that new content and make it clear what's going on.

There are three parts to this accessibility requirement:

1. Updating links after triggering action to indicate what they will do: Expand vs. Minimize
2. If links are kept short for visual reasons (i.e. `Expand >`), add offscreen text to provide context:
    
    ```
    <a href="#" id="trigger">
          <span class='tip'>Expand</span> 
          <span class="offscreen">content section</span>
    </a>
    ```
    
3. If new content appears on screen, send focus there dynamically so screen reader users know it has been added. Be aware this takes focus away from the link, but this only really affects keyboard users.  
    
    ```
    
    $('a#trigger').click(function(e){
         // span.tip needs logic for toggle, this only goes one way
         $(this).find('span.tip').text('Minimize');  
         $('#newContent').focus();
    });
    ```
