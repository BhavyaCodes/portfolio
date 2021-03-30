import { memo } from "react";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import Contact from "components/Contact";
import AllProjectsButton from "components/Projects/AllProjectsButton";

const logos = {
  react: "/assets/icons/react.png",
  bootstrap: "/assets/icons/bootstrap.svg",
  chartjs: "/assets/icons/chartjs.svg",
  expressjs: "/assets/icons/expressjs.png",
  git: "/assets/icons/git.svg",
  materialui: "/assets/icons/materialui.svg",
  mongodb: "/assets/icons/mongodb.svg",
  nextjs: "/assets/icons/nextjs.svg",
  nodejs: "/assets/icons/nodejs.svg",
  s3: "/assets/icons/s3.png",
  socketio: "/assets/icons/socketio.svg",
  typescript: "/assets/icons/typescript.svg",
  vercel: "/assets/icons/vercel.svg",
};

const projects = [
  {
    title: "Dogmash",
    description: [
      "**Upload**, **view** and **vote** for the cutest dogs, Dogmash project is inspired by Mark Zuckerberg's infamous website **facemash**",
      "This was my first big backend project made using **node.js** with **express.js** and styled using **Bootstrap**. Any user can upload their dog pics to the website without any registration which will only be made public once the admin logs in and approve the uploaded image. Yes this project has an **Admin panel** built into it to ensure images are appropriate.",
      "Uploaded images are stored on **amazon s3 bucket**, uploaded using **presigned URL** straight from browser to s3 bucket.",
      "This project also has **rate limiting** to avoid spam and uses **CSRF token** protection.",
    ],
    images: {
      main: {
        link: "/project/dogmash/dogmash.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [
      { label: "nodejs", logo: logos.nodejs },
      { label: "expressjs", logo: logos.expressjs },
      { label: "aws-s3", logo: logos.s3 },
      { label: "mongodb", logo: logos.mongodb },
      { label: "bootstrap", logo: logos.bootstrap },
      { label: "nextjs", logo: logos.nextjs, invert: true },
    ],
    links: {
      live: "https://dogmash.herokuapp.com/",
    },
  },
  {
    title: "covid-19 India tracker",
    description: [
      "covid-19 tracker for India made using **react**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state",
      "There is also a state-wise table of covid data which can be sorted by any column",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      webm: "/project/covid-19/covid-3.webm",
      mp4: "/project/covid-19/rick.mp4",
      main: {
        link: "/project/covid-19/covid.png",
        width: 1225,
        height: 571,
      },
    },
    stack: [
      { label: "chartjs", logo: logos.chartjs },
      { label: "reactjs", logo: logos.react },
      { label: "material-ui", logo: logos.materialui },
    ],
    links: {
      github: "https://github.com/Juggernaut9/covid-tracker-material-ui-react",
      live: "https://covid-tracker-beta.vercel.app/",
    },
  },
  {
    title: "Connect-4 online multiplayer",
    description: [
      "connect-4 board game that allows you to **play with anyone around the world** with no registration or downloads. You and your friend just need to open the link in the browser and you're ready to play 🙂",
      "The frontend is built using **react** and styled using **material-ui** and backend built using **node.js**.",
      "**socket.io** library is used for live transfer of data from client to server using websockets",
      "The app supports multiple games running parallel, means many pair of people can play on the same website at the same time without any interference",
      "If you wish to test this project, you must run the url on different browsers, or better check my **[video explaining how it works](https://www.linkedin.com/posts/bhavya-tomar-1967b6202_careerhack-github-hackathon-activity-6760854974944694272--QFx)** that I posted on **LinkedIn**",
    ],
    stack: [
      { label: "nodejs", logo: logos.nodejs },
      { label: "reactjs", logo: logos.react },
      { label: "socket.io", logo: logos.socketio },
      { label: "material-ui", logo: logos.materialui },
    ],
    links: {
      github: "https://github.com/Juggernaut9/connect-4-online-multiplayer",
      live: "https://konnect-4.vercel.app/",
    },
    images: {
      poster: "/project/connect-4/poster.png",
      mp4: "/project/connect-4/c4mp4.mp4",
      webm: "/project/connect-4/c4webm.webm",
    },
  },
  {
    title: "URL shortener",
    description: ["url shortener made with ts blah blah blah"],
    images: {
      main: {
        link: "/project/url-short/main.png",
        width: 963,
        height: 750,
      },
    },
    links: {
      github: "https://github.com",
      live: "https://short-url-three.vercel.app/",
    },
    stack: [
      { label: "Typescript", logo: logos.typescript },
      { label: "react", logo: logos.react },
      { label: "express", logo: logos.expressjs },
      { label: "material-ui", logo: logos.materialui },
      { label: "mongoDB", logo: logos.mongodb },
      { label: "nodejs", logo: logos.nodejs },
    ],
  },
];

const IndexPage = () => {
  return (
    <>
      <Header />
      <Skills />
      <ProjectsTitle text={"Projects I have worked on"} />
      <Projects projects={projects} />
      <AllProjectsButton />
      <Contact />
    </>
  );
};

export default memo(IndexPage);
