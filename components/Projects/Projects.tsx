import React from "react";
import { Typography, Container } from "@material-ui/core";
import Project from "./Project";
import dogmash from "assets/project/dogmash/dogmash.png";

function Projects() {
  return (
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      <Project
        index={1}
        title="title"
        description="description here https://www.google.com"
        image={dogmash}
      />
      <Project
        index={2}
        title="title"
        description="description here https://www.google.com"
      />
      <Project
        index={3}
        title="title"
        description="description here https://www.google.com"
      />
      <Project
        index={4}
        title="title"
        description="description here https://www.google.com"
      />
    </Container>
  );
}

export default Projects;
