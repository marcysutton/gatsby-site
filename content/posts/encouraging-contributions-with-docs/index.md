---
title: "Encouraging Open Source Contributions with Docs: a Self-Fulfilling Prophecy"
date: "2020-02-20"
path: "encouraging-contributions-with-docs"
draft: false
coverImage: './gatsby-repo-feb2020.png'
---

![Gatsby GitHub repo](./gatsby-repo-feb2020.png)

Open source is all about making software available to everyone to use. But there's a bit of a paradox: create something that developers really need and want, and they'll use it so much that the burden to support and maintain it becomes overwhelming. To overcome this and make a popular open source project more sustainable, it's essential to write discoverable documentation for people to contribute so they can help shoulder some of the effort. (Funding is also a factor in open source sustainability, but that's beyond the scope of this post.)

**Lacking documentation in open source is a self-fulfilling prophecy** that prevents users from contributing and inhibits project growth. By investing in docs and processes for contributors, they'll feel more welcome and able to participate in developing the project. You'll also have a higher likelihood of increasing project popularity, as developers legitimately become more invested in following it.

Without an inclusive system for contributions, you'll limit who participates in an open source project to those with insider access or the time and resources to figure it out. This can affect the project itself, as open source contributors are almost always users as well. If they can't build the project or run tests to make improvements to it, they'll need to rely on maintainers to implement their use case. With misaligned priorities and a lack of action in a project, users may move on to something else that actively supports their needs.

Software decisions are all about trade-offs, yet different developers, teams, or companies might have their own priorities that impact how decisions are made. When open source consumers submit an issue for a feature request that doesn't make the cut for a project roadmap, realistically that issue gets placed far down the list of things for core maintainers to work on ("parking lot" issues, if you will). This is where code contributions can make a huge difference: if the people with those wish-list issues are enabled to independently submit pull requests (PRs) that meet project standards, it can expand that project's ability to grow even with limited bandwidth.

## Contributing in Gatsby.js

For the past year, I've worked as the Head of Learning for the open source website framework Gatsby, in charge of its documentation and learning experience. I inherited a solid foundation of documentation and contributor processes, some of which delve more into Developer Relations than Learning per se. But I've seen how those investments have translated into big numbers: nearly 3000 contributors to the documentation and source code, and over 42k GitHub stars. During Hacktoberfest in October 2019, we merged over 630 pull requests!

Having an independent [docs site](https://gatsbyjs.org/docs) with extensive user and contributor documentation, including a Code of Conduct and Style Guide, as well as an [active GitHub repo](https://github.com/gatsbyjs/gatsby) and [docs translation process](https://www.gatsbyjs.org/contributing/translation) supports growth of those numbers. It also helps that Gatsby is a mainstream project as opposed to more niche tooling (not a judgement of smaller projects, but a quantifiable reality I've observed).

I'll never tire of reading tweets from developers celebrating their [first open source contribution](https://twitter.com/kimberrypi/status/1162444570501607424) in Gatsby. I can see the project grow stronger and support more people's use cases every day by enabling them to contribute, and that's super cool.

## Tracking and metrics

Tracking and quantifying growth is a requirement of managing an open source project. In Gatsby Learning, we're more concerned with the amount of content coverage and accuracy for common user workflows than growing the number of contributors. But having a healthy contributor base helps us provide better docs, as a large content surface area and a small internal team means we need all the help we can get to support more use cases. This is also how Developer Relations activities can support Learning: by tracking contributor metrics. With separate teams and ownership of different objectives like we have at Gatsby, we need to be highly collaborative to experiment and produce meaningful outcomes that support the project's overall goals and priorities.

It's worth saying that you also need a culture open to experimentation that encourages trying new things in the first place: that's a cornerstone of Developer Relations. If your advocates have their ideas shut down repeatedly, especially when they're surfacing feedback from users and contributors to grow the project, frankly, they'll burn out and stop trying after a while.

To keep your project from appearing stale and losing steam, issues and PR contributions need to be addressed and not left hanging. Support this effort by tracking metrics that matter: the number of external contributors (including repeat contributions!), number of open issues and PRs, age of those open issues and PRs, and more.

What exactly you should measure will depend on what you want to achieve with your project. Maybe you don't _really_ care about open source growth because it's a marketing tool for your paid software, and you aren't going to prioritize the open source community at your paid software's expense? It's still worth considering how you'll grow and sustain your open source project to keep it from growing stale, before a competitor slides in and better supports users and contributors, eventually taking your place.

### Living your values and priorities

My previous role as a Developer Advocate for the open source axe-core accessibility testing API involved tracking metrics for its GitHub repo, and this experience gave me a lot to think about as I moved on to a larger, more mainstream project.

One of my "rocks" in that role included growing the repo's GitHub stars, and at the time it seemed to naturally grow with the number of high-profile accessibility conference talks and blog posts I delivered. Looking back, I believe stars were a vanity metric that I'm now unclear what value they truly added (I didn't put them on the list but I didn't propose anything else, either). There's much more I could have done to grow a strong contributor base to grow the project's reach and make it more active with contributions from non-core team members, but it also wasn't a priority to the project or we would have tracked different metrics.

I see open source and community health as living your values and priorities. An enforceable Code of Conduct provides a safer environment for diverse contributors and makes it clear that poor behavior and harassment are not to be tolerated. On the other hand: cryptic, lacking, and outdated documentation sends the message that contributions should be limited to an insider circle of people who are smart enough to figure it out, and that open source contributions aren't that important. If your docs and contribution processes don't reflect the values and growth trajectory you want for your open source project, it's time for a rethink.

## Conclusion

So how do you encourage contributions in an open source project? Write docs, including contributing docs with instructions for how to set up the project and run tests. Add comments and tests to the code, and keep them up to date as the project evolves. Make docs easy to discover and use: this means publishing them somewhere other than in GitHub source code, like a docs site or even a Wiki. These things can help you avoid the self-fulfilling prophecy of lacking docs translating into low contributorship.

Making it possible for non-developers can also really help a project grow. Include content that doesn't rely on reading source code to know how to contribute, and allow people to contribute small PRs to improve documentation. Hacktoberfest is a great opportunity to encourage people to contribute to open source for the first time, and labeling issues with "good first issue" can provide pathways for them to take their first step.

Identify pain points with your project as it grows, such as issues and PRs from contributors going stale, and figure out how you're going to improve on it. Add metrics to track progress in those areas so teams have an incentive to change. It's worth it to keep your open source project growing sustainably, if you want people to actually use it; otherwise, what's the point of making it open source in the first place?
