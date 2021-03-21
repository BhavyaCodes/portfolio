import React from "react";
import { Typography, Container } from "@material-ui/core";
import Project from "./Project";
import dogmash from "assets/project/dogmash/dogmash.png";

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
  return (
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      <Project
        index={1}
        title="title"
        description="description here https://www.google.com"
        image={dogmash}
        stack={[
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
          { label: "materialui", logo: materialui },
          { label: "mongodb", logo: mongodb },
          { label: "nextjs", logo: nextjs, invert: true },
          { label: "react", logo: react },
          { label: "typescript", logo: typescript },
          { label: "bootstrap", logo: bootstrap },
        ]}
      />
      <Project
        index={2}
        title="title"
        description="description here https://www.google.com"
        stack={[
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
        ]}
      />
      <Project
        index={3}
        title="title"
        description="description here https://www.google.com"
        stack={[
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
        ]}
      />
      <Project
        index={4}
        title="title"
        description="description here https://www.google.com"
        stack={[
          { label: "nodejs", logo: nodejs },
          { label: "expressjs", logo: expressjs },
          { label: "aws-s3", logo: s3 },
        ]}
      />
    </Container>
  );
}

export default Projects;
