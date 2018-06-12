module.exports = [
	{ 	
		slug: 'erica-windisch',
		speakerDetails: {
			imgSrc: 'https://res.cloudinary.com/serverlessdays/image/upload/v1528146103/London/erica_med.jpg',
			speakerName: 'Erica Windisch',
			speakerDesc: 'Erica is CTO & Founder at IOpipe where she is building tools to help developers of serverless applications iterate faster and support their applications in production. She is a former maintainer of Docker and OpenStack and has been building cloud, ops, and infrastructure tooling for over 15 years.',
			speakerSocial: {
				speakerTwitter: 'https://twitter.com/ewindisch',
				speakerMedium: 'https://medium.com/@ewindisch'
			}
		}
	},
	{	
		slug: 'sarah-drasner',
		speakerDetails: {
			imgSrc: 'https://res.cloudinary.com/serverlessdays/image/upload/v1528246688/sarah_edo.jpg',
			speakerName: 'Sarah Drasner',
			speakerDesc: 'Sarah Drasner is an award-winning Speaker, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops on Vue.js and Advanced SVG Animations. Sarah is formerly Manager of UX Design & Engineering at Trulia (Zillow). Sarah won CSS Dev Conf’s “Best of the Best Award” as well as “Best Code Wrangler” from CSS Design Awards. She has worked for 15 years as a web developer and designer, and at points worked as a Scientific Illustrator and an Undergraduate Professor, and has tutored a Byzantine Icon painter in Santorini.',
			speakerSocial: {
				speakerTwitter: 'https://twitter.com/sarah_edo',
				speakerMedium: 'https://medium.com/@sarah_edo'
			}
		},
		talkDetails: {
			talkTitle: 'Serverless Functions and Vue.js',
			talkDesc: 'We’ll cover key use cases for these functions within a Vue.js application: we’ll accept payments with stripe, we’ll gather geolocation data from Google Maps, and more! Making it work with Vue and Nuxt and simplifying how to leverage this paradigm to be a workhorse for your application.'
		}
	},
	{   
	    slug: "yan-cui",
	    speakerDetails: {
	      speakerName: "Yan Cui",
	      speakerDesc: "Yan is an experienced engineer who has worked with AWS for nearly 10 years. He has been an architect and lead developer with a variety of industries ranging from investment banks, e-commerce to mobile gaming. In the last 2 years he has worked extensively with AWS Lambda in production, and he has been very active in sharing his experiences and the lessons he has learnt, some of his work has even made their way into the [Well-Architected whitepaper](https://aws.amazon.com/architecture/well-architected/) published by AWS.",
	      speakerSocial: {
	        speakerTwitter: "theburningmonk"
	      }
	    },
	    talkDetails: {
	      talkTitle: "Everything you wanted to ask about cold starts but were afraid to ask",
	      talkDesc: "There are a lot of hearsay and misconception about cold starts. You see contradictory advices on how to mitigate the effect of cold starts all the time. Some say putting an entire API into one function would reduce cold starts, but others argue that will make cold starts worse. The effectiveness of these practices are all circumstantial, but no one talks about that. It’s a mess. Let’s do away with hearsays. Instead, let’s test out these hypothesis with experiments, and use empirical evidence to do our talking."
	    }
	  },
	  {   
	    slug: "rob-allen",
	    speakerDetails: {
	      speakerName: "Rob Allen",
	      speakerDesc: "Rob Allen is a software consultant and developer with many years experience and writes code in PHP, Swift and other interesting languages. He leads Slim Framework's development team and contributes to Apache OpenWhisk and other open source projects. Rob is a published author and based in the UK where he runs [Nineteen Feet Limited](http://19ft.com), focussing on API development, training and consultancy. In his spare time, Rob blogs at [akrabat.com](https://akrabat.com) and can often be seen with a camera in his hand.",
	      speakerSocial: {
	        speakerTwitter: "akrabat"
	      }
	    },
	    talkDetails: {
	      talkTitle: "PHP & Serverless - A Match Made In Heaven?",
	      talkDesc: "PHP is arguably the most widely used language for writing web applications and is ideal for writing serverless apps. This session explores why PHP works so well in a serverless environment and how to write serverless PHP functions in Apache OpenWhisk. We’ll explore how the common PHP architectural patterns apply directly to serverless, so the transition for PHP developers is easy and see that that PHP developers can easily make use of this exciting to technology to augment their applications. By the end of the talk, you’ll appreciate that PHP and serverless really do work well together."
	    }
	  },
	  {   
	    slug: "serhat-can",
	    speakerDetails: {
	      speakerName: "Serhat Can",
	      speakerDesc: "Serhat is the Technical Evangelist for OpsGenie. He contributed to different parts of OpsGenie as a software engineer and now spreads the word by coding, writing and talking about DevOps. He is organizing Serverless Turkey and DevOps Turkey meetups as well as İstanbul DevOpsDays.",
	      speakerSocial: {
	        speakerTwitter: "srhtcn"
	      }
	    },
	    talkDetails: {
	      talkTitle: "DevOps in a Serverless World",
	      talkDesc: "The goal of this ignite talk is to make people realize that abstracting some of the complexity does not mean #NoOps. Starting with what Serverless is and is not, I will explain in which steps we need DevOps to the ultimate goal of running successful serverless applications on production. The steps like testing, deploying, monitoring is not going anywhere. Some of the steps become a lot more difficult in Serverless environments. The need for observability is still one of the most important things if you are running in production. Hence, you need proper logging, distributed tracing, monitoring, and alerting. Also, security is still a top concern while new challenges like cold start adding extra complexity to Serverless environments."
	    }
	  },
	  {   
	    slug: "blanca-garcia-gil-and-neil-crofts",
	    speakerDetails: {
	      speakerName: "Blanca Garcia Gil & Neil Crofts",
	      speakerDesc: "Blanca Garcia Gil is a senior software engineer at BBC. Her current work is focused on highly scalable big data pipelines. She is very interested in automation (testing and deployment) and observability. While having spent most of her time as a Java developer she’s also enjoys tinkering with Python and Bash when running data experiments. Neil Crofts is a senior software engineer at the BBC in the Audience Platform Data team responsible for processing the billions of messages audiences create when interacting with BBC online services. Previously he worked on the BBC Red Button Digital Text service and prior to that has developed software in a number of other industries including semiconductors,  automotive (commercial and F1) and telecoms.",
	      speakerSocial: {
	        speakerTwitter: "blanquish"
	      }
	    },
	    talkDetails: {
	      talkTitle: "7 serverless recipes for big data architectures",
	      talkDesc: "The BBC Audience Platform Data team collects, transforms and delivers billions of events each day from audience interactions with mobile apps and web sites such as BBC News, BBC Sport and iPlayer. We will share our experience of the 7 critical steps we took to migrate from Spark clusters with Map-Reduce to a serverless architecture. We will cover the good, the bad and the ugly, including lessons learnt along the way. These steps are also applicable to new architectures. We have been running in production for nearly a year and have achieved our goal of real-time analysis at up to 25000 transactions per second. This allows us to meet the demands of even the biggest news days, as well as seeing significant savings on our cloud infrastructure."
	    }
	  },
	  {   
	    slug: "thomas-michael-wallace",
	    speakerDetails: {
	      speakerName: "Thomas Michael Wallace",
	      speakerDesc: "",
	      speakerSocial: {
	        speakerTwitter: ""
	      }
	    },
	    talkDetails: {
	      talkTitle: "We built our own serverless database, and you should too. Probably.",
	      talkDesc: "At two in the morning I was rapidly firing up EC2 instances in a desperate attempt to keep our platform alive. It wasn’t working. We were on track to losing our first big customer. We did. But six weeks later, we closed the deal. This is a story about building a time-series database in lambda. About the agility being able to spin up 3000 machines in an instant can give you. About how you can use that to learn about the product you need to build. And about a team of three developers who no longer hide under their desks every time one of our customers treble in size. It’s also about that sinking feeling you get when you notice bits of your architecture randomly failing- and you realise there’s some important small print in the lambda definition of “scalable”. If you’ve ever wondered what it’s like to build and run your product on map-reduce in AWS lambda. This is the talk for you."
	    }
	  },
	  {   
	    slug: "hendric-ruesch",
	    speakerDetails: {
	      speakerName: "Hendric Ruesch",
	      speakerDesc: "Hendric's journey has taken him from studying the social sciences to a deep fascination with the social web and digital strategy. He worked for Jimdo, SysEleven, strg. and as a freelance consultant. He grew up by the sea in Germany and lives in Hamburg. Hendric is the co-founder of superluminar, a cloud consulting firm and co-organiser of ServerlessDays Hamburg.",
	      speakerSocial: {
	        speakerTwitter: "hendricruesch"
	      }
	    },
	    talkDetails: {
	      talkTitle: "Serverless Cheat Sheet for business discussions",
	      talkDesc: "Do you want to go all-in on severless but your boss is still afraid of unexpected costs & outcomes since he is still $$$ the container consultants for things nobody wanted? This 5 mins talk will help you to talk about the core of your business & how serverless can help your boss and your dev-teams."
	    }
	  },
	  {   
	    slug: "remy-chantenay",
	    speakerDetails: {
	      speakerName: "Remy Chantenay",
	      speakerDesc: "Engineering lead at Travelex from a mobile software engineering background (particularly Android for almost 9 years). I always have been interested by cloud-based solutions, distributed systems and architecture in general. Focused on delivering a large-scale project with a serverless architecture for the past year. On my spare time, I love to watch sports, travel around the world and read about health and nutrition.",
	      speakerSocial: {
	        speakerTwitter: "thekoreanbeaver"
	      }
	    },
	    talkDetails: {
	      talkTitle: "Changing VAT refund experience with Serverless",
	      talkDesc: "How we aim at improving the life of 3 million tourists per year from around the world by providing them the best possible customer experience when claiming their refund in the UK. …and doing so without managing a single server. Transforming an entire ecosystem is no small task. The VAT refund process in the UK has been the same for years- paper-based, archaic and painful. These days are nearly over. We are working hard to provide an entire digital solution to transform this process, working with retailers and partners such as Alipay, HMRC and the UK Border Force."
	    }
	  },
	  {   
	    slug: "markus-thommes",
	    speakerDetails: {
	      speakerName: "Markus Thömmes",
	      speakerDesc: "",
	      speakerSocial: {
	        "speakerTwitter": ""
	      }
	    },
	    talkDetails: {
	      talkTitle: "Serverless from a vendor's point of view: Lessons learned on how to operate a serverless platform",
	      talkDesc: "Serverless cloud platforms still use huge amounts of servers (shock horror!) even though users don’t manage them. So, what’s it like to be responsible for managing infrastructure to provide a production serverless cloud platform? How do the serverless providers deliver elastic scalability, with no charge for idle, whilst still making a profit?! This talk will take you “behind the rainbow” on what it takes to run a serverless platform in the public cloud. Having spent over two years running real customer workloads, we’re going to expose all details users never have to think about. It’ll discuss all the challenges we faced and is filled with stories of debugging distributed systems, hardware disasters and the relentless pursuit of bit-coin-miners. This session is for anyone using serverless who has ever wondered what happens behind the scenes…"
	    }
	  },
	  {   
	    slug: "olivier-tardieu",
	    speakerDetails: {
	      speakerName: "Olivier Tardieu",
	      speakerDesc: "Dr. Olivier Tardieu is a Research Staff Member at IBM in the New York area. He is part of the team shaping the future of IBM Cloud Functions and a contributor to its open source nucleus, the Apache OpenWhisk functions-as-a-service platform. With a passion for programming languages and tools, he works relentlessly to make developers feel at home in a serverless cloud.",
	      speakerSocial: {
	        speakerTwitter: "tardieu0"
	      }
	    },
	    talkDetails: {
	      talkTitle: "Serverless composition of serverless functions",
	      talkDesc: "Building scalable serverless architectures requires more stateless functions and cloud services. How do you coordinate and manage application state using stateless functions, independent cloud services, external APIs? Whilst also maximising code reuse, enabling modular development and creating resilient architectures. New programming platforms need new programming paradigms… In this talk, we’ll look at the issues and challenges of building scalable architectures and look at new approaches to “composing” serverless applications using new open-source tools. This talk will introduce a new open-source serverless tool, Composer, developed by IBM Research that aims to resolve some of issues developer face in the serverless community. It will identify common architectures that struggle with using serverless platforms and think about how to re-implement them with these new approaches."
	    }
	  },
	  {   
	    slug: "matthew-henderson",
	    speakerDetails: {
	      speakerName: "Matthew Henderson",
	      speakerDesc: "Matthew Henderson is a Senior Program Manager at Microsoft working on Azure Functions and Azure App Service. His primary mission is to unlock developer productivity by removing barriers to identity and integration. He loves helping developers leverage serverless solutions to get more done and is proud to have worked on Azure Functions from its outset. Outside of computing, Matthew is a runner, a volleyballer, and a culinary adventurist.",
	      speakerSocial: {
	        speakerTwitter: "mattchenderson"
	      }
	    },
	    talkDetails: {
	      talkTitle: "They can't hack your servers if you don't have any servers, right?",
	      talkDesc: "Serverless does a lot, but it doesn’t make your app invulnerable. How do security habits change when moving to a serverless architecture? What unique risks come from adopting serverless? What should we treat as vendor responsibilities? This session will explore common pitfalls of serverless architectures, with emphasis on event source and data integrations, identity and authentication practices, and just the right amount of networking."
	    }
	  }
]