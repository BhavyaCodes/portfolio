import { useContext, useMemo } from "react";
import { Typography, Container } from "@material-ui/core";
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

export type ProjectType = {
  title: string;
  description: string[];
  images?: {
    webm?: string;
    mp4?: string;
    main: string;
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
          main: "/project/dogmash/dogmash.png",
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
        description: ["asdfsadf", "sdfgsdgdfg"],
        images: {
          webm: "/project/covid-19/covid-3.webm",
          mp4: "/project/covid-19/rick.mp4",
          main: "/project/covid-19/loading.png",
        },
        stack: [
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
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
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      {renderProjects()}
    </Container>
  );
}

export default Projects;
