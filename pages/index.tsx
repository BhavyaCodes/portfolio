import { memo } from "react";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default memo(IndexPage);
