---
layout: speaker.njk
speaker:
    name: Yan Cui
    title: AWS Serverless Hero | Independent Consultant
    bio: Yan is an experienced engineer who has run production workload at scale in AWS for over 10 years. He has been an architect and principal engineer with a variety of industries ranging from banking, e-commerce, sports streaming to mobile gaming. He has worked extensively with AWS Lambda in production and has been helping clients around the world adopt AWS and serverless as an independent consultant. \n\r Yan is an AWS Serverless Hero and a regular speaker at user groups and conferences internationally. He is also the author of Production-Ready Serverless and co-author of Serverless Architectures on AWS, 2nd Edition, both by Manning. And he keeps an active blog at https://theburningmonk.com and publishes a weekly podcast at https://realworldserverless.com.
    img: /img/yancui.jpg
    social:
    -   name: Twitter
        link: https://twitter.com/theburningmonk
        icon: /img/Twitter.svg
    -   name: LinkedIn
        link: https://www.linkedin.com/in/theburningmonk
        icon: /img/linkedin_white.png
---


## Beware the potholes on the road to serverless

These are the mistakes I intend to cover:
1) not letting go of legacy thinking
2) having one AWS account for all environments
3) do first, research later
4) not using a deployment toolkit and building in-house scripts instead 5. console-driven development
5) one repo per function
6) unencrypted secrets in env vars
7) not following least privilege principle
8) missing DLQs for async functions
9) having too much/too little concurrency
10) misconceptions about cold starts
11) badly handled RDS connections
12) lack of observability
