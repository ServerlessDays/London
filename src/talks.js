module.exports = [
  {
    key: "adam-matan",
    bio: "Developer &amp; DevRel @ Binaris. Cloud &amp; Serverless developer. Previously Vioozer, Yahoo and Waze.",
    photoUrl: "adam-matan.jpg",
    title: "Think Functions",
    speaker: "Adam matan",
    abstract: `What would apps look like if we never had to think about servers, performance or even cost? This session demonstrates how an Uber-like ridesharing application can be built entirely from functions - starting with a architectural overview and progressing to actual JS code.
    This session demonstrates how a real-time app can be built solely out of functions while remaining responsive and cost-effective. We present a architecture overview of the app, and walk through the process of splitting it into individual services.`
  },
  {
    key: "yan-cui",
    bio: "Yan is an experienced engineer who has worked with AWS for nearly 10 years. He has been an architect and lead developer with a variety of industries ranging from investment banks, e-commerce to mobile gaming. In the last 2 years he has worked extensively with AWS Lambda in production, and he has been very active in sharing his experiences and the lessons he has learnt, some of his work has even made their way into the Well-Architected whitepaper published by AWS.",
    photoUrl: "yan-cui.jpg",
    title: "You wouldn't build your own toaster, would you?",
    speaker: "Yan Cui",
    abstract: `In 2011, Thomas Thwaites spent 9 months and £1187.54 and built his own toaster.
    In his own words, he described the toaster as a partial success because "for about five seconds, the toaster toasted, but then unfortunately, the elements kind of melted itself". He is right in the sense that his audacious attempt won him fame and attention, and his TED talk was viewed more than 1M times. But judging his creation on its own and it's an abject failure that was 300 time more expensive than a commercial toaster, took too long to build and was utterly unfit for purpose.
    As a business that is competing in an increasingly competitive world enabled by advancements in technology, the questions we should be asking ourselves are: "what are the business value, cost and risk in building our own infrastructure vs using a managed service?". In this talk, let's take an objective look at the ongoing debate of containers vs serverless and look at the arguments of control vs responsibility, vendor lock-in and more!`
  },
  {
    key: "tyler-love",
    bio: "Tyler Love is CTO and co-founder of Bustle, where he leads the 20-person product team, protects their time and focus, and facilitates their ideas. He oversees a technical stack that serves billions of page views a month to 80 million unique visitors, built on experience helping to scale Tumblr from 500 million to 15 billion monthly page views, after tackling similar problems in the early years of Bleacher Report.",
    photoUrl: "tyler-love.jpg",
    title: "The Bleeding Edge at Scale: 80-million users on Serverless and GraphQL",
    speaker: "Tyler Love",
    abstract: `This talk focuses on the story of adopting GraphQL and Serverless at Bustle. I will talk about our product and goals and how Serverless and GraphQL weren't just imposed on our team but won over traditional approaches to architecture holistically. My talk starts with a story of the caveats faced with existing architecture and how incrementally we wound up on the bleeding edge. I discuss in-depth what DevOps conventions we applied to make it work. How and why we chose the tools we did. What impact it had on our costs. How it improved DevOps. Through out the talk I provide takeaways and philosophies that we learned and applied that help attendees and organizations evaluate trade-offs for themselves. The goal isn't to prescribe a method for all companies but offer perspective from a company that adopted it early at scale.`
  },
  {
    key: "mehul-patel",
    bio: "Mehul Patel is a Developer Tech by profession, an open source enthusiast, Linux geeky and a maker by heart. He holds Masters in Computers Science and has been working relentlessly and contributing towards the open source community. Mehul is an active member of the Mozilla Community which is a program run by a group of highly trained & passionate Mozillians (Tech enthusiasts), who share technical knowledge about Firefox, Mozilla, OpenSource and the Web at various regional developer-facing events. He is also part of other opensource peers like WordPress, Red Hat Linux, Debian, OpenStack, Auth0 and much more. He also represents Mozilla while being on the Campus Advisory Committee, a Reps Mentor and ambassador at Auth0.",
    photoUrl: "mehul-patel.jpg",
    title: "Serverless Authentication with JWT",
    speaker: "Mehul Patel",
    abstract: `Authentication is one of the big parts of every application. Security is always something that is changing and evolving. In this talk, I will cover what JSON Web Tokens (JWTs) are and why using JWTs in your applications when it comes to security is awesome
    Setting up an authentication layer is, without doubt, one of the most challenging yet necessary tasks within any web application. Not only does the application in question always needs to ensure the most basic functionality is set up by default (such as login, logout, reset password), but additionally, it’s required to develop all the libraries to handle the validation of the credentials, the connections to the database responsible for the user data, session management, and general security. In this talk, we will look at how we can use JSON Web Tokens to add both Authentication and Authorization to our functions. With Auth0 authentication, which is an online web service that handles authentication protocols like OAuth2, LDAP, and OpenID Connect to allow clients to create authenticated services without the need to build the entire infrastructure. This way, an application can retrieve user-related data and showcase protected information to only logged in users.`
  },
  {
    key: "ian-massingham",
    bio: "Ian Massingham leads Technical and Developer Evangelism at Amazon Web Services and has been working with cloud computing technologies since 2008. Ian has over 20 years’ experience in the IT industry, covering operations and engineering within internet hosting, internet access, telecommunications and cloud service providers. Prior to joining AWS, he led a systems engineering team for an integrated software and hardware company that focused on the creation of cloud computing services with telecommunications and IT service providers across Europe, the Middle East and Africa region.",
    photoUrl: "ian-massingham.jpg",
    title: "Serverless Analytics on AWS (for absolute beginners)",
    speaker: "Ian Massingham",
    abstract: `Need a quick and simple mechanism to collect, analyse and visualise data from your serverless apps, without running servers of course? In this case study, we’ll explore one example of application simplification and cost optimisation by removing Elasticsearch and Kibana from an application architecture, replacing them with a scalable serverless alternative, reducing running costs for the app by more than 90% in the process. Based on AWS services, this talk will feature AWS Lambda, Kinesis, Glue, Athena & QuickSight.`
  },
  {
    key: "marco-parenzan",
    bio: "Marco Parenzan is an independent Cloud and IoT Architect and .NET Developer. He has been awarded as a MVP on Microsoft Azure since 2014 and he's a speaker in major community events in Italy about Azure and .NET development. Currently, Marco is a community lead for 1nn0va, an official Microsoft community in Pordenone, Italy. In 2016, Marco has written a book on Azure. He loves developing retrogames and reading comix.",
    photoUrl: "marco-parenzan.jpg",
    title: "Build a serverless, distributed Pong game with Azure",
    speaker: "Marco Parenzan",
    abstract: `When you want to build a game for fun and profit, you don't like thinking about infrastructure, but focus on business and pay only few, better if you are a startup. But when you build a distributed game, you need state, and state is costly. So having new cloud technologies moving towards serverless, seems we are reaching our goals.
    In this live demo, we'll build a distributed pong game, allowing playing over Internet thanks to some Azure PaaS and Serverless services like Service Fabric Mesh, Functions, Event Grid, Azure SignalR, Azure Storage, and having some fun with them.`
  },
  {
    key: "mattias-karlsson",
    bio: "Mattias has been working professionally as a developer for almost 20 years. His interest in coding started already in the 80s with the Commodore 128 and the true passion came with the Amiga. Today he's a partner and senior architect at WCOM, a Microsoft partner located in Gothenburg, Sweden. He’s also a Microsoft Azure MVP and a member of the OzCode Magician community. Outside work he is a father of two, husband of one and contributes actively to the .NET open source community. Most know there for being one of the maintainers behind the Cake build system, which is now also part of the .NET foundation.",
    photoUrl: "mattias-karlsson.jpg",
    title: "From napkin to service in minutes – with serverless on Azure",
    speaker: "Mattias Karlsson",
    abstract: `Today cloud services have in an unprecedented way - made technology available and affordable, enabling rapidly getting that minimal viable product out the door; even if you’re on a tight schedule and/or budget. In this talk it will explain how he in minutes went from an idea to a published service, without breaking the bank. And at the same time being focused on the “business problem”, all achieved by using services like Twitter, IFTTT, GitHub, OneDrive and Buffer; technologies like Azure Functions, Azure Storage Queues and Notepad. This won’t be a textbook example - but it’ll be a good show case on what can be done ;)`
  },
  {
    key: "danilo-poccia",
    bio: "Danilo works with startups and companies of any size to support their innovation. In his role as Technical Evangelist at Amazon Web Services, he leverages his experience to help people bringing their ideas to life, focusing on event-driven programming and serverless architectures, and on the technical and business impact of machine learning and edge computing.",
    photoUrl: "danilo-poccia.jpg",
    title: "Evolutionary Serverless Architectures with Safe Deployments",
    speaker: "Danilo Poccia",
    abstract: `The term "architecture" applied to software can bring the idea of static, difficult to change, solutions. Unfortunately, that is often the result of a software implementation.
    An evolutionary architecture designs for incremental change in an architecture as a first principle, looking at software development over time as an optimization task, using a "fitness function" to estimate the efficiency of a software release.
    In this session, we’ll show how to automate a CI/CD pipeline to compute a fitness function during deployment, using a pre-traffic hook Lambda function dynamically analyzing the configuration of the resources implemented via AWS Serverless Application Model (SAM) templates.`
  },
  {
    key: "rita-kozlov",
    bio: "Rita Kozlov is the Product Manager for Cloudflare Workers. She has worked as a Software Engineer and Solutions Engineer for the past four years.",
    photoUrl: "rita-kozlov.jpg",
    title: "Optimize performance, reliability, and cost across multiple cloud providers: a Workers recipe",
    speaker: "Rita Kozlov",
    abstract: `In this talk, we’ll go through how to use Cloudflare Workers to load balance between multiple cloud providers.
    While load balancing (based on latency or availability) is hardly a new service, we will be using billing APIs to spread load based on credits and bandwidth costs.
    At the end of the talk, we’ll share a repo with the audience so everyone can fork it for their own infrastructure.`
  },
  {
    key: "gojko-adzic",
    bio: "Gojko Adzic is a partner at Neuri Consulting LLP. He is the winner of the 2016 European Software Testing Outstanding Achievement Award, and the 2011 Most Influential Agile Testing Professional Award. Gojko’s book Specification by Example won the Jolt Award for the best book of 2012, and his blog won the UK Agile Award for the best online publication in 2010. As a consultant, Gojko has helped companies around the world improve their software delivery, from some of the largest financial institutions to small innovative startups. Gojko specialises in agile and lean quality improvement, in particular impact mapping, agile testing, specification by example and behaviour driven development.",
    photoUrl: "gojko-adzic.jpg",
    title: "From universal software to superglue",
    speaker: "Gojko Adzic",
    abstract: `In order to get the most out of serverless execution platforms, organisations will need to rethink common architectural patterns.
    Gojko will talk about the past and current trends of software integration and how opening up the stack from the inside using serverless functions changes the game.`
  },
  {
    key: "matthieu-napoli",
    bio: "Matthieu is a software consultant who has been developing web applications for more than 10 years. He is the author of PHP-DI, Silly, Couscous, and Bref. He loves working on topics related to code quality and developer experience: anything that makes our job easier. He is also passionate about framework interoperability and is involved in the PHP-FIG on PSR-11 and PSR-15.",
    photoUrl: "matthieu-napoli.jpg",
    title: "Deploying serverless PHP applications",
    speaker: "Matthieu Napoli",
    abstract: `Serverless and its "functions as a service" is becoming a more and more widespread solution for running web applications. And while PHP powers 80% of the web, using it on FaaS providers is not a piece of cake. Let's bridge that gap and discover why PHP is perfect for serverless applications. Through the Bref project we will explore how to easily deploy Symfony, Laravel and other PHP applications as lambdas, and what it means regarding performances and costs.`
  },
  {
    key: "alessandro-vitale",
    bio: "Alessandro Vitale is an expert in Artificial Intelligence and a serial entrepreneur. In 2016 he founded Conversate in London, the first enterprise platform for intelligent chatbots. Previously he founded Optimist AI, building Augmented Intelligence algorithms for sales people since 2010. Before being an entrepreneur, he worked for years in Siemens with growing responsibilities in Italy and Europe in the strategy department. He is a member of the coordination board of the AI Task Force of Agenzia per l'Italia Digitale",
    photoUrl: "alessandro-vitale.jpg",
    title: "Lessons from the trenches: building an enterprise Artificial Intelligence chatbot platform",
    speaker: "Alessandro Vitale",
    abstract: `This session will showcase how Conversate built the new version of our enterprise Artificial Intelligence chatbot platform using serverless. The platform has Enterprise features such as multiple deployment environments (development, staging, production) and developers can deploy code together with Machine Learning models. We leveraged serverless (AWS lambda) to build a PaaS to guarantee security, separation, ease of deployment and integrity of what is deployed in a transparent way to the developer. In the talk, we will go through the project of designing and building the platform, explaining why we choose serverless, what we found being pros & cons for this unique use case and future directions.`
  },
  {
    key: "andrei-chernyshev",
    bio: "Software engineer, Kotlin enthusiast and Go newbie.",
    photoUrl: "andrei-chernyshev.jpg",
    title: "Serverless with Kubeless - usecase in Outfittery",
    speaker: "Andrei Chernyshev",
    abstract: `Outfittery's mission is to provide relevant fashion to men. In the past we relied purely on our stylists to put together the best outfits for our customers. Right now we are in the process of adding more and more intelligent algorithms to augment our human experts. To support that we've built complex decision making platform. But there are bunch of additional piece of functionality around that powerful platform that we don't want to build-in. For example, intermediate data transformation or Slack notification upon certain events, etc. After a research and evaluation we choose Kubeless with Serverless framework on top of it.`
  },
  {
    key: "aleksandar-simovic",
    bio: "Aleksandar is a senior software consultant and engineer, author of \"Serverless Applications with Node.js\" and an AWS Serverless Hero. He's one of the authors of Claudia.js and Claudia Bot Builder, Scotty.js, contributor to AWS SAM and many other open source libraries. Aleksandar co-organizes JS Belgrade meetups and workshops, a Belgrade based community of over 1700 members, where we share knowledge and experiences.",
    photoUrl: "aleksandar-simovic.jpg",
    title: "Alexa Skills development",
    speaker: "Aleksandar Simovic",
    abstract: `There are more than 80 million Alexa devices sold worldwide and growing. The need for Alexa Skills is now ever greater than before.
    This workshop's goal is to show you how to create your very first Alexa Skill and inspire you to make many more. You will also learn how does Alexa work, what are the building blocks of an Alexa skill and you’ll work together as a team to create and deploy one of your own. The theme of the workshop will be about creating and combining your favorite pizza recipes. Combining pizza ingredients and recipes with Alexa, will teach you what is an Intent, Utterance and Slot and how to utilize them to create a complete dialog conversation for your Alexa Skill, all while making a juicy and tasty pizza.`,
    workshop: true
  },
  {
    key: "michal-jankowski",
    bio: "Michał is an architect, designer and sometimes a developer. He began programming over 20 years ago starting from Basic and Assembler for 8-bit computers. For over 10 years, he has been creating applications working on a .net platform for the world’s largest companies. Currently, he is specialising in the development of web applications and Azure environment. Michał is a great enthusiast of software craftsmanship, unit testing, software design and other topics related to software development. In his free time, when he is not playing with code, he likes travelling, photography and writing a technical blog.",
    photoUrl: "michal-jankowski.jpg",
    title: "CosmosDB – database for Serverless era",
    speaker: "Michał Jankowski",
    abstract: `We are now getting into the serverless era. Many already known development patterns and solutions are not valid anymore. We need to solve issues in a bit different way. New challenges are waiting for us.
    One of such challenges is data storing. The classic approach is not good enough. We expect to be able to have a solution in which we will have instant access to all data, schema-less date structure, scalable throughput and global replication.
    CosmosDB fulfils all of those requirements. During this workshop, you will learn using CosmosDb in your serverless solutions.`,
    workshop: true
  },
  {
    key: "simone-merlini",
    bio: "",
    photoUrl: "simone-merlini.jpg",
    title: "Creare una piattaforma di file sharing Serveless in sole 2 ore? È possibile!",
    speaker: "Simone Merlini",
    abstract: `In questo workshop sarete guidati nello sviluppo di un’applicazione di file-sharing completamente Serverless, basata sui servizi AWS.
    Vedremo insieme come integrare Amazon S3, DynamoDB, Cognito, Lambda, API Gateway e CloudFront per gestire l’autenticazione, il caricamento e la condivisione dei file, in maniera scalabile, completamente gestita, e sempre disponibile.`,
    workshop: true
  },
  {
    key: "jessica-tibaldi",
    bio: "",
    photoUrl: "jessica-tibaldi.jpg",
    title: "Build you serverless workflow... with intelligence!",
    speaker: "Jessica Tibaldi",
    abstract: `In this workshop we will setup and configure a serverless architecture on Microsoft Azure, implementing an end-to-end solution using Azure Functions, Logic Apps, Event Grid, Cosmos DB, Azure Storage and Cognitive Services in combination. 
    At the end you will learn how to avoid server management, breaking down your solutions into smaller components, individually scalable and create a cost-effective implementation.`,
    workshop: true
  },
  {
    key: "diego-natali",
    bio: "",
    photoUrl: "diego-natali.jpg",
    title: "DevOps Best Practices in a Serverless World",
    speaker: "Diego Natali",
    abstract: `This workshop will be focused on how to safely release updates to serverless applications. You will learn how to build a CI/CD pipeline using open-source projects such as the AWS SAM CLI as well as managed services such as AWS CodePipeline and AWS CodeBuild.
    Then we will integrate testing and monitoring capabilities, and enhance the pipeline to manage multiple environments of the same application.`,
    workshop: true
  },
];
