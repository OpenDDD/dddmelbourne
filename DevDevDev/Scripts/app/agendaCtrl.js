
var myAppModule = angular.module('ddd', []);

angular.module('ddd');

function agendaCtrl($scope) {

    $scope.rawSessions = [
	{
	    "SessionId": "1497f72a-48b8-4844-bd8a-bb3dc988bd5f",
	    "SessionTitle": "Why React really is different",
	    "SessionAbstract": "There has been a heap of talk about web frameworks recently, React is one which is particularly interesting.\r\u003cbr/\u003e\r\u003cbr/\u003eReact takes a very different approach to how you build and compose your javascript applications. After this session you will have a good understanding what React is, how it is different to other frameworks like Angular and Ember and the reasons you might want to give it a go.",
	    "RecommendedAudience": "None",
	    "PresenterName": "Jake Ginnivan",
	    "PresenterTwitterAlias": "jakeginnivan",
	    "PresenterWebsite": "jake.ginnivan.net",
	    "PresenterBio": "Jake is a Microsoft MVP in .net and maintains a number of open source projects such as Shouldly, GitVersion and others."
	},
	{
	    "SessionId": "64790a8b-9849-41f0-9a65-e46e4bea967a",
	    "SessionTitle": "Agile and Azure: A match made in heaven!",
	    "SessionAbstract": "We live in a constantly changing world; technology is advancing, borders are disappearing and competition is intensifying. The only way for an organization to survive is to respond to complex and unpredictable challenges by becoming more agile, competitive and able to respond to changing market dynamics. \r\u003cbr/\u003e\r\u003cbr/\u003eFor us in the software industry it\u0026#39;s both a blessing and a curse. On one hand it means more jobs for us and on the other hand it adds up pressure on us to get thing done rapidly.  This is where Agile and Azure come to the rescue. Agile removes the process and mindset obstacles and Cloud technologies such as Microsoft Azure overcome the infrastructure constraints; by combining these two mighty forces, we can alleviate the pain of change and get the most out of the new opportunities.",
	    "RecommendedAudience": "32169",
	    "PresenterName": "Sarah Tabrizi",
	    "PresenterTwitterAlias": "sarah_tabrizi",
	    "PresenterWebsite": null,
	    "PresenterBio": "Sarah is a senior software developer, knowledge hub and certified Azure Solutions Architect. She enjoys learning new stuff and helping others expand their knowledge."
	},
	{
	    "SessionId": "9528c415-ceff-4977-ac7e-9733b5969b8f",
	    "SessionTitle": "Microservices: \u000blessons from the trenches",
	    "SessionAbstract": "Lately there has been a fair bit of hype around microservices and that\u0026#39;s led a lot of teams towards this style of architecture. Microservices is awesome, when it\u0026#39;s done right; but there are many gotchas and oversights that could make the experience painful and in some cases a complete disaster. In this session I will talk about some of the lessons I\u0026#39;ve learnt in implementing microservices and distributed systems over the years.",
	    "RecommendedAudience": "a bit of exposure to distributed architecture",
	    "PresenterName": "Mehdi Khalili",
	    "PresenterTwitterAlias": "mehdikhalili",
	    "PresenterWebsite": "www.mehdi-khalili.com",
	    "PresenterBio": "Mehdi is a Microsoft ASP.Net MVP, OSS lover and ThoughtWorks consultant. He implemented his first  distributed system back in 2000 in banking industry where the solution was distributed across many different networks, devices and services. Since then he\u0027s been involved in designing and implementing many distributed and scalable systems."
	},
	{
	    "SessionId": "45418427-35c0-4192-bcb0-37762d3c23b8",
	    "SessionTitle": "The Power of a Great API - the case for writing API-first applications",
	    "SessionAbstract": "Good developers try to make their jobs as easy as possible. We know our application will evolve, so we try to make future changes as simple as possible by layering and decoupling our architecture up front. That\u0026#39;s great, but can we do more?\r\u003cbr/\u003e\r\u003cbr/\u003eIn this session, I\u0026#39;ll do my best to convince you that an API should be the most important part of your application. By focusing on the API first, you\u0026#39;ll reap huge benefits in support and bug fixing, and you\u0026#39;ll open your application up to nearly limitless new features with minimal effort.\r\u003cbr/\u003e\r\u003cbr/\u003eWe\u0026#39;ll look at some applications that expose great APIs, and what benefits they\u0026#39;ve seen as a result. We\u0026#39;ll examine the practicalities of an API-first design, and how to avoid some of the common pitfalls. Finally, we\u0026#39;ll put all this into practice and write a demo app - API first.",
	    "RecommendedAudience": "Any developer",
	    "PresenterName": "Damian Brady",
	    "PresenterTwitterAlias": "damovisa",
	    "PresenterWebsite": "www.damianbrady.com.au",
	    "PresenterBio": "I’m a Microsoft MVP in Application Lifecycle Management and I work as a Solution Architect for Octopus Deploy. I’m also a co-author of Professional Team Foundation Server 2013 from Wiley. I run the Brisbane .Net User Group, and the annual DeveloperDeveloperDeveloper Brisbane conference. I spend a lot of time training teams on how to improve their software, be it through improving their agile process, devops, or code quality. I regularly speak at conferences, User Groups, and other events, but most of the time you’ll find me working on Octopus Deploy, or helping teams get the most out of their devops strategies."
	},
	{
	    "SessionId": "0223d9e7-52b8-4ab0-b983-58d105865391",
	    "SessionTitle": "What if everything you knew about code quality is wrong?",
	    "SessionAbstract": "I have always been an avid fan of quality code. I read the Effective Java and Clean Code; I practiced TDD \u0026amp; pair programming.. I even got my entire team to do my code reviews to share learnings.. \r\u003cbr/\u003eUntil I was hired to build a throw-away product. Build a prototype that would completely change every few days, that was going to be thrown away after a few months. And we threw out all of the code quality rules. \r\u003cbr/\u003eWe coded like mad for about 3 month without any problems.. 3 months became 6.. and 9.. and 12.. and then came the dreaded question: \u0026quot;What would it take to put this into production?\u0026quot;.\r\u003cbr/\u003eTo our completely surprise when we took a look at the code we produced over the past year it was the best quality code we had written in our lives.. \r\u003cbr/\u003e\r\u003cbr/\u003eLooking back on that project I learned that we unconsciously followed another set of rules that allowed us to go much much faster and deliver much better code quality.",
	    "RecommendedAudience": "Somewhat experienced devs..",
	    "PresenterName": "Erwin van der Koogh",
	    "PresenterTwitterAlias": "evanderkoogh",
	    "PresenterWebsite": "21stcenturymba.com",
	    "PresenterBio": "Developer, Architect, Management Consultant. I am comfortable at all layers of an organisation in every department. But technology is my first love and will always have a special place in my heart."
	},
	{
	    "SessionId": "0fda50d4-e4f0-486e-a7c9-86d533eb7119",
	    "SessionTitle": "Humans create, computers automate!",
	    "SessionAbstract": "Humans create, computers automate! Every time you do a task more than a couple of times you’re wasting your time and are less creative and productive.  This applies to all parts of the software life cycle.  In this session you’ll see how there are tools and approaches across the software lifecycle that will reduce the amount of time you spend doing repetitive tasks.\r\u003cbr/\u003eYou can tune a process but you can’t tune a human!",
	    "RecommendedAudience": "No pre reqs.",
	    "PresenterName": "Philip Beadle",
	    "PresenterTwitterAlias": null,
	    "PresenterWebsite": null,
	    "PresenterBio": "Long time developer, original dev of DotNetNuke, wrote a few books on development, been working in the Automation area for the last 5 years."
	},
	{
	    "SessionId": "02eb17b9-cf94-4742-b425-ac14fd7bbb4e",
	    "SessionTitle": "Microtesting: How We Set Fire To The Testing Pyramid While Ensuring Confidence",
	    "SessionAbstract": "As seen at Yow! West.\r\u003cbr/\u003e\r\u003cbr/\u003eDo you want to write less tests for the same amount of confidence?\r\u003cbr/\u003e\r\u003cbr/\u003eDo you want to print out the testing pyramid on a dot matrix printer, take it outside and set fire to it?\r\u003cbr/\u003e\r\u003cbr/\u003eHow confident are you that you can survive the refactoring apocalypse without breaking your tests?\r\u003cbr/\u003e\r\u003cbr/\u003eAs consultants, my colleagues and I get to see how testing is performed across many different organisations and have a chance to experiment with different testing strategies across multiple projects. Through this experience, we have developed a pragmatic process for setting an initial testing strategy that is as simple as possible and iterating on that strategy over time to evolve it based on how it performs. We have also settled on a style of testing that has proved to be very effective at reducing testing effort while maintaining (or even improving) confidence from our tests.\r\u003cbr/\u003e\r\u003cbr/\u003eThis talk will focus on some of our learnings and we will cover the different types of testing and how they interact, breaking apart the usual practice of testing all applications in the same way, the mysterious relationship between speed and confidence, how we were able to throw away the testing pyramid (and watch it burnnnnn!!!) and a number of techniques that have worked well for us when testing our applications.",
	    "RecommendedAudience": "Code samples in .NET, but applies to any language. Pretty high level talk.",
	    "PresenterName": "Rob Moore & Matt Davies",
	    "PresenterTwitterAlias": "robdmoore",
	    "PresenterWebsite": "robdmoore.id.au",
	    "PresenterBio": "Robert is a Principal Consultant with Readify and specialises in leading and mentoring software teams to deliver business value. He has had a range of experience working with organisations to introduce and/or improve the use of Agile, Lean and continuous delivery approaches and this is an area he is particularly passionate about. While Robert has experience in a range of technologies, he specialises in C#, ASP.NET and Windows Azure."
	},
	{
	    "SessionId": "40043a1a-3053-422c-b074-a9c2f3f124e0",
	    "SessionTitle": "Learn you a Skynet",
	    "SessionAbstract": "So you\u0026#39;ve heard that Deep Learning Neural Networks are the new black. Problems that only a few years ago seemed unsolvable are now possible. But how did we get to this point, why do they work so well \u0026amp; why should you care? \r\u003cbr/\u003e\r\u003cbr/\u003eIn this session I\u0026#39;ll give you (at no extra charge):\r\u003cbr/\u003e- A history of Neural Networks.\r\u003cbr/\u003e- How different types of Neural Networks work (with code examples and next-to-no Maths!)\r\u003cbr/\u003e- What stopped their widespread use for over 15 years.\r\u003cbr/\u003e- Typical Deep Learning architectures.\r\u003cbr/\u003e- How NASA \u0026amp; Google are using Deep Learning in image searches.\r\u003cbr/\u003e\r\u003cbr/\u003eIf you\u0026#39;ve ever wondered how Neural Networks tick then look no further!",
	    "RecommendedAudience": "No prereq needed - want to be accessible to anyone.",
	    "PresenterName": "Nick Imrei",
	    "PresenterTwitterAlias": null,
	    "PresenterWebsite": null,
	    "PresenterBio": "Nick Imrei is a developer with a passion for Data Science \u0026 all things Machine Learning. Over the years working in industries ranging from Banking \u0026 Finance, Predictive Analytics and even Game Design. \u003cbr/\u003e\u003cbr/\u003eHis thesis, \u0027Reinforcement learning in Real Time Strategy games\u0027 used Machine Learning and Artificial Life to derive AI strategies to beat bots and human players a cut-down version of Command \u0026 Conquer.\u003cbr/\u003e\u003cbr/\u003eAn entrepreneur (or rather \u0027want-repreneur\u0027) at heart, Nick\u0027s one wish is to make the day 30 hrs long to accommodate the 3 or more projects he usually has on the go at once. \u003cbr/\u003e\u003cbr/\u003eHe works as a Software Developer at Kiandra IT, who tolerate his bad jokes."
	},
	{
	    "SessionId": "18dae88d-468c-4cd6-b1d2-e726069f9ac3",
	    "SessionTitle": "NoSQL, which way to go?",
	    "SessionAbstract": "DocumentDB, Mongo or RavenDB? If you are starting out on a new project and considering NoSQL database as an option, which one should you do choose? What if the option you choose today may not work out to be the best one for your needs? \r\u003cbr/\u003eCome and join us for this session, we will take you on a journey where we will explain each of these database on their merits and compare them and also share War stories.",
	    "RecommendedAudience": "200",
	    "PresenterName": "Himanshu Desai, Ahmed El-Harouny & Daniel Janczak",
	    "PresenterTwitterAlias": null,
	    "PresenterWebsite": null,
	    "PresenterBio": "Three passionate Readifarians!"
	},
	{
	    "SessionId": "0cdcf3d0-60a5-4ed9-af25-846819ff26da",
	    "SessionTitle": "Win 10 IoT - Jumping into Windows Internet of Things development by using the Universal Windows Platform.",
	    "SessionAbstract": "In this presentation, Chris Briggs will teach you how to jump head first into Windows Internet of Things (IoT) development by using the Universal Windows Platform (UWP), allowing developers to build one solution across Microsoft hardware platforms. \r\u003cbr/\u003e\r\u003cbr/\u003eYou will learn the basics of Windows Universal app development with a focus on building apps for devices running Windows 10 IoT Core, through to how to integrate the solution with Windows Azure. \r\u003cbr/\u003e\r\u003cbr/\u003eYou will see Chris build a simple Universal app, deploy it to Raspberry Pi 2, then expand upon the application to read input from sensors and finally establish communication with Azure. This will demonstrate how to take a simple \u0026quot;hello world\u0026quot; thing and make it a useful citizen of IoT. \r\u003cbr/\u003e\r\u003cbr/\u003eWindows IoT development using Universal apps will make it obvious that there is no better time as a .Net developer to jump into IoT!\r\u003cbr/\u003e\r\u003cbr/\u003eMore Information:\r\u003cbr/\u003e\r\u003cbr/\u003eTeaching Points\r\u003cbr/\u003e\r\u003cbr/\u003e•\tWhat you need to know about the breadboard and GPIO \r\u003cbr/\u003e•\tHow make the sensors sing \r\u003cbr/\u003e•\tHow to dance with Azure",
	    "RecommendedAudience": "Comfortable with C#",
	    "PresenterName": "Chris Briggs",
	    "PresenterTwitterAlias": "ChrisBriggsy",
	    "PresenterWebsite": "blog.chrisbriggsy.com",
	    "PresenterBio": "Chris is a Senior Software Developer at SSW, passionate about IoT, Scrum, Security, Windows Universal Apps and Xamarin. All the Devs at SSW have been asking Chris, what he thinks the Internet of Things will mean for their day to day lives? It ranges from the impossible to the improbable, from automating  their coffee breaks, to telling them exactly when the next bus will arrive!\u003cbr/\u003e\u003cbr/\u003eHis previous experience in the Windows Mobile Application platform include: Working with the Brisbane Academic Development Community as the Microsoft representative. A highlight was developing a Windows Phone Application that was demonstrated to a number of large companies in Jarkata, under the new Colombo plan."
	},
	{
	    "SessionId": "f594d576-3418-433c-8a34-4ffe9b0c6fc0",
	    "SessionTitle": "Functional Programming for the Everyman",
	    "SessionAbstract": "You’ve probably heard that “functional programming is the next big thing” and that modern imperative languages like C# and JavaScript are adopting features from functional programming. So how can you, as a developer living in a normal imperative code base, start taking advantage of functional programming from where you are now, without needing to throw yourself in the deep end and change languages?\r\u003cbr/\u003e\r\u003cbr/\u003eIn this talk we’ll take a look at functional programming libraries that already exist in .NET and JavaScript, such as LINQ/lodash and Rx/RxJS, and walk through practical examples of imperative code that could be written in a more functional style in order to produce more concise, readable and maintainable code.\r\u003cbr/\u003e\r\u003cbr/\u003eOnce you get a taste of functional programming, you won’t want to go back. :)",
	    "RecommendedAudience": "C#/JavaScript developers",
	    "PresenterName": "Daniel Chambers",
	    "PresenterTwitterAlias": "danielchmbrs",
	    "PresenterWebsite": "www.digitallycreated.net",
	    "PresenterBio": "Daniel is a Senior Developer at Readify and a passionate enthusiast of functional programming. While his favourite language is F#, his day job involves writing C# and JavaScript on Azure, to which he brings a functional twist."
	},
	{
	    "SessionId": "80403212-d020-4d50-805b-3f4a58b16710",
	    "SessionTitle": "Designing Wonderful .NET APIs",
	    "SessionAbstract": "There are .NET libraries that are complex to setup, hard to understand, difficult to debug, and impossible to extend. And then there are .NET libraries for the same task that wonderfully just work. Why do some libraries succeed where others fail?\r\u003cbr/\u003e\r\u003cbr/\u003eIn this session James will discuss what makes a well designed API, from high level design principles like The Pit of Success, The Wall of Complexity, and The Power of Sameness, to applying those concepts in low level .NET class design, with the goal of creating .NET libraries that developers love to use.",
	    "RecommendedAudience": ".NET Developers",
	    "PresenterName": "James Newton-King",
	    "PresenterTwitterAlias": "JamesNK",
	    "PresenterWebsite": "james.newtonking.com",
	    "PresenterBio": "James Newton-King is a software developer from Wellington, New Zealand. He works for Intergen, a leading IT services company, where he spends his time building awesome web applications and making fun of SharePoint.\u003cbr/\u003e\u003cbr/\u003eJames is best known for creating Json.NET, one of .NET\u0027s most popular open source libraries with over 10 million downloads and used by Visual Studio, Azure, ASP.NET, SignalR, RavenDB and thousands of other .NET libraries."
	},
	{
	    "SessionId": "321d7f4c-fb64-448d-a048-8494ba12bf89",
	    "SessionTitle": "Running docker in production",
	    "SessionAbstract": "So you\u0026#39;ve heard of docker before, you think you know why it\u0026#39;s useful, you may even have a dancing cat running inside a docker container as an experiment on your home PC.\r\u003cbr/\u003e\r\u003cbr/\u003eNow that you\u0026#39;ve decided it\u0026#39;s worth giving this a go, you now need to work out how to get it into production.\r\u003cbr/\u003e\r\u003cbr/\u003eHow do you configure Jenkins/bamboo/TeamCity to build this thing? What do you use to deploy it? In fact, where do you even deploy it to?\r\u003cbr/\u003e\r\u003cbr/\u003eFinally, what are the drawbacks to docker (if any?) and how do you work around some of the gotchas?\r\u003cbr/\u003e\r\u003cbr/\u003eIf you want to save yourself a load of time getting docker to production then this talk is for you.",
	    "RecommendedAudience": "Basic understanding of what docker is, ideally been to another docker presentation at ddd",
	    "PresenterName": "Martin Booth, Gabriel Weyer",
	    "PresenterTwitterAlias": "gabrielweyer",
	    "PresenterWebsite": null,
	    "PresenterBio": "Martin Booth has been running docker in production at SEEK for the last few months\u003cbr/\u003e\u003cbr/\u003eGabriel Weyer is a Senior Developer at Readify"
	},
	{
	    "SessionId": "68d2e438-694b-47d4-92d9-28ba910d45d7",
	    "SessionTitle": "How to be the best developer in the world",
	    "SessionAbstract": "At tech conferences we love talking about new technologies, new languages, new techniques. But will they make you a better programmer? Maybe. Maybe not. What do you need to learn to become greatest programmer you can possibly be? Come and find out.",
	    "RecommendedAudience": "software developers, any level.",
	    "PresenterName": "Lachlan Barclay",
	    "PresenterTwitterAlias": "voiceofapollo",
	    "PresenterWebsite": "lachlanbarclay.net",
	    "PresenterBio": "Lachlan Barclay ( http://lachlanbarclay.net ) is a software developer from Melbourne who is passionate about great programming and great guitar playing! For the past 15 years he\u0027s been building web applications for companies all over the globe and building a few of his own mobile apps too. When he\u0027s not programming he\u0027s playing guitar in Melbourne\u0027s progessive rock band, Toehider."
	},
	{
	    "SessionId": "f2f89129-85bd-4805-b3ff-f23377c32443",
	    "SessionTitle": "Docker, Containers and... Cats!",
	    "SessionAbstract": "Containers, docker, microservices... I am pretty sure I have heard those words before, they have been pretty hardcore lately...\r\u003cbr/\u003e\r\u003cbr/\u003eSo, this thing, \u0026quot;containers\u0026quot; what is all about? is it like a big box where you put things? would that run in Windows? is just another virtual machine? why is so \u0026quot;awesome\u0026quot;? can I fit a cat in a shoe box?\r\u003cbr/\u003e\r\u003cbr/\u003eI will try to explain all those questions in a simple language, about what are containers, what are they right now the sweet potato and why I should care and why in a few months you will probably be using them.\r\u003cbr/\u003e\r\u003cbr/\u003eVote for this and I promise a lot of cat pictures as well...",
	    "RecommendedAudience": "100-400",
	    "PresenterName": "Cristian Prieto",
	    "PresenterTwitterAlias": "cprieto",
	    "PresenterWebsite": "cprieto.com",
	    "PresenterBio": "Cristian Prieto is a rad guy, he loves cats, software development and the mix of both. He has been so lucky to do things from unix kernel development to mobile applications (and web stuff) in his just 15 years of work. He loves to chat about compilers and debuggers and weird stuff with a beer."
	},
    {
        "SessionId": "2538ffc5-e783-4165-9c7c-0df148f251a6",
        "SessionTitle": "Resilient architectures for the cloud",
        "SessionAbstract": "The cloud is all about elasticity on demand and cost savings, which is great. But it is also massively multi-tenanted and built with commodity hardware - which means it is prone to failure. Does this mean you can\u0026#39;t use the cloud if you have many 9s in your SLA? Not necessarily. In this talk, Microsoft Azure MVP and seasoned Architect Mahesh Krishnan will talk about how you go about creating applications that run on the cloud that are resilient to failure, and what you - as an architect and developer - need to do to ensure that your application can absorb failure and be resilient.\r\u003cbr/\u003e\u0026#160;\r\u003cbr/\u003eMahesh will not only provide guidance on building fail-safe applications but show you an example of an application that keeps on working even in the event of a single DC wide outage - watch him as he takes one component after another offline while the app continues to work.",
        "RecommendedAudience": "Level 200",
        "PresenterName": "Mahesh Krishnan",
        "PresenterTwitterAlias": "maheshkrishnan",
        "PresenterWebsite": "mahe.sh/",
        "PresenterBio": "Mahesh is an author, speaker and Microsoft MVP. He works at Readify and has architected large cloud applications. He is very passionate about cloud and architecture, and speaks regularly about them at both local and international conferences."
    },
    {
        "SessionId": "209edccc-efd1-4469-8493-a78e448b04e0",
        "SessionTitle": "10+ unusual tips \u0026 tricks for .NET",
        "SessionAbstract": "In this talk, we’ll highlight at least 10 less well known features of .NET. \r\u003cbr/\u003e\r\u003cbr/\u003eFeatures that may not be used by most developers very often. But if you know they’re available, then it’s good to know that they’re sitting in your toolbox, ready for action!",
        "RecommendedAudience": "300 - Experience with .NET",
        "PresenterName": "David Gardiner",
        "PresenterTwitterAlias": "davidrgardiner",
        "PresenterWebsite": "david.gardiner.net.au",
        "PresenterBio": "David Gardiner has been creating software for over 20 years and has a passion for continual learning and improving quality. He helps run the Adelaide .NET User Group and works as a Senior Software Developer at RL Solutions on healthcare software."
    },
    {
        "SessionId": "keynote",
        "SessionTitle": "Consuming REST APIs, for all interpretations of REST",
        "SessionAbstract": "There is a growing API economy. Almost every software business is either starting to consume APIs or produce APIs for others to consume. When it comes to building APIs, REST has won the popularity contest, but from a technical perspective the term has little meaning. Everyone has their own interpretation. This talk will discuss how to efficiently consume an API whether it is the simplest list of HTTP endpoints with JSON payloads, or hypermedia driven using bleeding edge, content negotiated, media types. We will talk about how to build re-usable and resilient client code that can insulate your client application from the dreaded V2 API. You will hear lots of practical guidance and insight that is not commonly discussed. Whether you are new to REST or an experienced practitioner, I believe you will leave this talk with some fresh perspectives on the subject.",
        "RecommendedAudience": "Anyone",
        "PresenterName": "Darrel Miller",
        "PresenterTwitterAlias": "darrel_miller",
        "PresenterWebsite": "bizcoder.com",
        "PresenterBio": "Darrel has been building distributed business applications on the Microsoft platform for more than 20 years. He is an active member of the .NET community and OSS contributor. When he’s not reading IETF specifications in order to answer Stack Overflow questions, or writing tooling to help people build hypermedia driven client applications, you will find him enjoying time with his wife and daughter in Montreal, Quebec. Darrel works as a developer advocate at Runscope ensuring the best support possible to .NET developers who are building and consuming Web APIs. Darrel was a member of the Microsoft Web API advisory board, is now an Azure Advisor, a Microsoft Integration MVP and co-authored the O'Reilly book, Designing Evolvable Web APIs with ASP.NET."
    },
    {
        "SessionId": "locknote",
        "SessionTitle": "The story of Octopus Deploy",
        "SessionAbstract": "In 2011, while stuck in a meeting, I started hacking on an idea. The idea became a prototype, and then a product. It is now used by thousands of customers around the world, and employs 8 people. \u003cbr/\u003e\u003cbr/\u003eIn this presentation, I'll take you through the short history of Octopus Deploy, and where we are going. I'll also share some of the lessons we've learnt, and mistakes we've made, along our journey building software that is installed on-premises by thousands of customers in different environments. I'll discuss how building software as an ISV is fundamentally different to Enterprise software, and tools and approaches that you might use if you decide to start your own product company.",
        "RecommendedAudience": "Anyone",
        "PresenterName": "Paul Stovell",
        "PresenterTwitterAlias": "paulstovell",
        "PresenterWebsite": "paulstovell.com",
        "PresenterBio": "Paul Stovell is the founder of Octopus Deploy, an automated deployment tool for .NET developers. Paul started Octopus in 2011 as an attempt to help himself and other developers to more reliably and easily deploy software to production. Since then, Octopus has grown up and now helps over 2000 customers around the world to automate their deployments. Prior to Octopus, Paul worked for an investment bank in London, and in Australia for Readify, a .NET consulting firm. Paul was a Microsoft MVP from 2006 to 2014, although lately he's seen the light."
    },
    {
        "SessionId": "workshop-1",
        "SessionTitle": "NodeBots - Using JavaScript to build connected hardware",
        "SessionAbstract": "Besides being able to build robots, the NodeBots framework is really an abstraction of common hardware in JavaScript - providing us a ultitude of sensors, actuators and boards to create physical objects controlled by JS. Given how easy it is to use JS to glue systems and APIs together, this workshop will guide you through building your first internet connected \"thing\".\u003cbr/\u003e\u003cbr/\u003eThe session will comprise an introduction to the JS Hardware stack and then ensure your development environment is up and running. From there we'll look at consuming a common API and using information within it to actuate a physical object with LEDs or Servos.\u003cbr/\u003e\u003cbr/\u003eAfter that, we'll flip the perspective and look at how we can put sensors into the environment and then use JS to get and interpret data about our surroundings.\u003cbr/\u003e\u003cbr/\u003eThis session is aimed at those who have got a good JS background and have an interest in connected physical objects. Electronics skills are not assumed, there will be no soldering during the session and all kit will be provided.\u003cbr/\u003e\u003cbr/\u003e\u003cstrong\u003ePre requisites:\u003c/strong\u003e Clone the following repo \u003ca href=\"https://github.com/ajfisher/dddworkshop\" target=\"_blank\"\u003ehttps://github.com/ajfisher/dddworkshop\u003c/a\u003e, complete the instructions on \u003ca href=\"https://github.com/ajfisher/dddworkshop#installation\" target=\"_blank\"\u003ehttps://github.com/ajfisher/dddworkshop#installation\u003c/a\u003e and finally make sure you pull the latest changes the day before DDD.",
        "RecommendedAudience": null,
        "PresenterName": "Andrew Fisher",
        "PresenterTwitterAlias": "ajfisher",
        "PresenterWebsite": "ajfisher.me",
        "PresenterBio": null
    },
    {
        "SessionId": "workshop-2",
        "SessionTitle": "Hack Your API First",
        "SessionAbstract": "Last year we did \"Hack Yourself First\", now it’s time to move on and start breaking our APIs. Let’s face it, they’re everywhere – behind our mobile devices, driving our [thing].js apps and increasingly running behind our internet of things. Web based APIs are enormously prevalent today and with this comes risks as well. Unfortunately, our APIs are frequently vulnerable to simple attacks, often because they’re \"hidden\" behind client interfaces. \u003cbr/\u003e\u003cbr/\u003eIn this workshop you’ll learn how to discover APIs behind rich client apps, intercept their communications and investigate how the app is communicating. You’ll learn how to go on the cyber-offence and hack your own APIs… before someone else does! You’ll need nothing more than common development tools so bring those along with your PC or Mac as well your mobile device of choice. \u003cbr/\u003e\u003cbr/\u003e\u003cstrong\u003ePre requisites:\u003c/strong\u003e Bring a laptop with either Fiddler or Charles Proxy depending on your OS of choice.",
        "RecommendedAudience": null,
        "PresenterName": "Troy Hunt",
        "PresenterTwitterAlias": "troyhunt",
        "PresenterWebsite": "troyhunt.com",
        "PresenterBio": null
    },
    {
        "SessionId": "workshop-3a",
        "SessionTitle": "Git Fundamentals",
        "SessionAbstract": "If you're brand new to Git, or just getting started, this is the workshop for you. We're going to walk through getting started with Git and learn some of the core commands that you need to be productive. No version control experience necessary. \u003cbr/\u003e\u003cbr/\u003e\u003cstrong\u003ePre requisites:\u003c/strong\u003e Bring a laptop with Git installed, so you can follow along.",
        "RecommendedAudience": null,
        "PresenterName": "Brendan Forster",
        "PresenterTwitterAlias": "shiftkey",
        "PresenterWebsite": "brendanforster.com",
        "PresenterBio": null
    },
    {
        "SessionId": "workshop-3b",
        "SessionTitle": "The Zen of Git",
        "SessionAbstract": "If you're familiar with Git and want to dig deeper, this is the workshop for you. We'll learn a bit about some advanced Git commands, as well as cover workflows for collaborating with others and perhaps some Git internals if time permits. \u003cbr/\u003e\u003cbr/\u003eNote: You can totally corner me at the after-party if you have specific Git questions you’d like to corner me about. Just as long as we talk about it over a beer. \u003cbr/\u003e\u003cbr/\u003e\u003cstrong\u003ePre requisites:\u003c/strong\u003e Bring a laptop with Git installed, so you can follow along. Have some local repositories to experiment with, as we may not have WiFi at the venue.",
        "RecommendedAudience": null,
        "PresenterName": "Brendan Forster",
        "PresenterTwitterAlias": "shiftkey",
        "PresenterWebsite": "brendanforster.com",
        "PresenterBio": null
    },
    {
        "SessionId": "workshop-4",
        "SessionTitle": "Satisfying Movements - Animating the Web with CSS and JavaScript",
        "SessionAbstract": "Web based animation has arrived, and it's time for you to start taking advantage of it to engage and delight your users. And in this session we'll see how. We'll cover CSS Transitions and Animations, and throw some 2D and 3D Transforms into the mix as well, to understand how today's most common, and eye catching, animated UI design patterns can quickly be implemented in all modern browsers and devices. \u003cbr/\u003e\u003cbr/\u003eWe'll also look at how you can control animations via JavaScript, respond to animation events, and address the thorny issue of making animations more performant, with less drain on your devices battery. \u003cbr/\u003e\u003cbr/\u003e\u003cstrong\u003ePre requisites:\u003c/strong\u003e Bring a laptop with your favourite web development tools and download the following file \u003ca href=\"http://bit.ly/1IrmIoh\" target=\"_blank\"\u003ehttp://bit.ly/1IrmIoh\u003c/a\u003e (4MB).",
        "RecommendedAudience": null,
        "PresenterName": "John Allsopp",
        "PresenterTwitterAlias": "johnallsopp",
        "PresenterWebsite": "johnfallsopp.com",
        "PresenterBio": null
    }];

    $scope.ShowDetail = false;
    $scope.SessionTitle = '';
    $scope.PresenterName = '';
    $scope.PresenterTwitterAlias = '';
    $scope.PresenterWebsite = '';
    $scope.SessionAbstract = '';
    $scope.RecommendedAudience = '';
    
    $scope.showSession = function (id) {

        $scope.ShowDetail = true;

        var session = $scope.rawSessions.filter(function (s) {
            return s.SessionId === id;
        })[0];

        if (session == null) return;

        $scope.SessionTitle = session.SessionTitle;
        $scope.PresenterName = session.PresenterName;
        $scope.PresenterTwitterAlias = session.PresenterTwitterAlias;
        $scope.PresenterWebsite = session.PresenterWebsite;
        $scope.SessionAbstract = session.SessionAbstract;
        $scope.RecommendedAudience = session.RecommendedAudience;

        $('#session-modal').foundation('reveal', 'open');

    };

}
