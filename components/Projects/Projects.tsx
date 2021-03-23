import { useContext, useMemo } from "react";
import { Typography } from "@material-ui/core";
import Project from "./Project";

import { DarkModeContext } from "context/themeContext";

// import materialui from "public/assets/icons/materialui.svg";
import mongodb from "public/assets/icons/mongodb.svg";
// import nextjs from "public/assets/icons/nextjs.svg";
import nodejs from "public/assets/icons/nodejs.svg";
// import react from "public/assets/icons/react.png";
// import typescript from "public/assets/icons/typescript.svg";
import expressjs from "public/assets/icons/expressjs.png";
import bootstrap from "public/assets/icons/bootstrap.svg";
import s3 from "public/assets/icons/s3.png";
import chartjs from "public/assets/icons/chartjs.svg";

export type ProjectType = {
  title: string;
  description: string[];
  images?: {
    webm?: string;
    mp4?: string;
    main: { link: string; height: number; width: number };
  };
  links: { github?: string; live: string };
  stack?: { label: string; logo: string; invert?: boolean }[];
};
interface Projects extends ProjectType {}

function Projects() {
  const darkMode = useContext(DarkModeContext);
  const projects: ProjectType[] = useMemo(
    () => [
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
            width: 1000,
            height: 470,
          },
        },
        stack: [
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
          { label: "mongodb", logo: mongodb },
          { label: "bootstrap", logo: bootstrap },
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
            width: 1000,
            height: 466,
          },
          // main: "/project/covid-19/covid.png",
        },
        stack: [
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
          { label: "chartjs", logo: chartjs },
        ],
        links: {
          github:
            "https://github.com/Juggernaut9/covid-tracker-material-ui-react",
          live: "https://covid-tracker-beta.vercel.app/",
        },
      },
    ],
    [darkMode]
  );

  const renderProjects = () => {
    return projects.map(
      ({ title, description, images, stack, links }, index) => {
        return (
          <Project
            key={index}
            index={index + 1}
            title={title}
            description={description}
            images={images}
            stack={stack}
            links={links}
          />
        );
      }
    );
  };
  return (
    <>
      <Typography variant="h2">Projects I have worked on</Typography>
      {renderProjects()}
    </>
  );
}

export default Projects;
