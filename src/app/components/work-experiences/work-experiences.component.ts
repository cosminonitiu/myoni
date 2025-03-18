import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss']
})
export class WorkExperiencesComponent implements OnInit {

  public workplaces = [
    {
      title: 'Software Engineer at FluxSolve - Independent Contractor',
      period: 'Period: March 2023 - Present', 
      list: ['Create web applications using Web Tech Stacks, and various web builders (Webflow, Bubble, Wordpress), resulting in tailored solutions for applications ranging from 10 to 10000 users.',
        'Defined and implemented a scalable .NET / EF Core Clean Architecture utilizing MediatR, Event Buses, and a monolith approach, adhering to Domain Driven Design principles that integrates seamlessly with an Angular frontend through 1:1 parity Data Transfer Objects.',
        'Leveraged responsive design principles and user experience best practices to optimize websites and web applications for all devices, enhancing accessibility and user satisfaction by up to 40%.',
        'Partner with clients to gather requirements, translating them into domain driven solutions which improved code security and logic (reducing codebase size by 10 - 20%).',
        'Oversee project timelines and budgets, ensuring timely delivery within the agreed scope and resource allocation, streamlining the development process by up to 2-3 days per sprint.',
      ],
    },
    {
      title: 'Fullstack Developer at ValeoIt',
      period: 'Period: Aug 2022 - Present',
      list: ['Led the development of Angular frontend architecture, leveraging sophisticated software patterns including component factories, singletons, stores, and services, enabling up to 30% faster client deliverables and was promoted after 3 months due to strong performance and proactive approach.',
        'Spearheaded the data access layers creation using Entity Framework Core and SQL Server, utilizing LINQ for efficient querying and data filtering and Aggregates, resulting in a 20% reduction in database calls and reduced DTOs scope.',
        'Collaborated with a team of 3 people to lead the development of an Machine Learning Model, using PySpark for Data collection and cleaning, then using Pandas + ScikitLearn to explore the Model options and optimize the training and parameters, resulting in a model that resolved business cases with a 90% accuracy.',
        'Implemented DevOps tools like RabbitMQ Message Broker, Vault, AWS with Terraform deployment services for scalability and monitoring solutions, and Azure DevOps for continuous integration and deployment (CI/CD) + Automated Testing to enhance security and reduce code bulk by 10%.',
        'Contributed to the company codebase with 3 projects that use other tech stacks (React, Next, Astro - Django, Go) to use as base for business needs that requires a different approach regarding the technologies used',
        'Participated in Agile teams,, sprint planning, and retrospective meetings to enhance team collaboration, supervised code reviews and provided mentorship to junior developers, making their onboard process as short as 2-3 weeks on the projects.'],
    },
    {
      title: 'Mthree Collaboration with Morgan Stanley',
      period: 'Period: June 2021 - Aug 2022',
      list: ['Responsible for scaling and supporting a large-scale trading and risk management application used by shareholders.',
        'Documented and maintained software functionality by examining and refactoring the codebase, and adding new features using modern APIs, reducing legacy code.',
        'Reduced application load by improving algorithms and deploying individual services on dedicated hosts, achieving a 10% load reduction and a 5-second improvement in trade delays.',
        'Planned timelines, conducted risk assessments, and established regular feedback loops with clients, resulting in hundreds of requests completed in a short time frame after onboarding'],
    },
    {
      title: 'OSF Academy Internship (Node.js Project)',
      period: 'Period: May 2021',
      list: ['Completed an intensive internship program at OSF Digital, where I created an e-commerce platform utilizing provided endpoints for data inputs, gaining practical experience in JavaScript, HTML, and CSS basics.'],
    },
    {
      title: 'Financial Consultant at OVB Allfinanz',
      period: 'Period: October 2020 - May 2021',
      list: [
        'Identifying sales opportunities for all the products and services of OVB Romania, oriented towards individuals',
        'Offering a consultancy to the client, concerning their main objectives and needs and advising for a specific financial tool',
        'Increasing the client portofolio and the volume of business together with a direct sales team',
        'Collecting information and documentation related to the products offered',
        'Maintaining a close connection with the clients throughout the whole collaboration',
        'Participation in different social projects and activities',
        'Participation in professional and personal development courses'],
    },
    {
      title: 'Siemens Internship (C++ Focused)',
      period: 'Period: March 2019 - May 2019',
      list: [
        'Collaborated with a task-force team to define and implement a control access system, utilizing Microsoft Visual Studio and the C++ language',
        'Developed a virtual interface using the Qt framework, emphasizing Object-Oriented Programming principles for enhanced functionality',
        'Seamless integration between the main program and a MySQL database, facilitating efficient data management and access control'
      ],
    },
    {
      title: 'University: Universitatea Transilvania Brasov, Aerospace Engineering',
      period: 'Period: October 2016 - June 2020',
      list: [
        'Bachelor\'s Thesis - Software and hardware design of a rescue drone, which included creating and using simulating the networking of the drone using network tools (OPNET) and programming the active components of the drone and control module (NodeMCU) using Arduino'
      ],
    },
  ];
  public lastItemIndex!: number;
  constructor() { }

  ngOnInit(): void {
    this.lastItemIndex = this.workplaces.length - 1;
  }

}
