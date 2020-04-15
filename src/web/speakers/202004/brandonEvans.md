---
layout: speaker.njk
page: 
    title: ServerlessDays Virtual - Brandon Evans
    description: 'Attacking Serverless Servers: Reverse Engineering the AWS, Azure, and GCP Function Runtimes'
    url: https://virtual.serverlessdays.io/speakers/202004/brandonEvans
    image: https://virtual.serverlessdays.io/img/og/16.png
speaker:
    name: Brandon Evans
    title: Instructor at SANS Institute
    bio: Brandon is an Instructor for the SANS Institute. He teaches SEC540, Cloud Security and DevOps Automation. His full-time role is as a Senior Application Security Engineer at Asurion, where he provides security services for thousands of his coworkers in product development across several global sites responsible for hundreds of web applications. This includes performing secure code reviews, conducting penetration tests, developing secure coding patterns, and evangelizing the importance of creating secure products.\n\r Previously serving as a software engineer at Asurion, he worked on their Tech Expert service, which offers personalized help, guidance and tips across all of the customer's connected devices. Additionally, he has served as a Security Maven for Asurion since early 2018, where he has acquired his GSEC, GSSP-JAVA, and GWAPT certifications, attended the 2019 AppSec California Conference, and won five Security Innovation Capture the Flag events, also placing second at their CTF at DEF CON 27. Prior to Asurion, Brandon was a developer for Smartvue Corporation, an Internet-of-Things video surveillance startup that has since been acquired by Johnson Controls.\n\r In his spare time, he is also an Instructor at the Vanderbilt University Web Development Coding Bootcamp and a contributor to the OWASP Serverless Top 10 Project. Brandon has a Bachelor's Degree in Computer Science from Binghamton University, where he was also a competitive member of their debate team.     
    img: /img/brandonEvans.jpg
    social:
    -   name: Twitter
        link: https://twitter.com/BrandonMaxEvans
        icon: /img/Twitter.svg
    -   name: LinkedIn
        link: https://www.linkedin.com/in/brandon-evans-a9701aa/
        icon: /img/linkedin_white.png
---


## Attacking Serverless Servers: Reverse Engineering the AWS, Azure, and GCP Function Runtimes 

The cloud makes it easy for developers to launch their applications, integrate with managed services, and think little about the underlying infrastructure. Unfortunately, this can and has come back to bite us. Last year's Capital One breach has made security professionals all too aware of the internal details of AWS, such as the EC2 Instance Metadata Service, which allowed a malicious actor to steal credentials for an IAM role that enabled them to pilfer documents from countless S3 buckets. The serverless ecosystem is no different. In order to give our functions access to the cloud services they need, the cloud provider needs to provide them with the necessary credentials. If a function's runtime is owned, so are these credentials. 

This presentation will explain how a compromised serverless function can be used to exfiltrate sensitive data, persist malware, gain powerful credentials, and pivot to other cloud services. It will contain live demonstrations of creating and exploiting reverse shell connections for AWS Lambda, Azure Functions, and Google Cloud Functions. These malicious functions and associated research have been published on GitHub by Brandon Evans and Principal SANS Institute Instructor Eric Johnson under a repository called "Serverless Prey" (https://github.com/pumasecurity/serverless-prey). 
