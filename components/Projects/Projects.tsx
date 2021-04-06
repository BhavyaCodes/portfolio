import { memo } from "react";
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
  special?: { text: string; link: string };
};
// interface Projects extends ProjectType {}

function Projects({ projects }: { projects: ProjectType[] }) {
  // useEffect(() => {
  //   console.log("Projects.tsx");
  // });

  const renderProjects = () => {
    return projects.map(
      ({ title, description, images, stack, links, special }, index) => {
        return (
          <Project
            key={index}
            index={index + 1}
            title={title}
            description={description}
            images={images}
            stack={stack}
            links={links}
            special={special}
          />
        );
      }
    );
  };

  return <>{renderProjects()}</>;
}

export default memo(Projects);
