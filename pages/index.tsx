import Layout from "components/Layout";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";

const IndexPage = () => {
  return (
    <Layout title="Bhavya's portfolio">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
