import React from 'react';
import urielImage from '../../assets/uriel-soberanes.jpg';
import './tech.css';
import FeatureTech from '../../components/featureTech/FeatureTech';

const technologies = [
  {
    title: 'Visual Studio/ Code',
    text: 'Used for almost all projects, praise the extension lords',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    title: 'React + Redux',
    text: 'Front-End Framework extremely useful in my Full-Stack projects',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    title: 'Git',
    text: 'Your all-in-one package for version control',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    title: 'Wordpress',
    text: 'Used back when i first created this personal page',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  },
  {
    title: 'Node.js + Modules',
    text: 'Started using it in my recent Full-Stack Projects, easy to use and the best module selection',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    title: 'Jenkins',
    text: 'Started using it in Morgan Stanley',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  },
  {
    title: 'Bootstrap',
    text: 'An instant classic in my day-to-day Front-End',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    title: 'TailwindCSS',
    text: 'Learnt more recently than Bootstrap, but an amazing way to upgrade my style',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
  {
    title: 'jQuery',
    text: 'Made life a lot easier in my simpler projects',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg',
  },
  {
    title: 'MongoDb',
    text: 'Extremely useful in my Node.Js developed apps',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    title: 'Qt',
    text: 'My first GUI development tool, which I used during my internship at Siemens',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg',
  },
];

const Tech = () => (
  <div className="gpt3__possibility section__padding row" id="possibility">
    <div className="gpt3__possibility-image col-lg-5 col-md-12">
      <img src={urielImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content col-lg-7 col-md-12">
      <h1 className="gradient__text">What have I worked with?</h1>
      {technologies.map((item, index) => (
        <div key={index}>
          <FeatureTech title={item.title} text={item.text} imgsrc={item.src} key={item.title + index} />
        </div>
      ))}
    </div>
  </div>
);

export default Tech;
