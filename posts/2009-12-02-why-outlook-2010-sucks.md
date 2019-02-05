---
title: "Why Outlook Sucks"
date: "2009-12-02"
path: "/why-outlook-2010-sucks"
---

[Fix Outlook 2010!](http://fixoutlook.org "Fix Outlook!")

I work endlessly to make my web-pages and HTML emails work across platforms, browsers, and email clients. I have learned about the quirks of each publishing outlet and try to anticipate inconsistencies when laying out a specific design. However, I am reminded daily of why I dislike Microsoft — Outlook 2007 (and now Outlook 2010) cannot render even the most basic HTML in an email, when the same email looks great nearly everywhere else.

For example, on a recent HTML email campaign, I had my HTML perfect in what I thought were all major email clients. I tested in Outlook 2003, Outlook Express, Mac Mail, Gmail, GoDaddy webmail, Yahoo and more. I should have already known this, but a “problem child” emerged, forever an infinite thorn in my side: Outlook 2007. It cannot render the simplest of CSS attributes (like width + height), and completely ignores many others; background colors drop out, margins are meaningless, and a lot of CSS does not actually cascade. Even Outlook 2003 can get it right, since it uses the Internet Explorer engine (IE being desirable – imagine that!). However, Outlook 2007 and 2010 both use the Word engine. That’s right, Microsoft is using WORD to render HTML, and they are continuing the practice with the newest release of Outlook. It makes my blood boil just thinking about all the redundant HTML/CSS hand-holding required to make Outlook play ball.

The current state of CSS in HTML emails on the Campaign Monitor website says it all. Have a look at the Outlook 07/10 column, particularly the sections on the Box Model and Positioning & Display:

**[Guide to CSS support in email clients](http://www.campaignmonitor.com/css/)**

The article below from Email on Acid discusses this issue, and the future of Outlook is just as infuriating:

**[Microsoft Not Playing Nice with Office 2010](http://www.emailonacid.com/blog/details/C13/12)**

“It doesn’t appear that Microsoft is going to play nice with HTML rendering in Office 2010. They are continuing down the ‘07 path by using Word to render HTML. Are you surprised? Honestly, we aren’t. We have recently received a beta version of Outlook 2010 and through our tests we have noted the same rendering problems from Outlook 07.

“Why are they so stubborn? Microsoft’s reasoning behind using Word to render HTML is that emails composed in Outlook 07+ will look consistent when viewed by other Outlook 07+ recipients. They also claim that using the Word engine allows users to easily cut and paste from Microsoft office products directly into their email. To review a complete online explanation from Microsoft [click here](http://office.microsoft.com/en-us/outlook/HA102109301033.aspx).

“The problem is that not everyone uses Outlook and to assume that recipients will see an email the way that it is composed in Outlook 07+ is a common mistake. In actuality, Outlook has a very small market share in the ever-expanding world of email clients. To assume that they are the only provider is par for the course for Microsoft, therefore it is not a big surprise that they are headed in the same direction for Outlook 2010.”

—

Does anyone else have an Outlook horror (or success) story? Am I alone in thinking Microsoft is giving us all the finger by continuing to render HTML in Outlook with Word?
