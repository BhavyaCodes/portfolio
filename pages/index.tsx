import Link from "next/link";
import Layout from "components/Layout";
import { Button } from "@material-ui/core";

import Header from "components/Header";
import Skills from "components/Skills";
import Projects from "components/Projects";

const IndexPage = () => {
  return (
    <Layout title="Bhavya's portfolio">
      <Header />
      <Skills />
      <Projects />
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </Layout>
  );
};

export default IndexPage;
