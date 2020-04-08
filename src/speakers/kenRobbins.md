---
layout: speaker.njk
speaker:
    name: Ken Robbins
    title: CEO at CloudPegBoard
    bio: Ken is the volunteer CTO of Miles4Migrants.org whose mission is to use donated frequent flyer miles to reunite refugees and asylum seekers with their families around the world. By day, Ken is the founder and CEO of CloudPegboard.com, a free service to help developers keep up with and efficiently get the most out of AWS. Before Cloud Pegboard, Ken was the Executive Director of Engineering for Novartis Institutes for BioMedical Research where he moved the organization from a fully on-prem organization to a cloud first organization with over 500 onboarded engineers and informaticians supporting research science. Ken is also on the leadership board of the Boston AWS Meetup group.
    img: /img/kenRobbins.jpeg
    social:
    -   name: Twitter
        link: https://twitter.com/CloudPegboard
        icon: /img/Twitter.svg
    -   name: LinkedIn
        link: https://www.linkedin.com/in/kerobbins/
        icon: /img/linkedin_white.png
---


## Humanity - powered by serverless

A 5-month old refugee with an urgent heart condition was trapped in a border camp in Mexico awaiting to get surgery in New York. The infant’s older brother was able to get him to New York, but this was only possible by leaving his asylum-seeking parents behind. By the time the parent’s appeal to attend their son’s surgery was approved, there were only hours to spare to process the paperwork, book a flight, and get to New York. They arrived at 1 a.m. for a surgery that started at 6 a.m.

We’ll show how a simple serverless solution ended up being the critical connector, without which, the parents would not have been present for their baby’s surgery and recovery.

This is not a story of a technological breakthrough, but rather, how the use of a serverless approach made it possible to develop a solution, that otherwise just would not exist. Our non-profit organization, Miles4Migrants has no engineering staff aside from myself as a part time volunteer that I squeeze in while also trying to create a single-person bootstrapped startup. This means that if a given technical solution cannot be developed quickly and be run without maintenance, then it won’t exist.

This particular solution is a mobile app that lets our NGO partners working with refugees present them with a fully electronic agreement, in their native language, and then electronically sign - a prerequisite for Miles4Migrants to engage to book tickets for refugees and asylum seekers who have been granted a right to travel, but don’t have the means to pay for the airfare. The solution is based on AWS Lambda, with API Gateway, S3, and SNS, as well as an integration to Atlassian Jira Service Desk. We use the Serverless Framework to orchestrate our deployment pipeline.

This case shows how a (server)less is more approach enables us to reunite more families while being extremely technically lean.