---
title: "AS3 Mouse Events"
date: "2010-01-05"
path: "/as3-mouse-events"
---

I developed a website with nav items that covered the whole stage from top to bottom and I ran into a problem where it was pretty easy for the mouse to exit the stage in the middle of a `MOUSE_OVER` event, not triggering the `MouseEvent.MOUSE_OUT` events required to "turn off" said nav items.

I wondered: should I be using `Event.MOUSE_LEAVE` to detect when the mouse has left the stage, and turn off any enabled nav items? That is what I tried to do, but I had trouble getting any output from the listener when I applied it to a MovieClip (this).

```
this.stage.addEventListener(Event.MOUSE_LEAVE, mouseLeaveListener);

```

I had the right event syntax, but it didn't seem to do anything no matter what I tried. After testing, posting on StackOverflow and learning more about AS3, I found out a few things about MouseEvents:

1. Make sure the target object has been added to the stage before applying Mouse event listeners to it.
2. If the problem still persists, test your file in a browser. In my situation, the MOUSE\_OUT issue only seemed to happen in the IDE.

Here is my MainNav.as class:

```
package com.redpropeller {
 
import com.greensock.*;
import com.greensock.plugins.*;
import flash.display.*;
import flash.text.*;
import flash.events.*;
 
public class MainNav extends MovieClip { // MainNav is a movieclip in the IDE
 
    public var colors:Array;
 
    public function MainNav():void {
        colors = new Array(0xee3124, 0xc72a1f, 0xa62c24, 0x912923, 0x7e221c);
        TweenPlugin.activate([TintPlugin]);
 
        this.addEventListener(Event.ADDED_TO_STAGE, navAddedListener);
    }
    private function navAddedListener(e:Event):void {
        // target the stage through this object after it has been added
        this.stage.addEventListener(Event.MOUSE_LEAVE, mouseLeaveListener);
 
        for(var i:Number=0; i<this.numChildren; i++){
            var n = this.getChildAt(i);
            n.useHandCursor = true;
            n.buttonMode = true;
 
            n.addEventListener(MouseEvent.MOUSE_OVER, navBtnOn);
            n.addEventListener(MouseEvent.MOUSE_OUT, navBtnOff);
        }
    }
    public function mouseLeaveListener(e:MouseEvent):void {
        trace('mouseleave'); // should fire after this has been added to stage
 
    }
    private function navBtnOn(e:MouseEvent):void {
        TweenLite.to(e.currentTarget.bar_mc, 0.01, {tint:0x333333});
    }
    private function navBtnOff(e:MouseEvent):void {
        TweenLite.to(e.currentTarget.bar_mc, 0.01,
            {tint:uint(colors[this.getChildIndex(MovieClip(e.currentTarget))])});
            // changes color back to specific tint
    }
}
 
}

```
