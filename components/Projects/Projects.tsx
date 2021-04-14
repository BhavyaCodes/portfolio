import { memo } from "react";
import Project from "./Project";

import { ProjectType } from "lib/projects";

function Projects({ projects }: { projects: ProjectType[] }) {
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

  return <section>{renderProjects()}</section>;
}

export default memo(Projects);
