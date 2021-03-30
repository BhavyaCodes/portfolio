import { memo, useEffect } from "react";
import Link from "next/link";
import { Button, Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Project from "./Project";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
  };
  links: { github?: string; live: string };
  stack: StackType[];
};
interface Projects extends ProjectType {}

function Projects({ projects }: { projects: ProjectType[] }) {
  useEffect(() => {
    console.log("Projects.tsx");
  });

  const renderProjects = () => {
    return projects.map(
      ({ title, description, images, stack, links }, index) => {
        return (
          <Project
            key={index}
            index={index + 1}
            title={title}
            description={description}
            images={images}
            stack={stack}
            links={links}
          />
        );
      }
    );
  };

  return (
    <>
      {renderProjects()}
      <Container style={{ textAlign: "center" }}>
        <Link href="/projects" passHref>
          <Button
            style={{ marginTop: "5rem" }}
            component="a"
            color="secondary"
            size="large"
            variant="outlined"
            endIcon={<ArrowForwardIosIcon />}
          >
            View All Projects
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default memo(Projects);
