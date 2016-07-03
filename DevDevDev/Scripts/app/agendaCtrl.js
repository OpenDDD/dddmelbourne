
var myAppModule = angular.module('ddd', []);

angular.module('ddd');

function agendaCtrl($scope) {

    $scope.rawSessions = [
    {
        "SessionId": "1497f72a-48b8-4844-bd8a-bb3dc988bd5f",
        "PresenterName": "Pratik Khasnabis",
        "PresenterTwitterAlias": "softveda",
        "RecommendedAudience": "C#",
        "SessionAbstract": "While C# 6 is being out for a while not all developers know some of the cool language features that got introduced in C# 6. Know about string interpolation, null conditional operator, nameof operator, expression bodied members and more that will help you to write more clear, correct and succint code. Then he talk moves on to see what is in store for C# 7. Here we will find nested local functions, tuple return types, pattern matching etc. Includes live code demo on Visual Studio \"15\" preview to explore the features.",
        "SessionTitle": "Recapping C# 6 and a first look into C# 7",
        "PresenterWebsite": null
    },
    {
        "SessionId": "64790a8b-9849-41f0-9a65-e46e4bea967a",
        "PresenterName": "Mohammad Helmy",
        "PresenterTwitterAlias": "moahelmy",
        "RecommendedAudience": "A bit of knowledge about Angular and/or ReactJs will be good but not required.",
        "SessionAbstract": "Understanding the philosophy, design patterns and concepts behind building any framework helps programmers to get the most of it. Also, it introduces new vision about how to build software. <br />In this session, we'll try to understand the vision behind building ReactJS and how it can adapt our way of thinking how to build software. We'll try to understand what is ReactJs and what it is not. <br />It would be interesting to apply ReactJS philosophy while using other frameworks, Angular 2.0 for example and see how it will go.",
        "SessionTitle": "Thinking in React",
        "PresenterWebsite": null
    },
    {
        "SessionId": "9528c415-ceff-4977-ac7e-9733b5969b8f",
        "PresenterName": "Norman Noble",
        "PresenterTwitterAlias": "inormannoble",
        "RecommendedAudience": "No prior knowledge of NLP or ML required. Basic programming in node will do fine.",
        "SessionAbstract": "Chat tools have become an important part of our daily lives. Whether it’s Messenger, WhatsApp, Slack or Skype we all use some sort of chat tool to communicate with each other on a regular basis. This has paved the way for a new type of application that isn’t a desktop, web or mobile. It’s an program that lives in your chat platform and communicates with you conversationally. In this talk I will demonstrate creating a conversational user interfaced program that lives in Slack and will use Natural Language Processing and Machine Learning to work out what you are asking it to do and act accordingly. I will demonstrate how this can create a low friction interface that can automate mundane or complex tasks and make it feel like you are asking a colleague to help you out. This could change the conceptual relationship we have with programs and open new possibilities in terms of interaction and user experience.",
        "SessionTitle": "Building a conversational user interface",
        "PresenterWebsite": "www.normannoble.io"
    },
    {
        "SessionId": "aacb8c41-19ff-4062-abc2-5798e9649663",
        "PresenterName": "Erwin van der Koogh",
        "PresenterTwitterAlias": "evanderkoogh",
        "RecommendedAudience": "Intermediate",
        "SessionAbstract": "What is this #serverless thing people keep talking about? <br />Creating the server infrastructure for your applications is more than hard enough, but keeping it all running is much harder still. What if we could do away with all this headache? <br />Amazon Webservices has been developing their platform at breakneck speed, but it wasn't until the introduction of AWS Lambda that we had the last piece of the puzzle to get rid of managing servers entirely. <br />We will discuss a real world serverless application and show how AWS Lambda makes it very easy to integrate AWS hosted solutions like API Gateway, DynamoDB, S3, Cloudfront, Simple Queueing Service and Simple Email Service into an almost infinitely scalable application without monitoring headaches.",
        "SessionTitle": "Look Mom! No Servers!",
        "PresenterWebsite": null
    },

    {
        "SessionId": "workshop-1",
        "PresenterName": "Aaron Powell",
        "PresenterTwitterAlias": "slace",
        "RecommendedAudience": null,
        "SessionAbstract": "React is still hot property when it comes to web application development and in this workshop we'll beyond your component classes and modularisation and look into some deeper dive concepts like higher order components, automated testing and Redux.",
        "SessionTitle": "Getting in deep with React",
        "PresenterWebsite": "www.aaron-powell.com"
    },
    {
        "SessionId": "workshop-2",
        "PresenterName": "Alexey Shcherbak & Reuben Bond",
        "PresenterTwitterAlias": null,
        "RecommendedAudience": null,
        "SessionAbstract": "You'll learn how to model and build your first app with virtual actors, host it on-prem or in a Cloud, yield the superpowers of distributed applications and make first steps to world domination. <br /><strong>Pre requisites:</strong> Clone the following repo https://github.com/centur/DDDMelb2016.VirtualActors, and make sure you pull the latest changes before DDD Melbourne.",
        "SessionTitle": "Jumpstart into Virtual Actors with Orleans",
        "PresenterWebsite": null
    },
    {
        "SessionId": "45418427-35c0-4192-bcb0-37762d3c23b8",
        "PresenterName": "Justin Yoo",
        "PresenterTwitterAlias": "justinchronicle",
        "RecommendedAudience": "Bit of knowledge for REST API, node.js and C#",
        "SessionAbstract": "Since AWS Lamba was unveiled in 2014, it was virtually the only option for cloud based serverless computing. Now, Azure Functions has been introduced in Build 2016, which is corresponding to AWS Lambda as a competitor. Both Azure Functions and AWS Lambda are event driven, compute-on-demand experience triggered by events occurring in virtually any cloud service as well as on-premises systems. <br /><br />In this session, I will briefly give a comparison with both services, show a demo how they work, especially writing in C# codes, and how to integrate it into your real world example.",
        "SessionTitle": "Event Driven Cloud Computing: Azure Functions vs AWS Lambda",
        "PresenterWebsite": "devkimchi.com"
    },
    {
        "SessionId": "0223d9e7-52b8-4ab0-b983-58d105865391",
        "PresenterName": "Basarat Ali Syed",
        "PresenterTwitterAlias": "basarat",
        "RecommendedAudience": "JavaScript enthusiasts",
        "SessionAbstract": "You knew JavaScript two years ago? This session takes you through all the new shiny stuff in JavaScript Next. Also covers what's new in TypeScript Next (the transpiler of choice for using ESNext today).",
        "SessionTitle": "ESNext and TSNext",
        "PresenterWebsite": "basarat.com"
    },
    {
        "SessionId": "0fda50d4-e4f0-486e-a7c9-86d533eb7119",
        "PresenterName": "Damian Brady",
        "PresenterTwitterAlias": "damovisa",
        "RecommendedAudience": "~200 level. Anyone interested in the software deployment side of DevOps.",
        "SessionAbstract": "You've toiled hard on your code, tested it locally, and you're confident it's ready to go. But how long until you see it in production? For some teams, it can be months or even years. By the time your new feature or bug fix gets used in anger, you've forgotten what you did! But with a great deployment pipeline and some clever architecture, there's a better way. <br /><br />This session is packed with war stories and real world successes. We'll walk through the realities of a no-touch deployment pipeline that you can trust all the way to production, and we'll examine some clever architectural patterns to enable true software agility. By the end, you'll be convinced that if it's not in production, it doesn't count. If you struggle to get updates in the hands of users, this is the session for you.",
        "SessionTitle": "Deploying Straight to Production: A Guide to the Holy Grail",
        "PresenterWebsite": "www.damianbrady.com.au"
    },
    {
        "SessionId": "7bd812d4-a874-4d55-b6e2-ab45384dda53",
        "PresenterName": "Daniel Chambers",
        "PresenterTwitterAlias": "danielchmbrs",
        "RecommendedAudience": "Functional Programmers. Interested Beginner -> Intermediate.",
        "SessionAbstract": "Haskell is often dismissed as a language too academic for practical use in real-world production applications. However, as functional programming becomes more and more popular, and the benefits of static typing, purity and immutability become increasingly apparent, teams are looking for a language that exemplifies these traits; that language is Haskell. <br /><br />In this talk we'll take a look at one team's journey from working in F# on .NET into the world of shipping pure, immutable and fully-functional code written in Haskell straight into production on AWS. We'll cover the reasons why we chose Haskell, what advantages it brought us, and the challenges we overcame along our journey.",
        "SessionTitle": "Haskell in Production - Not just a theory",
        "PresenterWebsite": "www.digitallycreated.net"
    },
    {
        "SessionId": "02eb17b9-cf94-4742-b425-ac14fd7bbb4e",
        "PresenterName": "David Gardiner",
        "PresenterTwitterAlias": "davidrgardiner",
        "RecommendedAudience": "Knowledge of basic unit testing and or familiarity with basic .NET/C# coding",
        "SessionAbstract": "In this fast-paced talk we'll look at 10 really useful libraries and tools that can make writing unit tests faster, simplify reading and understanding test code and better help identify the root cause of failed tests. <br /><br />A great mix of general and special purpose libraries to have in your unit testing toolbox.",
        "SessionTitle": "10 tools and libraries to enhance .NET Unit Testing",
        "PresenterWebsite": "david.gardiner.net.au"
    },
    {
        "SessionId": "40043a1a-3053-422c-b074-a9c2f3f124e0",
        "PresenterName": "Aaron Powell",
        "PresenterTwitterAlias": "slace",
        "RecommendedAudience": "Intermidiate",
        "SessionAbstract": "Redux has grown in popularity within the React community as an alternative to Flux and a powerful way to manage within your application. From its focus on immutability, pure functions or time traveling, it's become a popular way to back your React applications. <br /><br />But Redux is more than a React library, it's a powerful pattern for data management in any kind of application. <br /><br />In this session we're going to dive deeply into how Redux works, look at why it's so popular with React, how it can work with any front-end framework and even beyond JavaScript.",
        "SessionTitle": "Redux, beyond React",
        "PresenterWebsite": "www.aaron-powell.com"
    },
    {
        "SessionId": "18dae88d-468c-4cd6-b1d2-e726069f9ac3",
        "PresenterName": "Mahesh Krishnan",
        "PresenterTwitterAlias": "maheshkrishnan",
        "RecommendedAudience": "Developers, Developers, Developers",
        "SessionAbstract": "In the eyes of a lot of people, \"the stereotypical developer\" is an introvert, who spends all of his or her time in front of a computer, communicates poorly, is socially awkward, unreliable, wears esoteric T-shirts and has an addiction to caffeine. <br /><br />Of course, this is not (all) true, but as developers our coding skills far outweigh our \"soft\" skills. So, what do we, as developers, need to do to improve on these skills? <br /><br />Mahesh Krishnan, draws upon his years of experience as a developer and consultant to talk about these skills, and what you need to do to get them. He will provide you with tools and tips to help you with your confidence, communication skills, time management skills, how to resolve conflict, etc; and also what you need to do to advance both your technical and leadership skills.",
        "SessionTitle": "Soft skills for the developer",
        "PresenterWebsite": "mahe.sh"
    },
    {
        "SessionId": "0cdcf3d0-60a5-4ed9-af25-846819ff26da",
        "PresenterName": "Jorge Arteiro",
        "PresenterTwitterAlias": "jorgearteiro",
        "RecommendedAudience": "Developers, DevOps and Operations with at least basic level of development.",
        "SessionAbstract": "Microsoft just released a windows 10 insider version allowing Hyper-V Containers on Windows 10 desktops. <br /><br />Learn how you can use Docker and Hyper-V containers, to develop and ship containerized applications today!",
        "SessionTitle": "\"Native Containers on Windows 10 using docker\" - a game changer for developers",
        "PresenterWebsite": "azuretar.com"
    },
    {
        "SessionId": "f594d576-3418-433c-8a34-4ffe9b0c6fc0",
        "PresenterName": "Igor Gorelik",
        "PresenterTwitterAlias": "rogik",
        "RecommendedAudience": "It's 101 level session - no prior knowledge is required",
        "SessionAbstract": "All of us play games. Some games are very complex (e.g. Hallo, Call of Duty, etc.) and some are not. Even though the game creation seems like a very complex task , with Unity3D and C# it’s not that hard. I will demonstrate it through number of examples and hope it will wake up your inner game developer.",
        "SessionTitle": "Making games 101",
        "PresenterWebsite": null
    },
    {
        "SessionId": "f85d9187-5132-4c51-af7e-9e896585ad2d",
        "PresenterName": "Carl Belle",
        "PresenterTwitterAlias": null,
        "RecommendedAudience": "I'd say mainly programmers with decent OO fundamentals and perhaps a bit of an understanding of pre-calculus maths (non-essential).",
        "SessionAbstract": "Many great resources exist for those who wish to understand quantum computing, however nearly all these resources fail to cater to the novice. Many resources simply assume that the reader is already proficient with both linear and matrix algebra, as well as intrinsically understand how a quantum system should function. These resources are all well and good, and probably provide a great deal of insight to those equipped to digest them (physicists, mathematicians), but for the rest of us, they appear dense and impenetrable. <br /><br />How can you begin to understand something this complex in the first instance? <br /><br />What is needed is an introduction to the introduction, some bridging information that illustrates these concepts in 'normal' language, and allows the reader to go from ‘Novice’ to ‘Somewhat Prepared’. Join me to get the skinny on quantum computing and quantum information fundamentals, as seen from an OO perspective.",
        "SessionTitle": "Quantum Computing fundamentals via OO",
        "PresenterWebsite": "www.eliasdigital.com"
    },
    {
        "SessionId": "80403212-d020-4d50-805b-3f4a58b16710",
        "PresenterName": "William Tulloch",
        "PresenterTwitterAlias": "wtulloch",
        "RecommendedAudience": "level 200",
        "SessionAbstract": "The actor/model has, of late, become the pattern du jour. In the .NET world the two most cited implementations are AKKA.NET and Orleans. In this talk we look at how these two compare; strength and weaknesses, similarities and differences. Is one better than the other or does it just depend on the right tool for the job?.",
        "SessionTitle": "The Actor/Model pattern in .NET: Akka.Net vs Orleans for the curious",
        "PresenterWebsite": null
    },
    {
        "SessionId": "f2f89129-85bd-4805-b3ff-f23377c32443",
        "PresenterName": "Ahmad Atighechi",
        "PresenterTwitterAlias": "ahmad2x4",
        "RecommendedAudience": "basic knowledge about web programming",
        "SessionAbstract": "WebComponents is an in progress standard, by which you can teach good old HTML new tricks. Four different building blocks define Web Components, HTML Templates, Custom Elements, HTML Imports and Shadow DOM. Just like any other web standard different browsers implement the standard in different point of time, hence we polyfill to bridge today to the future. Since web components is future of web, different modern web framework/libraries take web components into consideration and provide some level of support for web components. In this session we will review current state of Web Components standard, different browser's support and also current polyfill for web components. We will also review today's big modern web frameworks like Angular 2.0 and Polymer to see how compatible they are with web components standard.",
        "SessionTitle": "Web Components and modern web frameworks",
        "PresenterWebsite": "www.ahmadreza.com"
    },
    {
        "SessionId": "68d2e438-694b-47d4-92d9-28ba910d45d7",
        "PresenterName": "Julian Berton",
        "PresenterTwitterAlias": "julianberton",
        "RecommendedAudience": "Technical people involved in building web applications",
        "SessionAbstract": "Being able to think like a hacker is an important first step in designing and developing secure software. This talk will go through what motivates cyber criminals, how they can profit from attacking businesses and an overview of how an online, agile, devops, microservice architected, CD/CI, insert buzz word here company is approaching application security.",
        "SessionTitle": "Thinking like a hacker",
        "PresenterWebsite": "bertonjulian.github.io"
    },
    {
        "SessionId": "e4756a6d-0ed9-47f9-b09a-a13bbd21b5ed",
        "PresenterName": "JT",
        "PresenterTwitterAlias": "jtango18",
        "RecommendedAudience": "Anyone who has built software at some point.",
        "SessionAbstract": "Objective-C is a heinous and ugly beast. It's a testament to the other advantages of the Apple ecosystem that anyone bothered to build apps with it at all. It seems that maybe Apple realised this and last year they announced their newest programming language for all their platforms: Swift. Is it any good though? Or is it just more of the NSSame? Come take a quick lap through some of the semantics, syntax and capabilities of Swift and additionally, see how they compare to language features in C#/.NET with a few nods to JavaScript along the way.",
        "SessionTitle": "A Swift Lap for .NET Devs",
        "PresenterWebsite": null
    },
    {
        "SessionId": "workshop-3",
        "PresenterName": "Shawn Wildermuth",
        "PresenterTwitterAlias": "ShawnWildermuth",
        "RecommendedAudience": null,
        "SessionAbstract": "ASP.NET Core is the newest web framework from Microsoft. Shawn has been teaching it since early betas. In this workshop, he'll walk you through how to build an application from scratch using ASP.NET Core. It will include coverage of MVC6, Entity Framework, Identity and Building a REST Service.",
        "SessionTitle": "ASP.NET Core From Scratch",
        "PresenterWebsite": "wildermuth.com"
    },
    {
        "SessionId": "workshop-4",
        "PresenterName": "Jeremy Clough",
        "PresenterTwitterAlias": "jhbc",
        "RecommendedAudience": null,
        "SessionAbstract": "Want confidence in your code but don't know how to escape the monotony of writing innumerable unit tests? Does refactoring fill you with a sense of dread when you realise the number of tests that will be impacted? Enter property based testing... <br /><br />Come along to learn how to test the properties of your code, and leave with a new level of confidence and satisfaction you never knew was possible.",
        "SessionTitle": "Introduction to Property Based Testing (using F#)",
        "PresenterWebsite": null
    },
    {
        "SessionId": "321d7f4c-fb64-448d-a048-8494ba12bf89",
        "PresenterName": "Abhaya Chauhan & Joshua Toth",
        "PresenterTwitterAlias": null,
        "RecommendedAudience": "No pre-req",
        "SessionAbstract": "This talk is to discuss the lessons we learnt from our first microservice. It has been running in production just under a year (over 160 deployments) - looking back, we have scars, and we've learnt a lot - lets have a retro! <br /><br />We will cover all sorts of topics ranging from the technical details of our approach, in terms of technology stack, continuous deployments, our  journey with new technology, and even our big mistakes. We'll discuss what happened, and how we worked to fix them. <br /><br />A lot has been learnt, especially in terms of working with the Monolith, and we'd love to share. Something for everyone.",
        "SessionTitle": "Microservice Scars",
        "PresenterWebsite": "www.abhayachauhan.com"
    },
    {
        "SessionId": "2538ffc5-e783-4165-9c7c-0df148f251a6",
        "PresenterName": "John Bristowe",
        "PresenterTwitterAlias": "johnbristowe",
        "RecommendedAudience": "Must love code.",
        "SessionAbstract": "NativeScript: great framework? Or, the greatest framework? You've heard how awesome it is, now see it in action! In this session, we'll build a native mobile app for iOS and Android from scratch. It will be epic.",
        "SessionTitle": "Let's Build a Native Mobile App with NativeScript and Angular 2",
        "PresenterWebsite": "bristowe.com"
    },
    {
        "SessionId": "209edccc-efd1-4469-8493-a78e448b04e0",
        "PresenterName": "Josh Price",
        "PresenterTwitterAlias": "joshprice",
        "RecommendedAudience": "Any developer who has ever produced or consumed a REST API",
        "SessionAbstract": "What if you could simply declare your available data types and quickly publish a fluid, fast and self-documented API that isn't tied to HTTP, JSON or your choice of backend store? Sounds better than handcrafting a RESTful API right? <br /><br />Say hello to GraphQL, an exciting new REST alternative from Facebook which will help you build faster and easier to work with web APIs than ever before. <br /><br />We'll explore how to define your schemas, hook them up to your data and connect to them from your frontend clients. We'll also look at the future of GraphQL. You'll never look at REST APIs the same way again. Promise.",
        "SessionTitle": "Better APIs with GraphQL",
        "PresenterWebsite": "graphql-elixir.org"
    },
    {
        "SessionId": "391c8b8a-b4b2-4b9f-8dac-493440c427c3",
        "PresenterName": "Colin Scott",
        "PresenterTwitterAlias": "abstractcode",
        "RecommendedAudience": "Beginner to intermediate",
        "SessionAbstract": "Everyone loves to talk themselves up in conference presentations, regaling you with tales of their technical brilliance. Sure these talks can be filled with valuable information about the latest technologies, but have you ever stopped to consider how it makes you, the audience, feel? After you've spent the weekend hearing about reactively programmed event sourced games running in the cloud isn't hard to go back to writing CRUD forms using ASP.NET WebForms 3.5 against an Access DB? Don't you want someone to stand up and tell you all the ways they've screwed up so you can feel better about the code that awaits you on Monday? <br /><br />This is that talk. <br /><br />It's taken Colin 17 years to learn these things through failures big and small. Now you can learn such classic mistakes as inappropriate layering, leaky abstractions, reimplementing perfectly valid frameworks because reasons, undervaluing the cost of development friction, and so much more. All this (probably, maybe) in just one session the length of which I did not bother to research. Yours to take away so you can laugh smugly at me when you fail to do so in your career*. Vote now but don't send any money. <br /><br />*offer void where prohibited",
        "SessionTitle": "Random Failures of Architecture I Have Committed",
        "PresenterWebsite": "abstractcode.com"
    },
    {
        "SessionId": "keynote",
        "PresenterName": "Paul Fenwick",
        "PresenterTwitterAlias": "pjf",
        "RecommendedAudience": null,
        "SessionAbstract": "Technology is advancing at a faster rate than society's expectations, and can go from science-fiction to being consumer-available, with very little in the way of discussion in between, but the questions they raise are critically important: What happens when self-driving vehicles cause unemployment, when medical expert systems work on behalf of insurance agencies rather than patients, and weapon platforms make their own lethal decisions?",
        "SessionTitle": "The Future is Awesome (and what you can do about it)",
        "PresenterWebsite": "pjf.id.au"
    },
    {
        "SessionId": "locknote",
        "PresenterName": "Shawn Wildermuth",
        "PresenterTwitterAlias": "ShawnWildermuth",
        "RecommendedAudience": null,
        "SessionAbstract": "As developers we spend a lot of time chasing technical skills like JavaScript, C++, and Angular. But the reality is that it the skills you have when you get a job are rarely the ones that you will use for your entire tenure. When I evaluate talent, I focus on the skills that don’t go well on a resume: communication, teamwork, estimation, and active listening. In this talk, I’ll delve into why these skills are crucial to being a great developer and how you acquire the skills.",
        "SessionTitle": "Being a Better Developer: Learning Skills That Aren't On Your Resume",
        "PresenterWebsite": "wildermuth.com"
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
