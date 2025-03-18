import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {

  public pLangs = [
    {
      title: 'Javascript/Typescript',
      text: 'In my roles as a fullstack developer and frontend developer, I utilized JavaScript and TypeScript extensively for web development. I worked with frameworks such as React, Angular, Vue and their extensions, implementing responsive front-end interfaces and collaborating with back-end developers (or designing the back-end) to integrate with RESTful APIs and microservices.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      title: 'Python',
      text: 'Working on machine learning projects, i have dealt with Python and various machine learning libraries. I designed and implemented AI models using libraries such as Spark and scikit-learn, integrating them into production pipelines to enhance the functionality of applications. Also used in projects integratign a Flask or Django back-ends, and web-scraping',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      title: 'C# / .NET',
      text: 'I worked with C# and the .NET ecosystem as a fullstack developer, developing full-stack web applications using technologies such as Angular, React, and .NET. I utilized Entity Framework Core for data access and SQL Server for database management.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
    {
      title: 'Golang',
      text: 'The scope of my Go work is at the present strictly personal/freelancing, and i have used it to develop small servers / templating, and reworking some of the previous architectures i have worked on in cases where i could see possible improvements',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    },
    {
      title: 'C++',
      text: 'The one i started with back in highschool and used in my first internship at Siemens, where i made a project with C++ for a control-access system developed with Visual Studio and Qt. Started my software engineering career working with C++ in the context of a highly responsive backend internal application for risk management at an investment bank. You were involved in reducing the application\'s load, improving algorithms, and optimizing performance.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
    {
      title: 'Bash/ Shell',
      text: 'I utilized Bash and Shell scripting for various purposes, including automation, system administration, and deployment tasks. These scripting languages allowed me to automate repetitive tasks and streamline your development processes.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    }, 
    {
      title: 'Flutter',
      text: 'I gained experience with Flutter, a cross-platform framework for mobile app development. Flutter uses Dart as its programming language and allowed me to build mobile apps for both iOS and Android platforms.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      title: 'Scala',
      text: 'Gained experience with Scala while working on the backend of the risk management application and data processing for machine learning models as Scala is a language often used in the context of scalable and concurrent applications or parallelizing data processing.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
    },
    {
      title: 'Solidity',
      text: 'I have experience with Solidity, a programming language used for writing smart contracts on the Ethereum blockchain. The projects were developed for the sake of hackatons or getting overall experience on the blockchain',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg',
    },
  ];
  public webServerTech = [
    {
      title: 'Angular + RxJs + NgRx',
      text: ' I have experience working with Angular and leveraging the power of RxJs for reactive programming and NgRx store pattenrs. Angular provides a comprehensive framework for building large-scale applications, and RxJs allows me to handle asynchronous operations and manage data streams efficiently.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      title: 'React + Redux',
      text: ' I am proficient in using React and Redux for building robust and scalable front-end applications. React\'s component-based architecture and virtual DOM make it efficient and intuitive to work with. Redux, as a state management library, provides a predictable way to manage application state, making it easier to maintain and debug complex applications.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Lowcode Platforms',
      text: 'I have worked with Wordpress, Webflow and Bubble to develop custom websites and web applications.Web builders provides a user-friendly content management system (CMS) that allows me to create dynamic and interactive websites with ease. I am familiar with customizing themes, implementing plugins, and extending Wordpress/Webflow functionality to meet specific client requirements.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    },
    {
      title: 'Node.js',
      text: 'I have experience with Node.js, a runtime environment for executing JavaScript code on the server-side. Node.js enables me to build scalable and efficient server-side applications. I have utilized the vast ecosystem of Node.js libraries and frameworks to develop RESTful APIs, perform server-side rendering, and build real-time applications using WebSockets.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
      title: 'Django/Flask',
      text: 'Django or Flask servers are used across work and personal projects, one of the main projects at my work is developed in flask and some of my bigger projects use Django servers made following Domain driver design patterns',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    },
    {
      title: 'ORMs',
      text: 'Across my projects, since i have been dealing with CQRS patterns for most commands i have used ORMs to deal with parity and help with migrations. Heavy queries are still done in raw SQL sometimes but ORMs like EF Core do have good perfomance depending on the query',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    }
  ];
  public archTech = [
    {
      title: 'Jenkins',
      text: 'I have used Jenkins for continuous integration and continuous deployment (CI/CD) in my development workflows. With Jenkins, I can automate the building, testing, and deployment processes, ensuring a streamlined and efficient delivery pipeline. I have configured Jenkins jobs, set up build pipelines, and integrated it with version control systems like Git to automate the software development lifecycle.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    },
    {
      title: 'Databases',
      text: ' I have experience working with various databases, native or using ORMs, including MongoDB, MySQL, Firebase, Redis, MariaDb, MySQL. I am proficient in designing database schemas, writing efficient queries, and performing database operations. Whether it\'s SQL-based databases like MySQL or NoSQL databases like MongoDB and Firebase\'s real-time database, I can work with them effectively to store, retrieve, and manipulate data in web applications.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    },
    {
      title: 'Message Queues',
      text: 'I am familiar with RabbitMQ and Apache Kafka which are used strictly right now on my workload-heavy work projects',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg',
    },
    {
      title: 'Nginx',
      text: 'Used as a gateway / reverse-proxy / rewrites / load-balancer in my work projects',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
    },
    {
      title: 'Monitoring Tools',
      text: 'Grafana, Loki, Prometheus is a usual stack seen in my work projects',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg'
    },
    {
      title: 'Docker + Kubernetes + Terraform',
      text: 'Kubernetes has become the standard orchestration platform for containers, and we combine it with docker for all of our recent projects',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    }
  ]
  public otherTech = [
    {
      title: 'Figma',
      text: ' I have extensive experience using Figma as a web design tool. Figma allows me to create visually appealing and interactive designs for websites and web applications. With Figma, I can collaborate with clients and other team members, iterate on designs, and easily hand off assets to developers for implementation.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      title: 'Machine Learning Libraries',
      text: 'I have utilized various machine learning libraries in Python, such as scikit-learn and Spark MLlib. These libraries offer a wide range of algorithms and tools for tasks like data preprocessing, feature selection, model training, and evaluation. I have hands-on experience in designing and implementing machine learning models to solve real-world problems.',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    },
  ]

  public lastItemIndex!: number;
  public webServerTechIndex!: number;
  public archTechIndex!: number;
  public otherTechIndex!: number;

  constructor() { }

  ngOnInit(): void {
    this.lastItemIndex = this.pLangs.length - 1;
    this.webServerTechIndex = this.webServerTech.length - 1;
    this.archTechIndex = this.archTech.length - 1;
    this.otherTechIndex = this.otherTech.length - 1;
  }

}
