---
title: "AS3 Load Workflow"
date: "2010-02-17"
path: "/as3-loading-workflow-xml-first-then-multiple-assets"
---

I recently finished my first big Actionscript 3 website and had to decide on the best loading sequence. I initially tried using the [BulkLoader Class](http://code.google.com/p/bulk-loader/), since filesize wasn't much of an issue, but I ran into trouble when I needed to add things to the queue after loading began.

I was trying to load multiple external assets at once {1 swf, 1 css file, multiple images}, but couldn't quite figure out how to order the sequence because of the dependency on a loaded XML file. I posed this question:

> **What are the best practices for program initialization and chain loading of assets in AS3, particularly when the site structure is created from an XML file?**

First and foremost, I was loading a single SWF and an XML file containing the _navigation / page structure_, _page id's_, _page content_, and _slideshow image filenames_. I tried using the Bulk-Loader class to load the XML and a CSS file up front, and then loaded all images while populating the site. It was a multi-part process: download xml, assign page instances, load images and text formatted via CSS, and show page 0. I wondered: was there a way to somehow use a single preloader for all of this bulk-loading?

A few notes about my initialization process: there was 1 frame in the timeline, and only the preloader existed on the stage. The contents of the website (navigation, pages, subpages, background images, slideshows, etc.) were all initialized as new objects based on the loaded XML, next removing the preloader clip and starting the movie. I was also implementing SWFAddress, so the preloading sequence was critical to master.

I luckily discovered [AS3 QueueLoader](http://code.google.com/p/queueloader-as3/) -- it enabled me to add assets to the queue on the fly after the XML was loaded, and still kept my preloading as one process. Sweet!

I hope this helps somebody. Let me know if you have any questions about it!

Here is some code that adds images to the queue after the XML has loaded (a lot of details omitted):

```
 
private function init():void {
    _oLoader = new QueueLoader();
    _oLoader.addItem(PATH+cssURL, css, {title:'cssContent'});
    _oLoader.addItem(PATH+"xml/copy.xml", pageXML, {title:'pageXML'});
    _oLoader.addEventListener(QueueLoaderEvent.ITEM_PROGRESS, onItemProgress, false, 0, true);
    _oLoader.addEventListener(QueueLoaderEvent.ITEM_COMPLETE, onItemComplete, false, 0, true);
    _oLoader.addEventListener(QueueLoaderEvent.QUEUE_PROGRESS, onQueueProgress, false, 0, true);
    _oLoader.addEventListener(QueueLoaderEvent.QUEUE_COMPLETE, onQueueComplete, false, 0, true);
    _oLoader.execute();
}
 
private function onItemComplete(evt:QueueLoaderEvent):void {
    if (evt.title == 'cssContent') {
        css = StyleSheet(evt.content);
    }
 
    if(evt.title == 'pageXML'){
        pageXML = XML(evt.content);
        processXML(); // creates page objects based on XML
 
        for(var i:int=0; i<pageXML.PARENT.length(); i++) {
           //loops through XML for background images and adds them to various
           //sprite layers for simple turning on and off
 
          numSubPages = pageXML.PARENT[i].PAGE.length();
          var pageImgHolder = new Sprite();
          pageImgHolder.name = 'page'+i;
          pageImgHolder.x = 0; pageImgHolder.y = 0;
          bgImgHolder_mc.addChild(pageImgHolder);
 
          for(var j:int=0; j<numSubPages; j++) {
              if(String(pageXML.PARENT[i].PAGE[j].@IMAGE) !== '') {
                  bgImg = new Sprite();
                  bgImg.name = 'page'+i+'img'+j;
                  bgImg.alpha = 0;
 
                  pageImgHolder.addChild(bgImg);
                 _oLoader.addItem(PATH+'images/'+pageXML.PARENT[i].PAGE[j].@IMAGE, bgImg, {title:'page'+i+'img'+j})
 
                  trace(pageImgHolder.parent.name+'/'+bgImg.parent.name+'/'+bgImg.name+' = '+pageXML.PARENT[i].PAGE[j].@IMAGE);
                 }
             }
          }
      xmlLoaded = true;
    } 
}
private function onQueueComplete(evt:QueueLoaderEvent):void {
    trace("** "+evt.type);
    imgHolderLoaded = true;
 
    Preloader.instance.spinnerDone();
    startMovie();
 
    bgImgHolder_mc.turnOnImg(0, 0);
    //turns on image for page 0, subpage 0 (i have a very complicated architecture)
}

```
