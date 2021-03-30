import { memo } from "react";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import Contact from "components/Contact";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Skills />
      <ProjectsTitle />
      <Projects />
      <Contact />
    </>
  );
};

export default memo(IndexPage);
