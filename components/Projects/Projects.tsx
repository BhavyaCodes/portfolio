import { useContext, useMemo } from "react";
import { Typography, Container } from "@material-ui/core";
import Project from "./Project";

import { DarkModeContext } from "context/themeContext";

import materialui from "public/assets/icons/materialui.svg";
import mongodb from "public/assets/icons/mongodb.svg";
import nextjs from "public/assets/icons/nextjs.svg";
import nodejs from "public/assets/icons/nodejs.svg";
import react from "public/assets/icons/react.png";
import typescript from "public/assets/icons/typescript.svg";
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
  stack?: { label: string; logo: string; invert?: boolean }[];
};
interface Projects extends ProjectType {}

function Projects() {
  const darkMode = useContext(DarkModeContext);
  const projects: ProjectType[] = useMemo(
    () => [
      {
        title: "Dogmash",
        description: ["asd", "sdfsd"],
        images: {
          main: "/project/dogmash/dogmash.png",
        },
        stack: [
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
          { label: "materialui", logo: materialui },
          { label: "mongodb", logo: mongodb },
          { label: "nextjs", logo: nextjs, invert: darkMode },
          { label: "react", logo: react },
          { label: "typescript", logo: typescript },
          { label: "bootstrap", logo: bootstrap },
        ],
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
      },
    ],
    [darkMode]
  );

  const renderProjects = () => {
    return projects.map(({ title, description, images, stack }, index) => {
      return (
        <Project
          key={index}
          index={index + 1}
          title={title}
          description={description}
          images={images}
          stack={stack}
        />
      );
    });
  };
  return (
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      {renderProjects()}
    </Container>
  );
}

export default Projects;
