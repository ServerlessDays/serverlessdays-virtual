---
layout: speaker202007.njk
page:
    title: ServerlessDays Virtual - Rustem Feyzhakov
    description: 'Serverless for AI applications'
    url: https://virtual.serverlessdays.io/speakers/202007/rustem
    image: https://virtual.serverlessdays.io/img/202007/og/8.png
speaker:
    name: Rustem Feyzhakov
    title: 'Machine Learning Engineer - Instrumental'
    bio: 'Rustem Feyzkhanov is a machine learning engineer at Instrumental, where he creates analytical models for the manufacturing industry. Rustem is passionate about serverless infrastructure (and AI deployments on it) and is the author of the course and book "Serverless Deep Learning with TensorFlow and AWS Lambda" and "Practical Deep Learning on the Cloud". Also he is a main contributor to open source repository for serverless packages https://github.com/ryfeus/lambda-packs. '
    img: /img/202007/rustem.jpg
    social:
    -   name: Twitter
        link: https://twitter.com/ryfeus
        icon: /img/Twitter.svg
    -   name: LinkedIn
        link: https://www.linkedin.com/in/ryfeus/
        icon: /img/linkedin_white.png
---

## Serverless for AI applications

Machine and deep learning become more and more essential for a lot of businesses for internal and external use. One of the main issues with deployment is finding the right way to train and operationalize models within the company. The serverless approach for deep learning provides cheap, simple, scalable, and reliable architecture for it. My presentation will show how to do so within AWS infrastructure. 

Serverless architecture changes the rules of the game - instead of thinking about cluster management, scalability, and query processing, you can now focus entirely on training the model. The challenge with this approach is that you have to keep in mind certain limitations and how to organize training and inference of your model in a right fashion. 

I will show how to train and deploy Tensorflow models on AWS serverless infrastructure. I will show and compare AWS Fargate and AWS Lambda for data preprocessing, AWS Batch, and AWS SageMaker for model training. I will also show how you can use AWS Step Functions to organize a deep learning pipeline and what are the patterns which could be implemented using AWS Step Functions, like human-in-the-loop architecture or external infrastructure. I will also describe how AWS Lambda could be used for inference, dos and don'ts, and what are the cases where it performs better than the GPU cluster. 