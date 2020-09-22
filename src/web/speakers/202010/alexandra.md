---
layout: speaker202010.njk
page:
    title: ServerlessDays Virtual - Alexandra Abbas
    description: 'Creating a fully serverless workflow management platform — an experiment on Google Cloud'
    url: https://virtual.serverlessdays.io/speakers/202010/alexandra
    image: https://virtual.serverlessdays.io/img/202010/og/alexandra_abbas_card.png
speaker:
    name: Alexandra Abbas
    title: 'Data Engineer @ datastack.tv'
    bio: "Alexandra is a Google Cloud Certified Data Engineer & Architect and founder of datastack.tv, the learning platform for the modern data stack. At datastack.tv she and a handful of other technical instructors create concise screencast video tutorials for Data Engineers. Alexandra has created the Modern Data Engineer Roadmap 2020 which got 2k stars on GitHub in just a few weeks."
    img: /img/202010/alexandra_abbas.jpg
    social:
    -   name: Twitter
        link: https://twitter.com/alexandraabbas
        icon: /img/Twitter.svg
    -   name: Github
        link: https://github.com/alexandraabbas
        icon: /img/Github.svg
---

## Creating a fully serverless workflow management platform — an experiment on Google Cloud

With the release of Cloud Workflows creating a fully serverless workflow scheduler is now possible on Google Cloud Platform.

As of today, the mainstream workflow scheduler used by most companies is Apache Airflow. On Google Cloud you have two options when it comes to setting up Apache Airflow infrastructure. You either use Cloud Composer which is a managed Kubernetes based Apache Airflow service or you provision your own infrastructure. Even with the managed option you need to know the number of Kubernetes nodes, machine type and disk size that you need. 

In this experiment, Alexandra is attempting to build a fully serverless workflow management solution on Google Cloud combining Cloud Workflows, Cloud Scheduler and Cloud Functions. This solution is expected to drastically reduce the cost and effort needed to provision and maintain a workflow scheduler.

Alexandra will share her learnings from this experiment.