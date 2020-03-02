---
title: "PHP Twitter Feed"
date: "2010-06-04"
path: "/php-twitter-feed"
---

Note: this needs some sort of caching or limiter function added so it doesn't max out the Twitter API limit. So beware if it suddenly stops loading tweets!

I was tasked to use a Twitter feed in a client’s HTML website a few months ago and though I found a few scripts that were close to what I needed, they just weren’t getting the job done. Either the date was wrong on all the posts, there was no date at all, or there were no active links in the posts…. and each attempted to have way more functionality than necessary to accommodate a wide range of users. I just wanted a simple parser to show the post with active links, and the date linked to the post on Twitter. Not difficult, considering a Twitter feed is really just XML — so I wrote my own PHP 5 class.

Because I was sourcing a single Twitter page that is updated once or twice a day, I determined that using PHP to parse the feed would suffice. If I were pulling in a trending topic that had a way higher frequency of updates (like every few seconds), I would use an AJAX feed instead. But for this particular instance, PHP got the job done quite easily.

With portability & reusability in mind (the main objectives of object-oriented code), I wrote a custom PHP class that generates a Twitter feed in an unordered list. To use the class, you just have to include the file somewhere in your PHP page and create a new TwitterFeed object, passing in the Twitter username and number of posts you would like to show.

```
\<?php
class TwitterFeed {
 
function __construct($username, $limit){
 
    // generates feed url from $username and $limit  
    $feed = 'http://twitter.com/statuses/user_timeline.rss?screen_name='.$username  »
    .'&count='.$limit;
 
    // check if file is accessible, to prevent errors in output 
    if (! ($handle = @fopen($feed, "r")) ) {
        die("<p>There was a problem fetching data. Please check back later.</p>");
    }
    else {
    // use SimpleXML to parse feed 
    $file = file_get_contents($feed);
    $tweets = new SimpleXMLElement($file);
 
    echo "<ul id=\"twit-twit\">\n";
 
    // create array for XML elements I want to skip in my foreach loop 
    $skip = array('title','link','atom','description','language','ttl');
 
    foreach($tweets->channel->children() as $item){
	// skips the first few elements in "channel" (title was being stubborn, so I added more logic) 
	if(array_search((string)$item->getName(), $skip) == FALSE && (string)$item->getName() !== 'title'){
 
	    // remove username from post descriptions 
	    $description = str_replace($username.": ", "", $item->description);
	    // make links with http: active in descriptions 
	    $description = preg_replace("/(http:\/\/|(www\.))(([^\s<]{4,68})[^\s<]*)/", "<a href=\"http://$2$3\"  » 
	    target=\"_blank\">$1$2$4</a>", $description);
	    // make links with @ active in descriptions 
	    $description = preg_replace("/@(\w+)/", "<a href=\"http://www.twitter.com/\\1\"  » 
	    target=\"_blank\">@\\1</a>", $description);
 
	    // format date - convert to Unix timestamp, then reformat as desired 
	    $pubDate = strtotime($item->pubDate);
	    $date = date('g:i a m-d-y', $pubDate);
	    $url = $item->guid;
 
	    // print descriptions with active links and date linked to post on Twitter 
	    echo "<li>".$description." | <a href=\"".$url."\" target=\"_blank\">".$date."</a></li>\n";
	}
    }
    echo "</ul>\n";
    }
}
}
?>
» denotes break in code for viewing purposes 

```

To get your Twitter feed into action on a PHP page, create a new TwitterFeed object (make sure you’ve included the class somewhere and you’re using PHP 5):

 
 `<p>Twitter Feed<p>
<?php $twitterfeed = new TwitterFeed('MyTwitterUsername', 5); ?>`
