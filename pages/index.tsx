import { memo } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import Footer from "components/Footer";
import AllProjectsButton from "components/Projects/AllProjectsButton";

import logos from "lib/logos";

import { ProjectType } from "components/Projects/Projects";

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
      webm: "/project/covid-19/c4.webm",
      mp4: "/project/covid-19/c4.mp4",
      poster: "/project/covid-19/poster.png",
      vidHeight: 676,
      vidWidth: 963,
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
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  {
    title: "Get-It-Done",
    description: [
      "Goal tracker app made with my friend for a **hackthon that we won.**",
      "The challenge for the hackathon was to make a **CRUDy** web application for goal management",
      "The application is made using **react** and styled using **material-ui**",
      "Features of the app are **create, update and delete** goals. Add **labels** to goal, Start a **timer to track** the time spent for goal, **timer keeps running even when the window is closed!**",
      "**Filter** the goals by hashtag and/or text, **sort** goals by time spent per goal,",
      "view a **Bar graph** that displays the amount of time spent per goal",
      "Check this video made by my hackathon partner **Priya Aswani** **[explaining how it works](https://www.linkedin.com/posts/activity-6755554068011319296-VlpE)**",
    ],
    links: {
      github: "https://github.com/Juggernaut9/get-it-done",
      live: "https://get-it-done-git-master-juggernaut9.vercel.app",
    },
    stack: [logos.react, logos.chartjs, logos.materialui, logos.vercel],
    images: {
      main: {
        link: "/project/get-it-done/main.png",
        width: 1173,
        height: 847,
      },
    },
    special: {
      text: "Hackathon winner",
      link:
        "https://www.linkedin.com/posts/mintbean_mintbeanhackathon-mintbean-hackathon-activity-6757030650957619200-xUa8",
    },
  },
];

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Bhavya Tomar</title>
      </Head>
      <motion.div
        key="index"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <>
          <Header />
          <Skills />
          <ProjectsTitle text={"Featured Projects"} />
          <Projects projects={projects} />
          <AllProjectsButton />
          <Footer />
        </>
      </motion.div>
    </>
  );
};

export default memo(IndexPage);
