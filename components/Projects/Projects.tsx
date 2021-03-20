import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import Project from "./Project";

function Projects() {
  return (
    <Container>
      <Typography variant="h2">Projects I have worked on</Typography>
      <Project index={1} />
      <Project index={2} />
      <Project index={3} />
      <Project index={4} />
    </Container>
  );
}

export default Projects;
