---
layout:      post
title:       Sourdough Bread Shop
date:        2026-06-12 16:47:00 -0500
description: Announcing my online bread shop.
tags:        coding, bread
---

Well, instead of posting regular project updates as I’d planned, I was so into making my bread shop site that I just put my head down and I’ve already finished it. It was a super fun project and I learned a lot.

This was my first time making a dynamic site (or at least a non-static one) because I was intimidated by servers and I don’t want to pay for hosting. But then I realized that I could just host something on my old laptop, which is what I’ve done for this. I learned Python Flask for the backend, which I host through nginx and a Cloudflare Tunnel to [bread.liambrandyberry.com](https://bread.liambrandyberry.com/). Flask was very simple to learn, and it’s so nice to use, if only because of how nice Python is to write.

With Flask, I just have a main file, ``app.py``, that routes the different pages nicely and also delegates database operations and confirmation emails. I used ``sqlite3`` to store order details, and wrote myself a custom shell through which I can easily go in and update my availability. The site itself is very simple, but I got to learn a surprising amount using all of these new frameworks.

Now, I guess, I just have to figure out how to start selling bread. Right now I have it set up so that only one order can be placed per pickup/delivery slot, and even that will probably be hard to fulfill. I’m hoping to sell a couple loaves this summer, but once the school year starts again I doubt I’ll be able to keep taking orders. Either way, I’m happy with what I was able to produce computer science-wise.