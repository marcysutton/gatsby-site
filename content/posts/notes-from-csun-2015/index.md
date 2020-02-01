---
title: "Notes from CSUN 2015"
date: "2015-03-10"
path: "/notes-from-csun-2015"
coverImage: "./tandem-biking.jpg"
---

![Horizontallly-split diptych, top photo: Laura Legendary (rear seat) and me (front seat) riding a tandem bicycle on the boardwalk in San Diego, laughing in our helmets. Bottom photo: Victor Tsaran (rear seat) and Mark Sadecki (front seat) riding a tandem bicycle amongst palm trees, boats and water](./tandem-biking.jpg)![A blind man talking to a robot](./csun-robot-man.jpg)

In the first week of March, I attended and [spoke at](http://www.csun.edu/cod/conference/2015/sessions/index.php/public/presentations/view/172 "Developments in Angular.js Accessibility, Link opens in a new window") the [CSUN](http://www.csun.edu/cod "Link opens in a new window") 30th Annual International Technology and Persons with Disabilities Conference in San Diego. To go to CSUN is to be reminded of how much there is to learn about accessibility. A large community comes together, sharing knowledge and experiences from around the field. We all come at it from different directions, but it's wonderful to be in the company of people who care deeply about making the web accessible to all.

CSUN is an opportunity to learn about lesser-known areas like cognitive accessibility, a very popular topic this year, and to attend sessions relevant to your own slice of things. There are hundreds of overlapping talks, so it takes a bit of planning and luck to find the best ones. This year the sessions filled up insanely fast and I unfortunately missed some that I wanted to attend, including one on Angular, Accessibility and SVG. Many people also said they were unable to get into my talk on Developments in Angular Accessibility ([slides](https://marcy.codes/slides/angular-a11y-csun "Link opens in a new window")), along with a ton of others. Hopefully the organizers will find a better solution for assigning rooms at next year's event. Perhaps we show popularity for a session by adding it to our schedule!

In many ways, conferences help us to gain perspective from other people. A big takeaway for me at CSUN this year was to regularly test with real users on projects (it seems so obvious when said out loud), including those with disabilities. On Angular Material, we have tons of people using our components in the open source community. Their participation is certainly a start to finding issues with usability, as they will be reported, but they are development consumers. They know too much about how things are built and what to expect when using the interface. By testing with people less familiar with the UI framework and iterating on their findings, we can pass the benefits on to all our users. As I learned from a great session on open source, there are also things we can do to make our build process more accessible to encourage participation by people with disabilities.

I also realized the need to expand my technical testing horizons, as there are gaps in my current matrix–really cool stuff, too, like Dragon Naturally Speaking, high-contrast media queries and the Web Speech API. While learning techniques to do our jobs better, it's also important to look ahead to new technologies and how they might help accessibility. We could perhaps build integrations for the Apple Watch or Nest Thermostat, or make futuristic gesture-controlled apps using the [Myo armband](https://www.thalmic.com/en/myo/ "Link opens in a new window") or Leap Motion. I personally love hearing about new uses of technology that people's lives better.

One amazing example of an experimental technology shown at CSUN this year was Doug Schepers' SVG screen reader, [Describler](https://github.com/shepazu/describler "Link opens in a new window"). It wasn't an official session, but rather a hallway-track demo he pulled up on a laptop for anyone who asked. The project synthesized alternative content for SVG charts using the Web Audio API and JavaScript, reading aloud information about data trends as you interacted with the app. It was a well-executed and imaginative interface that looked like a possible new direction for screen readers. The app programmatically announced data point comparisons, making visual data easier to digest for users with low-vision or cognitive disabilities...heck, after a few drinks it would be quite welcome. As a member of the W3C, Doug mentioned a goal of the project was to dream big in its feature set and potentially put pressure on screen reader designers. As developers, we agreed that assistive technologies would really benefit from standards just like browsers have, but perhaps simpler, with easy wins to start. Assistive technology standards could be a way for the community to develop user experiences like these and push for them to be adopted.

In addition to new research and project ideas, I learned some neat tricks for development, including an `aria-labelledby` technique from Karl Groves & Billy Gregory where you can properly label "Read more" links using multiple IDs:

```
<h1 id="articleHeading1">Cupcake Ipsum</h1>
<p>Gummies biscuit chocolate cake sesame snaps marzipan I love I love. 
<a href="cupcake.html" id="articleLink1" 
   aria-labelledby="articleHeading1 articleLink1">
   Read more
</a></p>
```

[Read More links with multiple label sources on Codepen.io](http://codepen.io/marcysutton/pen/JoaVrX "Link opens in a new window")

In the above code, a vague "read more" link is made more descriptive for screen readers using two space-separated IDs: from the link itself and a neighboring heading, bound with ARIA-labelledby. It is then read aloud as "Cupcake Ipsum Read More". I hadn't seen this self-referential ID trick before, and it was a reminder of how `aria-labelledby` will effectively replace the accessible name on an element with a reference to another (try removing the `articleLink1` reference on Codepen to hear "Read more" go away entirely). This trick can be used to combine label contexts together. It is important to know what ARIA is doing, however, especially when it comes to [accessible name calculation](http://www.w3.org/TR/wai-aria/roles#namecalculation "Link opens in a new window"). When I get ahold of Billy and Karl's slides, I'll post them here.

Although conflicting with the last few sessions at CSUN, Friday was fantastic as we got outside for a tandem bike adventure. Elle Waters from Simply Accessible helped me organize the small, sponsored event where we ventured down to the Wheels of Fun location on the Seaport Harbor. On 5 or 6 tandem bicycles, we paired up as sighted and visually-impaired cyclists for an afternoon in the sun. I rode with Laura Legendary, a visually impaired friend from Nevada, and we had a grand old time. I was happy she trusted me to pilot her up and down the boardwalk, even over a big bump protecting a giant hose running down to a giant yacht. We giggled and cooed, and Laura glowingly said she "felt free", as if she was five-years-old again and the luckiest person on the face of the planet. I felt the same–incredibly lucky to participate and share my passion for biking with a new group. Now that we've pulled off the first iteration and learned a few things, I look forward to repeating the tandem bike event and the rest of CSUN next year!

![](https://pbs.twimg.com/media/B_gtDVAVEAAFJk7.jpg)

Laura Legendary stands by in her helmet as Steve Sawczyn and Elle Waters try out a tandem bicycle at Wheels of Fun Rentals at the Marriott hotel in San Diego.
