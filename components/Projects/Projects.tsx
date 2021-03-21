import { useContext, useMemo } from "react";
import { Typography, Container } from "@material-ui/core";
import Project from "./Project";

import { DarkModeContext } from "context/themeContext";

import materialui from "assets/icons/materialui.svg";
import mongodb from "assets/icons/mongodb.svg";
import nextjs from "assets/icons/nextjs.svg";
import nodejs from "assets/icons/nodejs.svg";
import react from "assets/icons/react.png";
import typescript from "assets/icons/typescript.svg";
import expressjs from "assets/icons/expressjs.png";
import bootstrap from "assets/icons/bootstrap.svg";
import s3 from "assets/icons/s3.png";

function Projects() {
  const darkMode = useContext(DarkModeContext);
  return (
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      <Project
        index={1}
        title="Dogmash"
        description={["asdadadgergerg", "para 2"]}
        image="/project/dogmash/dogmash.png"
        stack={useMemo(() => {
          return [
            { label: "nodejs", logo: nodejs },
            { label: "expressjs", logo: expressjs },
            { label: "aws-s3", logo: s3 },
            { label: "materialui", logo: materialui },
            { label: "mongodb", logo: mongodb },
            { label: "nextjs", logo: nextjs, invert: darkMode },
            { label: "react", logo: react },
            { label: "typescript", logo: typescript },
            { label: "bootstrap", logo: bootstrap },
          ];
        }, [darkMode])}
      />
      <Project
        index={2}
        title="Get It Done - Goal tracker App"
        image="/project/get-it-done/get-it-done.png"
        description={["asdadadgergerg", "para 2"]}
        stack={useMemo(() => {
          return [
            { label: "react.js", logo: react },
            { label: "material-ui", logo: materialui },
            { label: "aws-s3", logo: s3 },
          ];
        }, [])}
      />
      <Project
        index={3}
        title="title"
        description={[
          "**description here** [Handlebars templates](http://handlebarsjs.com/)",
          "asdfsdf",
        ]}
        stack={useMemo(() => {
          return [
            { label: "nodejs", logo: nodejs },
            { label: "expressjs", logo: expressjs },
            { label: "aws-s3", logo: s3 },
          ];
        }, [])}
      />
      <Project
        index={4}
        title="asasdf"
        description={["description here https://www.google.com", "asdfsdf"]}
        stack={useMemo(() => {
          return [
            { label: "nodejs", logo: nodejs },
            { label: "expressjs", logo: expressjs },
            { label: "aws-s3", logo: s3 },
          ];
        }, [])}
      />
    </Container>
  );
}

export default Projects;
