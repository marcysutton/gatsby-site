---
title: "Simplexml in php 5"
date: "2010-04-25"
path: "/simple-xml-in-php"
---

I found a new love in PHP — SimpleXML. I recently discovered I can traverse an XML tree just like I do in Actionscript, right in the middle of an HTML page. This makes it easy to create a website with all content in an XML document, a technique I like to use on projects that do not have the budget for a CMS. XML is useful for organizing site navigation and image/copy content in a central place, thus making it a breeze to update. You can then use `SimpleXML` to inject content into an HTML page with just a few lines of code.

According to the [W3Schools:](http://www.w3schools.com/php/php_ref_simplexml.asp)  
_“The SimpleXML function lets you convert XML to an object… This object can be processed, like any other object, with normal property selectors and array iterators.”_

Using SimpleXML is as easy as loading the XML file and adding it to a SimpleXML object (this requires PHP 5):

```
<?php
$file = file_get_contents('navigation.xml');
$xml = new SimpleXMLElement($file);
?>
```

Say you have your navigation organized in a basic XML file. It can be as simple or complex as you like; that’s the beauty of XML. My example below has attributes for page titles and URLs, which could easily be combined into one attribute and transformed accordingly with a PHP loop — for this example I kept them separate. Query strings are totally optional — it just depends on how you want to generate your subpage URLs (using $\_GET or separate physical pages?).

```
// navigation.xml
<?xml version="1.0" encoding="UTF-8"?> 
<navigation>
	<page title="Home" url="index.php" />
	<page title="Projects" url="projects.php">
		<subpage title="Personal" query="personal" />
		<subpage title="Technical + Geeky" query="technical" />
		<subpage title="Creative" query="creative" />
	</page>
	<page title="About Me" url="about.php" />
	<page title="Contact" url="contact.php" />
</navigation>
```

You can structure your XML file however you like by adding/removing child nodes and attributes to fit your website’s particular requirements. To generate HTML output from the XML file above, I like to use a `foreach` loop:

```
 
<div id="nav">
 
<?php
$file = file_get_contents('navigation.xml');
$xml = new SimpleXMLElement($file);
 
$checkit = $_SERVER['SCRIPT_FILENAME'];
// for checking the current page 
$path = 'http://.'$_SERVER['HTTP_HOST'].'/';
// useful for generating full subpage URLs and preserving the domain in links 
 
$counter = 0;
 
echo "<ul>\n";
foreach($xml->children() as $page) {
   $numSubChildren = count($page->children());
    <li";
   if($numSubChildren > 0) {  // add a class to <li>s with children 
   echo" class='hasChild'";
   }
// form href from path and url attribute 
 echo"><a href='". $path . $page->attributes()->url. "' class='navLink";
 
// replace pesky ampersands in attributes 
$pageTitle = str_replace(' & ', ' &amp; ', $page->attributes()->title); 
 
// add class to current link 
 if(strstr($checkit, $page->getName()))  {
	echo " current'>".$pageTitle;
}
 else {
	echo "'>".$pageTitle;
}
echo "</a>\n";
 
if($numSubChildren > 0) {
echo " <li id='sub".$counter.">
           <ul>";
 
   foreach($page->children() as $subpage) {
// loop through subpages 
$subtitle = str_replace('&','&amp;',$subpage->attributes()->title);
 
echo " <li class=\"subLi\"><a href='".$path.$page->attributes()->url."/".$subpage->attributes()->query;
 
// this method uses URL rewriting, but can also be used with plain query strings
// ?subpage=$subpage->attributes()->query; 
 
echo "' class='navLink'>".$subtitle."</a><li>\n";
		}
echo "	</ul>\n";
$counter++;
	}
echo " 	<li>\n";
echo " </ul>\n";
?>
</div>

```

I love this method because it is so simple to use — but it has potential to grow into complex code, as you can see. Holler at me if you have any questions or if you find this useful!
