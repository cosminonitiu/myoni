import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileSaverService } from 'ngx-filesaver';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private _http: HttpClient, private _FileSaverService: FileSaverService, private dialog: MatDialog,) { }

  public devProjects = [
    {
      name: 'AI Reviewer Integration',
      description: 'Integration of AI Reviewer into a .Net application deployment',
      tags: ['React', 'Azure', 'Terraform', 'Kubernetes'],
      htmlname: 'ai-reviewer',
      image: 'assets/PROJECT-AIReviewer/AIReviewer-2.png',
    },
    {
      name: 'Survey Management and Data Analysis System',
      description: 'Survey Management and Data Analysis System',
      tags: ['Angular', '.Net', 'Azure', 'Kubernetes'],
      htmlname: 'wise',
      image: 'assets/PROJECT-Wise/Wise-7.jpeg',
    },
    {
      name: 'WORK: Internal File Transfer',
      description: 'File Transfer Application, wrapper over S3 and SFTPGO (sftp daemon)',
      tags: ['.Net', 'Angular', 'SFTPGO', 'AWS-Services'],
      htmlname: 'file-transfer',
      image: 'assets/PROJECT-FileTransfer/file-transfer.png',
    },
    {
      name: 'WORK: Admin Panel and Windows Client',
      description: 'Panel for configuring CAD applications and organizing business logic',
      tags: ['.Net', 'Angular', 'WPF'],
      htmlname: 'admin-panel',
      image: 'assets/admin-panel.png',
    },
    {
      name: 'Europe Cars Scrapper',
      description: 'All European car postings centralized in a web service',
      tags: ['Python', 'Angular', 'Redis'],
      htmlname: 'car-scrapper',
      image: 'assets/car-scrapper-1.png',
    },
    {
      name: 'Tickets Chatbot ML Model',
      description: 'Ticket Classification for Support Desk using Machine Learning',
      tags: ['Python', 'SKLearn', 'Pyspark'],
      htmlname: 'pyspark-ai',
      image: 'assets/pyspark-ai-1.png',
    },
    {
      name: 'The God\'s Menu V2',
      description: 'The upgrade to my diet network',
      tags: ['Angular', 'Typescript', 'Firebase'],
      htmlname: 'godmenu2',
      image: 'assets/god2-1.PNG',
    },
    {
      name: 'The God\'s Menu',
      description: 'My own personal diet planning/social web application',
      tags: ['React', 'Mongo', 'REST', 'Redux', 'Node'],
      htmlname: 'godmenu',
      image: 'assets/MenuPage.png',
    },
    {
      name: 'TikTik',
      description: 'A clone of tiktok',
      tags: ['NextJS', 'Sanity', 'Tailwind', 'Zustand'],
      htmlname: 'tiktik',
      image: 'assets/tiktik-4.PNG',
    },
    {
      name: 'KryptoNet',
      description: 'First dip into the Web 3.0 and Blockchain technology',
      tags: ['React', 'Smart-Contracts', 'Web 3.0'],
      htmlname: 'kryptonet',
      image: 'assets/kryptonet-4.PNG',
    },
    {
      name: 'Sanity Ecommerce',
      description: 'Building a simplified and a customizable ecommerce app',
      tags: ['React', 'Next-js', 'Sanity/Stripe'],
      htmlname: 'ecommerce',
      image: 'assets/ecommerce-3.PNG',
    },
    {
      name: 'NFT Markeplace React Native',
      description: 'First React Native Application, with a TailwindCSS made Showcase',
      tags: ['React-Native', 'Tailwind', 'NFT'],
      htmlname: 'nftMarket',
      image: 'assets/nftmarket-3.PNG',
    },
    {
      name: 'Flutter basic projects',
      description: 'Leaning Flutter for future App development in the mobile enviroment',
      tags: ['Mobile', 'Flutter'],
      htmlname: 'flutter',
      image: 'assets/flutter.png',
    },
    {
      name: 'Voice powered Expense App',
      description: 'A simple expense tracker using Speechlys machine learning model for voice recog.',
      tags: ['Speechly', 'React + useContext', 'MUI'],
      htmlname: 'expense',
      image: 'assets/ExpenseVoice-2.png',
    },
    {
      name: 'Wagtail (Django CMS) for Python',
      description: 'Python project made during the FullStack Dev course from Udemy',
      tags: ['Python', 'Django', 'Wagtail'],
      htmlname: 'wagtail',
      image: 'assets/WagtailRocket-5.png',
    },
    {
      name: 'Teams-like Chat Application',
      description: 'Developed using the Chat Engine API and React, built to simulate a Teams-like experience',
      tags: ['React', 'npm'],
      htmlname: 'teams',
      image: 'assets/TeamsCopy-2.PNG',
    },
    {
      name: 'Next.js Movie App',
      description: 'React and Next.js App developed during Next.js Udemy course',
      tags: ['React', 'Next.js', 'Front-End'],
      htmlname: 'movieApp',
      image: 'assets/MovieNextApp-2.png',
    },
    {
      name: 'OSF Digital Academy Project',
      description: 'Project made for the Training Program offered by OSF Digital',
      tags: ['Full-Stack', 'Node.js'],
      htmlname: 'osfProj',
      image: 'assets/OSFAcademyProject-2.png',
    },
    {
      name: 'MThree C++ Training',
      description: 'Training Program for the role of C++ Dev at Morgan Stanley',
      tags: ['Back-End', 'C++', 'Linux', 'SQL'],
      htmlname: 'mthreeAlumni',
      image: 'assets/CPPAlumni.png',
    },
    {
      name: 'Python Image Recognition',
      description: 'Short Progam made during the FullStack Dev course from Udemy',
      tags: ['Back-End', 'Python'],
      htmlname: 'imageRec',
      image: 'assets/ImageRecognition-6.png',
    },
  ];
  public devHtmls: { [key: string]: any } = {
    "wise": [
      ["h1-nolink", ["PROJECT OVERVIEW"]],
      ["p", [
        "The application is a comprehensive enterprise solution designed to transform how organizations gather insights, measure performance, and drive organizational success. The platform combines powerful survey capabilities with advanced analytics to deliver actionable insights that drive business decisions."
      ]],
      ["h1-nolink", ["Core Capabilities"]],
      ["h4-nolink", ["Intelligent Survey Management"]],
      ["ul", [
        "Dynamic survey creation with multiple question types",
        "Automated survey distribution via QR codes",
        "Demographic data collection for deeper insights",
        "Template library for quick deployment",
        "Real-time survey monitoring and response tracking"
      ]],
      ["h4-nolink", ["Strategic Project Management"]],
      ["ul", [
        "Structured project organization with customizable folders",
        "Ready-to-use project templates for quick deployment",
        "Comprehensive project tracking and status monitoring",
        "Flexible project-specific configurations"
      ]],
      ["h4-nolink", ["Advanced Analytics & Reporting"]],
      ["ul", [
        "Professional PDF report generation",
        "Excel export capabilities for detailed analysis",
        "Custom KPI tracking and monitoring",
        "Interactive data visualizations",
        "Demographic analysis for targeted insights",
        "Customer journey mapping",
        "Granular data filtering for precise analysis"
      ]],
      ["h4-nolink", ["Enterprise-Grade User Management"]],
      ["ul", [
        "Role-based access control (Admin and User roles)",
        "Secure user impersonation for support",
        "Personalized user preferences",
        "Multi-language support for global operations"
      ]],
      ["h4-nolink", ["Organizational Structure Management"]],
      ["ul", [
        "Comprehensive employee data management",
        "Flexible organizational structure mapping",
        "Employee survey response tracking",
        "Granular reporting by department or team"
      ]],
      ["h4-nolink", ["Enterprise Integration & Security"]],
      ["ul", [
        "Real-time data synchronization",
        "Customizable branding and theming",
        "Secure cloud storage integration",
        "Enterprise-grade security measures",
        "API access for system integration"
      ]],
      ["h4-nolink", ["Business Benefits"]],
      ["ul", [
        "Streamlining the feedback collection process",
        "Providing actionable insights for decision-making",
        "Supporting data-driven performance management",
        "Enabling global operations with multi-language support",
        "Ensuring secure and compliant data handling",
        "Facilitating organizational change through insights"
      ]],
      ["h4-nolink", ["Ideal For"]],
      ["ul", [
        "Organizations conducting comprehensive employee engagement surveys",
        "Companies tracking and improving organizational performance",
        "Businesses requiring detailed analytical reports",
        "Enterprises managing multiple feedback initiatives",
        "Global organizations requiring multi-language support",
        "Companies maintaining complex organizational structures"
      ]],
      ["img", "assets/PROJECT-Wise/Wise-2.PNG"],
      ["img", "assets/PROJECT-Wise/Wise-3.PNG"],
      ["img", "assets/PROJECT-Wise/Wise-4.PNG"],
      ["img", "assets/PROJECT-Wise/Wise-5.PNG"],
      ["img", "assets/PROJECT-Wise/Wise-6.PNG"]  
    ],
    "ai-reviewer": [
      ["h1-nolink" , ["PROJECT OVERVIEW"]],
      ["p", [
        "The AI Reviewer is an enterprise-grade application designed to provide intelligent code review and documentation assistance. This sophisticated system leverages cutting-edge AI technologies to analyze code, generate documentation, and provide actionable feedback throughout the development lifecycle."
      ]],
      ["h4-nolink", ["Architecture & Infrastructure"]],
      ["p", [
        "The project implements a modern, cloud-native architecture on Azure, utilizing Infrastructure as Code (IaC) principles and container orchestration. The infrastructure is entirely managed through Terraform, with state management handled via GitLab, ensuring version control and collaboration capabilities."
      ]],
      ["img", "assets/PROJECT-AIReviewer/AIReviewer.png"],
      ["h1-nolink", ["Key Components"]],
      ["h4-nolink", ["Infrastructure Layer"]],
      ["ul", [
        "Azure Kubernetes Service (AKS) for container orchestration",
        "Azure Container Registry for container image management",
        "Azure OpenAI Service integration (prepared for future implementation)",
        "Elasticsearch cluster for comprehensive code history and diff analysis"
      ]],
      ["h4-nolink", ["Application Layer"]],
      ["ul", [
        ".NET Backend with Swagger documentation",
        "React-based Frontend with modern UI/UX",
        "GPT-4 API integration for intelligent analysis"
      ]],
      ["h4-nolink", ["CI/CD Pipeline"]],
      ["ul", [
        "GitLab CI/CD with OpenTofu integration",
        "Automated infrastructure deployment",
        "Webhook-based triggers for automated code review"
      ]],
      ["h4-nolink", ["Core Features"]],
      ["ul", [
        "Intelligent Code Review: Automated analysis of code changes with AI-powered suggestions",
        "Pipeline Analysis: GPT-4 powered analysis of pipeline failures with actionable recommendations",
        "Documentation Generation: Automated documentation creation from code analysis",
        "GitLab Integration: Automated comments on merge requests with code improvement suggestions",
        "Comprehensive Code History: Elasticsearch-powered searchable repository of all commits and changes"
      ]],
      ["h4-nolink", ["Technical Highlights"]],
      ["ul", [
        "Infrastructure as Code: Complete infrastructure managed through Terraform",
        "Container Orchestration: Kubernetes-based deployment for scalability and reliability",
        "AI Integration: Advanced GPT-4 API utilization for intelligent analysis",
        "Search Capabilities: Elasticsearch implementation for efficient code history retrieval",
        "API Documentation: Swagger integration for comprehensive API documentation"
      ]],
      ["img", "assets/PROJECT-AIReviewer/AIReviewer-2.png"],
      ["img", "assets/PROJECT-AIReviewer/AIReviewer-3.png"],
      ["img", "assets/PROJECT-AIReviewer/AIReviewer-4.png"]
    ],
    "file-transfer": [
      ["h1-nolink" , ["PROJECT OVERVIEW"]],
      ["p", [
        "*Disclaimer : Project details related to business logic, full arhitecture and the client will not be disclosed",
        "The goal of the project was to create an a file transfer application purely web based which using a basic Angular frontend and a middleware which acts a wrapper, allows users to securely use S3 and SFTPGO to transfer files internally"
      ]],
      ["h4-nolink", ["The arhitecture"]],
      ["p", [
        "While the arhitecture details will not be disclosed the basic outline of the arhitecture had the scope to use the S3 and it's replications rules + SFTPGO as a daemon to allow users to transfer files quickly between one another, a quick rundown of technologies used are:"
      ]],
      ["ul", [
        "Angular for frontend development",
        ".Net with EF Core ORM for middleware development",
        "Keycloak as an identity provider",
        "SFTPGO as a sftp daemon over S3 + S3 replication rules between multiple regions",
        "Nginx as a gateway/reverse-proxy/load-balancer",
        "RabbitMQ as a message que between microservices",
        "MariaDB Galera for storing",
        "Services like Loki, Grafana, Prometheus strictly for monitoring",
        "Terraform, Docker, Kubernetes for ops"
      ]],
      ["h4-nolink", ["My Role in the project"]],
      ["p", [
        "My initial role in the project was assigned as lead frontend dev and if-needed middleware developer, but as the project progressed i was able to also contribute to the arhitecture work / ops. Here is a quick rundown of my bigger contributions:"
      ]],
      ["ul", [
        "First contribution was using my personally developed components and software patterns to bring the frontend to a production-ready state in record time which allowed for more middleware development which was critical",
        "Implementing critical file transfer mechanisms (Retries, Chunking, Progress Reports, Replication Statuses, Role Concepts, Logs)",
        "Contributions to the nginx gateway which had a lua rewrite as a wrapper over the already present sftpgo api (Useful for the chunking)",
        "Development on the microservices (Identity microservice as a wrapper over keycloak and sftpgo authentication, Transfer microservice which dealt with organizing the transfers as dictated by business logic, and Audit consumer microservice)",
      ]]
    ],
    "admin-panel": [
      ["h1-nolink" , ["PROJECT OVERVIEW"]],
      ["p", [
        "*Disclaimer : Project details related to business logic and the client will not be disclosed",
        "The goal of the project was to create an admin panel where the managers can manage all the business logic and an native windows executable which acts as the client for their users"
      ]],
      ["h4-nolink", ["The arhitecture"]],
      ["p", [
        "The arhitecture was decided before i joined the project, it was composed of an Angular frontend admin panel, a WPF client executable and a .Net Backend Microservice arhitecture which uses EF Core as an ORM and CQRS patterns, and for the deployment/ops Docker, Kubernetes",
      ]],
      ["h4-nolink", ["My Role in the project"]],
      ["p", [
        "This was my first advanced work project and i joined strictly as a frontend developer which later developed in working fullstack on all parts of the application. This is a list of my contributions on a high level:"
      ]],
      ["ul", [
        "Starting from the design, and using software patterns (factories for the numerous tables and forms, singleton stores, rxjs patterns like services, interceptors, guards) i implemented the admin application with mock data in a really short timeframe, allowing for more improvements and client satisfaction",
        "After participating in numerous client meetings, i was able to make informed software and database modelling decisions (Entities modelling, Application flow) which allowed for a smooth development process",
        "My first .Net contribution was in this project where good frontend development allowed me to participate in backend work, which was composed of a basic implementations but thanks to that client requests were implemented quickly due to the low backend-frontend latency",
        "I was the sole developer for the WPF client application, which went smoothly due to the MVVM pattern, allowing separation of concerns",
        "My most notable components are reusable highly general purpose components which we still use in other applications today, two examples are a a structured tree list and a highly customizable table"
      ]],
      ["img", "assets/admin-panel-table.png"],
      ["img", "assets/admin-panel-filelist.png"],
    ],
    "car-scrapper": [
      ["h1-nolink" , ["PROJECT OVERVIEW"]],
      ["p", [
        "*Disclaimer : The project is not hosted anywhere due to it's scrapping rate of 50 requests per minute crashing two of the bigger car sites in Romania",
        "The goal of the project was to centralize the european car market in a single service similar to AutoTempest in the USA. The backend service was composed of multile microservices which include: API, Caching, Scrapping, AI-pricing, Car-Vertical Integration"
      ]],
      ["h4-nolink", ["Designing the arhitecture"]],
      ["img", "assets/car-scrapper-2.png"],
      ["h4-nolink", ["More Details"]],
      ["p", [
        "The project was a fun challenge, especially when it came to optimizing the scrapping, taking advantage of redis for caching, web workers to optimize requests with request sessions and virtual pagination for the frontend side",
        "It was quite sad when it came down to closing the project down due to car posting services not being what i've expected as far as we consider scale and redundancy (Autovit was down for 18 hours)"
      ]],
      ["img", "assets/car-scrapper-3.png"]
    ],
    "pyspark-ai": [
      ["h1-nolink" , ["PROJECT OVERVIEW"]],
      ["p", [
        "The aim of this project is to develop a machine learning model for classifying support desk tickets. The project timeline was limited to two weeks, with 10 days dedicated to data exploration and cleaning, and the remaining 4 days focused on model development and integration.",
        "Note: The timeline was a time crunch of 2 weeks, with 10 days dedicated to exploration and cleaning, and the remaining 4 days focused on model development and integration. Despite the time constraints, the project successfully delivered a robust machine learning model with a satisfactory accuracy rate.",
        "Project steps:",
      ]],
      ["ul", [
        "Data Collection: Gathered a dataset of 100,000 old support desk tickets for training and evaluation purposes.",
        "Data Ingestion: Utilized PySpark to ingest the ticket data and stored it in Parquet format for efficient processing.",
        "Data Exploration: Conducted an initial exploration of the ticket data to gain insights into its structure and characteristics. Analyzed various attributes, such as ticket length, unique words, emoticons, and potential misspellings. Identified potential challenges and opportunities for data cleaning and preprocessing.",
        "Data Cleaning: Implemented comprehensive data cleaning techniques to address the identified challenges. Removed emoticons, special characters, and irrelevant information from the ticket text. Handled misspellings through techniques like spell correction or removal of tickets with excessive misspellings. Addressed ticket length variations by considering both long and short tickets during model training.",
        "Dataset Creation: Generated multiple sets of data with different preprocessing techniques for model exploration. These sets included variations in text normalization, feature engineering, and other relevant transformations.",
        "Model Exploration: Explored various machine learning models using PySpark, scikit-learn, and XGBoost. Conducted extensive testing and evaluation of different models' performance on the created datasets. Based on the evaluation results, selected the Support Vector Machine (SVM) model from scikit-learn for further development.",
        "Model Fine-Tuning: Performed hyperparameter grid searches to optimize the SVM model's performance. Adjusted parameters such as kernel type, regularization, and gamma values to enhance accuracy. Continuously tested and evaluated the model to ensure consistent improvement.",
        "Model Evaluation: Conducted rigorous testing to measure the final accuracy of the SVM model. Achieved a 90% accuracy rate for classifying major ticket groups, indicating the model's effectiveness.",
        "Model Integration: Integrated the trained SVM model into a web service for seamless deployment and usage. Created an API or other suitable interfaces to allow users to classify new support desk tickets."
      ]],
      ["img", "assets/pyspark-ai-2.png"]
    ],
    "godmenu2": [
      ["h1-ownlink", ["https://godmenu-db556.web.app/" , "INTRODUCTION (Link)"]],
      ["p", [
        "Here we go, version 2!!!",
        "Now that i have a bit more experience and actual work in the web development space, i can put my skills to use and redevelop my diet application with new technologies. Between switching to Angular and Typescript, Firebase and its Firestore API, services as storage and utility, animations and lazy-loading the project went on to become a lot simpler to make, a lot faster and lot nicer looking.",
        "Some interesting things you might find are front-end paginations, a really cool responsive sidenav, some surprises here and there, and a really interactive design."
      ]],
      ["img", "assets/god2-1.PNG"],
      ["img", "assets/god2-2.PNG"]
    ],
    "godmenu": [
      ["h1-nolink", ["INTRODUCTION"]],
      ["p", [
        "Before creating this app I was looking through full-stack courses, trying bit and pieces of each one, until i found a very interesting MERN Project, standing for Mongo, Express, Redux and Node, on Youtube. Following the course got a me a social media-type of web application, which got me thinking. I had a personal diet app i built for myself, a simple HTML, CSS and JS app. Why not make it into a social active and engaging experience to be shared among my friends, and extended further?",
        "And that is what i did, i used the knowledge gained in that tutorial to build this web application. I started with Mongo to recreate the data that i had before in JSON format. Then built the API with express and cloudify for image hosting, testing it all with Postman. Then came the front-end, using React as a base framework, adding Redux for global state, dispatchs, Axios for API connection, and a lot of small packages (The animated burger menu, react bootstrap, material ui, and tons of other small bits and pieces) to get this application.",
        "It may have been the most fun i have had in a while building something, and it us actually being used by my training group to maximize our gains. It is amaazing!"
      ]],
      ["h1-nolink", ["The progress and the trouble along the way"]],
      ["p", ["Like any good personal project (good as in a good learning experience), it was filled with barriers and hoops i had to get over in order to grasp the concepts i needed. Let me start listing this mental marathon of mine:"]],
      ["h4-nolink", ["The schema"]],
      ["p", [
        "Before building this app using React as a front-end framework, Mongo, REST APIs and a lot more, i had a previous version built only with HTML, CSS and JS.",
        "It stored the data it needed in JSON files and was just a simple client-side application for my personal use. A few months later i followed a Youtube course on designing a MERN application (Mongo, Express, React+Redux, Node) for a social media platform. I saw the potential in that and planned the transformation of my simple app into a social nutrition application. On paper i started designing my routing first, with the data i needed and what fields each schema will have"      ]],
      ["h4-nolink", ["Designing the API, the database and the routing"]],
      ["p", [
        "Thankfully, being a NoSQL-type of database, Mongo was easy to work with. I already had the data schemas in mind, the users, breakfasts, meals, snacks and ingredients.",
        "I planned for every other feature that would come to mind and needed some type of data for them (Like recipe creation date, user fridge information, image paths).",
        "This first part went without trouble. I managed to even find a free image hosting side, Cloudinary with a modern API, to evade using base64 to store images since that could get out of hand.",
        "I used Express and routers to start building the API and Postman to test them. To my surprise, there were not many blockages. Possibly thanks to my previous experience with OSF Academy and some courses that i took beforehand."
      ]],
      ["h4-nolink", ["React and Redux"]],
      ["p", [
        "First part of designing the front-end, was creating the calls to the API and testing the data i get back. Using the standard folder structure for Redux App (api, actions, reducers), i designed this side quite fast. Saving the user to the local storage was the only different call i have made, since i needed that data to be always available after logging in.",
        "What followed was hard for me to grasp at first, which was the Hooks of React. UseState, UseDispatch, UseHistory, and some more made me confused at first. Thankfully Google showed me different use cases for each one, since learning by example has always been the easiest way for me to learn.",
        "I still had trouble with the availability of data at some points, not knowing when the data was available to display my components. Thankfully some Redux tricks (like loading states) solved these issues and would let me play with different loading screens."
      ]],
      ["h4-nolink", ["The subtle issues"]],
      ["p", [
        "While designing this application, the issues did not come about (or at least most of them) with what i have learnt in the tutorial. If it was a simpler use case than a nutrition app which needs to do a lot of calculations at some points, it would have not been a problem. But life is life. I found the way Javascript stores memory on the client side quite confusing and problematic at some points.",
        "Being used to C++, i was used to the freedom of retaining data by reference or value, but this was not the case here. I had to do some workarounds due to my lack of experience with JS, like using temporary variables at some points and force-freeing memory at others. So to summarize, i would put designing the data structure for the app has been the hardest task so far for me. :"
      ]],
      ["h1-nolink", ["The Profile page (Including profile pictures, user data and favorite recipes)"]],
      ["img", "assets/GodMenu-1.png"],
      ["h1-nolink", ["The FAQ (Details about App usage, future plans and contact details)"]],
      ["img", "assets/GodMenu-2.png"],
      ["h1-nolink", ["The 3 main pages for recipes (Which include options to like, favorite, delete, search and create recipes)"]],
      ["img", "assets/GodMenu-3.png"],
      ["h1-nolink", ["The Recipe details page (Which contains data for the ingredients needed and what you have, nutritional data and comments)"]],
      ["img", "assets/GodMenu-4.png"],
      ["h1-nolink", ["The Fridge (Where users input their actual resources)"]],
      ["img", "assets/GodMenu-5.png"],
      ["h1-nolink", ["The Weekplanner, the main deal (Used to plan a whole week of nutrition, generate shopping lists and have fun)"]],
      ["img", "assets/GodMenu-6.png"]

    ],
    "tiktik": [
      ["h1-ownlink", ["https://tik-tik-six.vercel.app/" , "INTRODUCTION (Link to actual site)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/TikTik" , "Github repository"]],
      ["p", [
        "TikTok has taken over the world recently more or less. I wanted to see what it takes to create such an application, and in this case i went with a responsive web app instead of a mobile app.",
        "The application was developed based on Next.js and it&apos;s file based routing and Server side rendering, and Sanity as a content managing system and backend endpoint.",
        "The application also includes Google authentification with Google Identity Services, Zustand usage (A lightweight redux), TailwindCSS for styling and Axios for calls"
      ]],
      ["img", "assets/tiktik-1.PNG"],
      ["img", "assets/tiktik-2.PNG"],
      ["img", "assets/tiktik-3.PNG"],
    ],
    "kryptonet": [
      ["h1-ownlink", ["https://kryptotest.netlify.app/" , "INTRODUCTION (Link to actual site)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/Kryptonet" , "Github repository"]],
      ["p", [
        "Before starting this little project, i was still aware of the crypto world, and had just a bit of insight on the blockchain technology. So i did not start from zero. However, it opened my eyes regarding what is possible at the moment and what is to come in the future for Web 3.0. Seems the world is moving towards a different direction.",
        "The project itself, at least on the front-end was quite simple, but it was the first time i have used TailwindCSS and it was so fun. It does feel like a different Bootstrap to me, which just means more options to choose from and learn.",
        "Also, a new tool shown in this project is Vite, a tooling which makes developing React apps much faster."
      ]],
      ["h1-nolink", ["Old and new lessons"]],
      ["h4-nolink", ["Tailwind CSS"]],
      ["p", [
        "Just an amazing CSS framework, if i can call it that, all around. I had no need to create any extra classes, or use any css files. It was all done in the JSX, and it was simple to setup.",
        "I do admit the amount of new classes, and terminology was a bit much at the beginning, but it all made sense halfway through the course."
      ]],
      ["h4-nolink", ["Ethers, Smart Contracts and Solidity"]],
      ["p", [
        "I did struggle a bit, i will be honest. A completely new language, new functions, and terms i have not heard before. I grabbed the documentation and started reading just for it to make sense to me. By the end, i still have some things to solve in my mind, but it was an eye-opening experience. It is not that complicated after getting into it.",
      ]],
      ["h4-nolink", ["New tools at my disposal"]],
      ["p", [
        "Before listing the blockchain tools, a special mention to Vite, making the development process of my React apps much faster.",
        "Starting from Metamask which was a simple wallet to use and create new accounts for testing, to Ropsten faucet for grabbing Dummy Ethereum so i do not have to spend real money on Gas Fees, and Alchemy for providing me the base for making blockchain requests."
      ]],
      ["img", "assets/kryptonet-1.PNG"],
      ["img", "assets/kryptonet-2.PNG"],
      ["img", "assets/kryptonet-3.PNG"],
    ],
    "ecommerce": [
      ["h1-ownlink", ["https://tik-tik-six.vercel.app/https://ecommerce-next-js-stripe-fg57s9md8-globaldevgroup.vercel.app/" , "INTRODUCTION (Link to actual site)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/Ecommerce-Next.js-Stripe" , "Github repository"]],
      ["p", [
        "Why am i building an ecommerce site in a world where Shopify and so many others shop building platforms exist? Well, i have worked recently with a few clients on developing their Shopify shops, and, while helpful to have tools at your disposal, so many of them costing money, i would have wanted the freedom to build the site as i want it, but including the functionalities and simplifications that Shopify brings. Then a course came about which included the CMS Sanity, the Stripe payment system and developed with Next.js and i saw the possibilities of developing such a website.",
        "I would normally list the difficulties i have had with the project, but due to Adrian from JSM being a very good teacher and the technologies used being modern and not having old dependencies, the project  went without a hitch.",
      ]],
      ["img", "assets/ecommerce-1.PNG"],
      ["img", "assets/ecommerce-2.PNG"],
    ],
    "nftMarket": [
      ["h1-ownlink", ["https://old-credit-9021.on.fleek.co/" , "INTRODUCTION (Link to actual site)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/ReactNativeNFTMarket/tree/main/nft-marketplace-showcase-main" , "Github repository"]],
      ["p", [
        "React Native has not been a hard transition to do while having some React experience, thankfully. What amazed me while doing this project is the power of Expo, allowing you to test your app on your phone while updating it on your development machine. I got blown away by the possibility this has brought to mobile development.",
      ]],
      ["img", "assets/nftmarket-1.PNG"],
      ["img", "assets/nftmarket-2.PNG"],
    ],
    "flutter": [
      ["h1-ownlink", ["https://github.com/flutterProjectsCosmin/BasicProjects" , "Github repository"]],
      ["p", [
        "While planning for my future applications, i had to consider mobile development as it is becoming more and more proeminent, and Frameworks that allow cross-platform development might become the norm. While studying about the trends on mobile development, I could not ignore the presence of Flutter in this medium. I took a bootcamp course on Flutter, which included the mentioned projects in this section.",
        "What i have observed but did not have difficulties with was the nature of Flutter of abstractizating the classes it provides, but also allowing the use of the base classes, if you want more customization. The overall potential seems amazing and I will probably delve a bit deeper into Flutter at some point in the future."
      ]],
      ["h4-nolink", ["BMI Calculator"]],
      ["small-img", "assets/flutterBMI-1.png"],
      ["h4-nolink", ["Weather Application using Location"]],
      ["small-img", "assets/flutterClima-1.png"],
      ["h4-nolink", ["Text Adventure App with Dynamic Rendering"]],
      ["small-img", "assets/flutterDestini-1.png"],
    ],
    "expense": [
      ["h1-ownlink", ["https://cosmin-voice-powered-expense-tracker.netlify.app/" , "INTRODUCTION (Link to actual site)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/Voice-powered-Exepense-Tracker/blob/main/README.md" , "Github repository"]],
      ["p", [
        "This is the first project in my track of discovering new APIs and new packages that i can make use of in my future projects. This time, it was Speechly, a voice-oriented package, that has it s own machine learning model, which you can program at the beginning for specific inputs. Also has it s own UI elements, which made it really easy to use.",
        "I would also mention MUI here since it is the first time i properly interacted with it, and made use of it s styles and animations. And as the final mention, hooks. I finally made use of the useContext hook instead of Redux and it made my life a bit easier than i expected and i also created a simple custom hook."
      ]],
      ["img", "assets/ExpenseVoice-1.PNG"],
    ],
    "wagtail": [
      ["h1-ownlink", ["https://github.com/Python-Experiences-Onitiu-Cosmin/Rocketman-FullStack-Web-Dev" , "Github repository"]],
      ["p", [
        "During the FullStack Web Development Course offered by Kalob Taulien on Udemy, one section was dedicated to Python. Thankfully he did not leave it as just the introduction to Python and introduced his project, a framework CMS development on top of Django with simmilar syntax called Wagtail. The way he presentent it, and I will use his words Think of Wordpress, but think much bigger, much more customizable, more admin-friendly",
        "The project here is a simple site for Rocket Cleaning, i mean, as you do, called Rocketman. The interface, being the first image you will see looks a lot like Wordpress, but it is completel customized in the course, all the elements, all the settings are created in the project. So with Wagtail there are no limits and no defaults, total freedom.",
        "I will refrain from posting the code, since it is a lot to post (You can find it in the Github link) but i will list the points covered in the course"
      ]],
      ["ul", [
        "Python management and virtual enviroments",
        "Homepages and templates",
        "Apps and pages predesign and templating",
        "Validation and debugging using Python packages",
        "Flex pages and customizable content",
        "Streamfields and their power",
        "Caching and Speeding up the site",
        "Using Sentry",
        "Launching the site on DigitalOcean",
      ]],
      ["img", "assets/WagtailRocket-1.png"],
      ["img", "assets/WagtailRocket-2.png"],
      ["img", "assets/WagtailRocket-3.png"],
      ["img", "assets/WagtailRocket-4.png"],
    ],
    "teams": [
      ["h1-ownlink", ["https://cosmin-teams-copy.netlify.app/", "Introduction(Link to actual site)"]],
      ["p", ["Please use onitiucosmin and 123123 as the password, as the signup functionality of the chat engine was still a WIP. :)"]],
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/Teams-Copy" , "Github repository"]],
      ["p", [
        "There are so many node packages out there at the moment, each one bringing different possibilities to the table, and i belive that to be amazing. On this project, i made use of a really cool API from Chat Engine, a dedicated platform to develop your own chat applications and design them however you want to.",
        "In this project, branching off from the default Chat Engine interface, this app also has read and push notifications, images, activity status, and a redesigned main chat. Really cool experience to see what possibilities are out there for developing whatever the hell you want!",
      ]],
      ["img", "assets/TeamsCopy-1.PNG"],
    ],
    "movieApp": [
      ["h1-ownlink", ["https://github.com/Javascript-Projects-Cosmin/Movie-App-with-Next.js" , "Github repository"]],
      ["p", [
        "I will not show the whole process of creating the app since the app itself is quite simple.",
        "What was fun about it, was learning the principles of React and Next.js. The modularization and big range of customization with passable props, fun design and easy to understand, made this experience great for me.",
      ]],
      ["img", "assets/MovieNextApp-1.png"],
    ],
    "osfProj": [
      ["h1-nolink", ["DISCLAIMER"]],
      ["p", ["In any of the work related pages, I take on myself the responsability to not present the companies i worked with in neither a negative nor a positive light. The contents will be focused on what I learned, how i evolved and the projects given, on a brief report for privacy reasons."]],
      ["h1-nolink", ["Introduction"]],
      ["p", ["The academy was an internship/upskill program, launched by OSF, which focused on a few different paths. The path i took was the back-end course, and i will list the notions covered in the course right here:"]],
      ["ul", [
        "Introduction and the Basics of JavaScript",
        "jQuery Basics",
        "AJAX Basics",
        "Object Oriented JavaScript",
        "Bootstrap 4 Basics",
        "Node.js Introduction",
        "Express Basics and using PUG templating",
        "User auth with Express and Mongo",
        "Introductions to REST APIs",
        "Github basics",
      ]],
      ["h1-nolink", ["Problems i had trouble with and how i got over them"]],
      ["p", ["Being my first ever front-end application, of course errors were part of the norm. Let me list a few of the them and i got over them"]],
      ["h4-nolink", ["Templating with PUG"]],
      ["p", ["Since i was not accustomed to even the usual HTML and CSS, going to PUG for templating was not something i found easy. Resources were a bit scarce as well, since most people that want custom components and templates would go to a framework like React. Still, there were enough for me to figure out how to do it and use translators from HTML to PUG. So i cheated and first wrote the HTML and translated it to PUG to make my life easier :)"]],
      ["h4-nolink", ["Requests"]],
      ["p", ["Being completely unfamiliar with web requests at this point did not give me any advantages. AJAX and express and REST all piled up and i got a bit overwhelmed. Thankfully, there were tutorial videos in this course which hit close to what i needed to do, so i tried to replicate their application building in my project with partial success. All my routing went fine, but i do think it was not optimized, since i was grabbing too much data from the API when i needed just fractions of it + extra META information"]],
      ["h4-nolink", ["The Asynchronous JavaScript"]],
      ["p", [
        "If i had to list one major issue i have had with this, it would be the async and await of JavaScript. It did not take me long to understand how they were supposed to work. But understanding them and implementing them in my project without encountering errors were completely different beasts. To be honest, how i got over this barrier was my taking little steps and testing each one, with console.logs, or alerts or using temporary variables. Thankfully, by the end, i got most of the concepts down, with a few headaches and a lot of coffee.",
        "The course went on for almost a month and the objective was to build a dynamic commerce website, using endpoints given to us to their private database(including product and category searches, user database, and based on token, shopping cart information). I will put a few captures of the website i built but not de code:"
      ]],
      ["img", "assets/OSFAcademyProject-1.png"],
      ["img", "assets/OSFAcademyProject-2.png"],
      ["img", "assets/OSFAcademyProject-3.png"],
      ["img", "assets/OSFAcademyProject-4.png"],
    ],
    "mthreeAlumni": [
      ["h1-nolink", ["DISCLAIMER"]],
      ["p", ["In any of the work related pages, I take on myself the responsability to not present the companies i worked with in neither a negative nor a positive light.The contents will be focused on what I learned, how i evolved and the projects given, on a brief report for privacy reasons."]],
      ["h1-nolink", ["The Program"]],
      ["p", ["The program was made to get new employees ready, on the technical side for their positions. The goal was to get us started with Linux, C++ and Financial knowledge within 5 weeks. I will detail a bit the topics covered week by week."]],
      ["h4-nolink", ["Week 1: Linux basics"]],
      ["ul", [
        "For this experience to be more hands-on, we used the Amazon Server Service",
        "We gradually started Linux, from the Basic commands, Files, Variables, Reading Files",
        "We also went into Server Health, Disk Management, Processes, Scripting tools and a bit of Cron",
        "This week also included a bit of IT history, which was interesting",
      ]],
      ["h4-nolink", ["Week 2-4: C++"]],
      ["ul", [
        "This part of the course was more self-paced, having a considerable amount of information to go through for the basics of C++",
        "We were assisted by the instructor at all points, having regular meetings and getting new challenges",
        "Topics covered include: Basics(variables, branches, loops, vectors, user-defined functions)",
        "We went on with OOP oriented topics:classNamees, Pointers, Inheritance, Templates",
        "Additional information included: Streams, Source Control, Recursion, Search and sort algorithms, containers, exceptions"
      ]],
      ["h4-nolink", ["Week 5: Financial Markets"]],
      ["ul", [
        "Topics covered: Basics, Equity trading, Fixed income, Derivatives, Currencies, Treausry, Regulation and risk"
      ]],
      ["h4-nolink", ["Additional incentives during the course"]],
      ["ul",[
        "During the course, we luckily got to give free-style presentations on different IT topics to get us used to public meetings",
        "We held some coding challenges, one especially fun example being the Code Wars between the group members",
        "Me and a friend from the group started a home-gym program for the group, for our better health",
        "Resource sharing between members"
      ]],
      ["h4-nolink", ["Additional directions after the course"]],
      ["p", ["Luckily, after the course we still had access to a lot of information, which we could go through at any time and it included the next list"]],
      ["ul", ["SQL databases (Using MySQL)"]],
      ["p", ["It also included access to online learning services like Linkedin Learning, which i took the following courses on:"]],
      ["ul", [
        "Parallel and Concurrent Programming with C++",
        "C++: Advanced Topics",
        "C++: Design Patterns Creational",
        "C++ Best Practices",
        "Training Neural Networks in C++",
        "Web Servers and APIs using C++",
        "Functional Programming with C++",
        "Test Driven Development"
      ]],
    ],
    "imageRec": [
      ["h1-nolink", ["INTRODUCTION"]],
      ["p", ["Following the fullstack development course by Kalob Taulien, this was one of the short projects included in the course.<br /> Basically, it is a script that, using a pre-existing model and packages for Python, can detect in images different types of entities (People, Cars, Animals, Bikes, Traffic, Etc.). I will not add this project to my GitHub since i did not make any changes to the original so please, check this link to the original project created by Kalob :) https://github.com/KalobTaulien/image-detection"]],
      ["h1-nolink", ["Setting up the project"]],
      ["p", ["The hardest part of the project to put it straight, setting up the virtual enviroment (as to not install useless packages on your local python dev).<br /> Libraries needed in this project are: Tensorflow (used in this manner for version pip install tensorflow==1.* for the correct version of the components)<br /> ImageAi, OpenCv, Keras (You can find them in the requirments txt from the github project).<br /> The model used for image recognizition was created by Olafenwa Moses and you can find it at this link: https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/resnet50_coco_best_v2.0.1.h5"]],
      ["small-img", "assets/ImageRecognition-1.png"],
      ["h1-nolink", ["The code"]],
      ["p", ["The code itself is quite simple, it uses the given above dependencies and becomes a simple code itself. It imports the ObjectDetection main className from imageai<br /> It sets up the current path, and loads the model downloaded before, then does the simple task of picking an image given as an argument, <br /> and outputs a new image with the detection loaded. It also prints out the detection probabilities."]],
      ["small-img", "assets/ImageRecognition-2.png"],
      ["p", ["This is the whole program, thanks to the multiple libraries Python has, our job has become quite simple. This is the output a camera would see in the new image:"]],
      ["small-img", "assets/ImageRecognition-3.png"],
      ["p", ["As a last funny test, let us look at a cat:"]],
      ["small-img", "assets/ImageRecognition-4.png"],
      ["small-img", "assets/ImageRecognition-5.png"],
      ["h1-nolink", ["Conclusions"]],
      ["p", ["This has opened my eyes a bit regarding the endless possibilities we have and how many have already been done in some form or the other by people and put into standalone project.Python has also been really simple to learn, so probably more projects to come in the future!"]],
    ],
  }

  ngOnInit(): void {
  }

  public downloadCV() {
    const pdfUrl = 'assets/CV.pdf'; // Replace with the correct path to your PDF file
    const fileName = 'CV.pdf'; // Specify the desired file name
    this._http.get(pdfUrl, { responseType: 'blob' }).subscribe((res: Blob) => {
      this._FileSaverService.save(res, fileName);
    });
  }

  public openDialog(dialogHtml: string) {
    this.dialog.open(DialogComponent, {
      panelClass: 'dialog-box',
      data: { element: this.devHtmls[dialogHtml] }
    });
  }
}
