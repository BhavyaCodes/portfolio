import { motion } from "framer-motion";
import { Toolbar } from "@material-ui/core";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import BackHomeButton from "components/Projects/BackHomeButton";

import { ProjectType } from "components/Projects/Projects";
import logos from "lib/logos";

const projects: ProjectType[] = [
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
      logos.nodejs,
      logos.expressjs,
      logos.s3,
      logos.mongodb,
      logos.bootstrap,
      logos.ejs,
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
    stack: [logos.chartjs, logos.react, logos.materialui],
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
    stack: [logos.nodejs, logos.react, logos.socketio, logos.materialui],
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
        width: 964,
        height: 751,
      },
    },
    links: {
      github: "https://github.com",
      live: "https://short-url-three.vercel.app/",
    },
    stack: [
      logos.typescript,
      logos.react,
      logos.expressjs,
      logos.materialui,
      logos.mongodb,
      logos.nodejs,
    ],
  },
  {
    title: "The Meal Hub",
    description: ["asdfasdf ", "sdfsd fs"],
    links: {
      live: "https://recipe-material-ui-juggernaut9.vercel.app/",
      github: "https://github.com/Juggernaut9/recipe-material-ui",
    },
    stack: [logos.react, logos.materialui],
    images: {
      main: {
        link: "/project/the-meal-hub/main.png",
        height: 841,
        width: 1195,
      },
    },
  },
  {
    special: {
      text: "hacktoberfest - 55 pull requests",
      link:
        "https://github.com/Juggernaut9/pokemon/pulls?q=is%3Apr+is%3Aclosed",
    },
    title: "Pokemon",
    description: ["pokemon"],
    links: {
      live: "https://pokemon-hacktoberfest.vercel.app/",
      github: "https://github.com/Juggernaut9/pokemon",
    },
    stack: [logos.github, logos.git, logos.react, logos.bootstrap],
    images: {
      main: {
        link: "/project/pokemon/main.png",
        height: 936,
        width: 1020,
      },
    },
  },
];

function projectsPage() {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, x: +1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: +1000 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <Toolbar />
      <ProjectsTitle text="Projects I Have Worked On" />
      <Projects projects={projects} />
      <BackHomeButton />
    </motion.div>
  );
}

export default projectsPage;
