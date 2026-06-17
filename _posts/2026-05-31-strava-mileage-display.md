---
layout:      post
title:       Strava Mileage Display
date:        2026-05-31 11:41:00 -0500
description: Creating an all-time mileage display badge for my site.
tags:        coding, running
---

The other day when I was brainstorming projects for this summer, I thought about doing a little all-time mileage tracker from Strava that could be embedded in a website, just as a fun badge. I ended up not putting it on there because it went against my goal to work on longer projects rather than one-off ones, but now I’ve made it. Whoops.

Strava actually has a really nice [API](https://developers.strava.com/) that lets you do stuff like this pretty easily, so I used that for this project. I was thankful that I didn’t have to do something like web scraping, especially because as I’ve been looking into that lately it seems that most websites have policies against it.

At first I thought I would just make an API call to Strava each time someone visited my site to update the mileage, but I actually found a much better method to achieve the same results with less API calls: GitHub Actions. I had never worked with them before this project, and it’s a pretty cool service that is surprisingly easy to use and free! (It seems like something like this would not be free.) In my implementation, I configured it to run basically like a cron job, so that it runs once every day at midnight UTC. This is great because it ensures that I’ll never exceed the API’s rate limit, even though that probably wouldn’t happen anyway. When the action is run, it runs a ``update-mileage.yml`` file that authenticates the request with the various keys provided by Strava, then sums mileage in 200-activity chunks before writing it to ``strava-stats.json``, which can then be easily read by a JS script when someone visits the page. I originally tried to get my mileage via fetching my athlete stats, which provides a small summary, but for some reason that only includes public activities, and almost all of my activities are private.

During this process I also got to learn about another great component of GitHub, which is its repository secrets. These let you store sensitive information (such as API keys) so that you don’t have to obfuscate them, which I found annoying when making [Rundex](https://github.com/liamb09/Rundex). It was another surprisingly nice feature of GitHub that I didn’t know about before.

This project came together pretty fast, and it’s pretty cool to have a little mileage icon on my website now. If you want to add this badge to your own GitHub Pages site, you can copy my ``update-mileage.yml`` file into ``.github/workflows/`` in your repo and add the ``STRAVA_ATHLETE_ID``, ``STRAVA_CLIENT_ID``, ``STRAVA_CLIENT_SECRET``, and ``STRAVA_REFRESH_TOKEN`` repository secrets. That should be all you need so that the Action writes total mileage data to ``data/strava-stats.json``, which you can read and display on your site.