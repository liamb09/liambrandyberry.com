---
layout:      post
title:       SafeWalkers
date:        2026-07-30 12:53:00 -0500
description: Going over my summer internship project.
tags:        coding
---

Hello! As my summer internship wrapped up recently, I thought I’d just write a little summary of how it went and what my team did.

We were split into groups of five and tasked with creating a solution to a local problem in our city. We decided to focus on pedestrian safety due to the prevalence of pedestrian injury and our desire to get more pedestrians outside. For our project, we settled on SafeWalkers, an app that allows pedestrians to generate safe and engaging routes from any start and end points. We really wanted to focus on giving a comprehensive evaluation of each route, so we combined a live traffic API (TomTom), historical crime data (from a city database), route features such as water proximity and points of interest, as well as a community comment section so that each route was as descriptive and useful to our users as possible.

We started out with our backend programmers and designer working in parallel to implement basic routing functionality and create the optimal UI/UX. For the first part of the internship, I focused on configuring route generation with the OpenRouteService (ORS) API. Once I got that working, I compiled historical crime data and analyzed it to find the crime hotspots, which I could subsequently ensure that the ORS API avoided with its handy ``avoid_polygons`` tag. Then I fetched live traffic data and calculated the route’s intersection with high-traffic areas to determine its traffic safety score.

At this point, our designer had completed the desktop UI for our app, so we began migrating our UI from our basic placeholder version to the final design. We lacked foresight, however, and realized that our designer could easily export the UI/UX into a React/Vite app from Figma, so we had to migrate our whole app from basic FastAPI HTML templating to React. This proved to be a huge learning curve, and for a couple of days I really struggled to understand how to connect our existing API endpoints to the new frontend. Once I figured it out, it still took over a week to complete the shift, but using the exact UI from Figma was much easier than implementing it through vanilla CSS would have been.

Towards the end of the internship, we added some more basic features around our core route generation algorithm that allowed users to save and share routes, as well as follow other users. We worked pretty efficiently, though, and were able to give a good final “Shark Tank” presentation and functional demo to mock investors, which was a fun way to wrap it up.

Our website (which is mobile-friendly, as we did not have the time to create a mobile app) is live at [the-internovators.vercel.app](https://the-internovators.vercel.app/), though it’s slow and finicky, as we focused primarily on creating an effective proof of concept by hosting it locally.

Overall, the internship was a great experience in teamwork and software development, and it makes me excited to pursue more internship and research opportunities in the future.