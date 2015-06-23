---
layout: post
title: Who's GreenCape?
excerpt: "About the purpose of GreenCape."
tags: [GreenCape, about]
comments: true
image:
  feature: header-image-3.jpg
  credit: By Sarah Stierch <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  creditlink: https://commons.wikimedia.org/wiki/File:Roy_Rosenzweig_Center_for_History_and_New_Media_C_-_Stierch.jpg
---

When I founded BSDS in 1983, development required just two tools: an editor and a compiler. There was nothing like
today's build chains and test environments. But times have evolved, and now a developer not only has to take care of
the software itself. Everything heads in direction of Continuous Deployment.

During the last couple of years, I found myself copying a default development layout for each new project. It had
a Phing build script automating a lot, and it grew more and more capable over the time.
While this approach may be fine, if you are working alone, it fails completely as soon as other developers step in.

GreenCape was the way to solve that issue. Its core is a set of development related GitHub repositories, which
allow for consistent environments on every development machine. Currently, the *build* and *docker* repositories are the
most important ones, but others will come.

This site contains the documentation for the stuff published on GitHub. From time to time, I'll blog about the
projects, their use cases, and evolution. I appreciate any constructive feedback.

