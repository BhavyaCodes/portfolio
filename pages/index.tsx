import Link from "next/link";
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
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

export default IndexPage;
