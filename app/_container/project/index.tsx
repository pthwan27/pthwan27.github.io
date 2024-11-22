import ProjectCard from "@/app/_components/project/projectCard";
import SelectedView from "@/app/_components/project/selectedView";
import useProjectSelection from "@/app/_hooks/useProjectSelection";
import { Project } from "@/app/_types/types";
import { useEffect, useRef } from "react";

const ProjectContainer = () => {
  const projects: Project[] = [
    { id: 1, title: "project1", component: "" },
    { id: 2, title: "project2", component: "" },
    { id: 3, title: "project3", component: "" },
    { id: 4, title: "project4", component: "" },
    { id: 5, title: "project5", component: "" },
  ];

  const { selectedProject, isSliding, showSelectedView, handleProjectClick } =
    useProjectSelection();

  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectCardRefs.current = projects.map(() => null);
  });

  useEffect(() => {
    console.log(projectCardRefs);
  });

  return (
    <div className="project-container section flex">
      {selectedProject && showSelectedView && (
        <SelectedView
          project={projects.find((p) => p.id === selectedProject)}
          isSliding={isSliding}
        />
      )}
      <div className="grid-view non-scrollable flex gap-20">
        {projects.map((project, idx) => (
          <ProjectCard
            project={project}
            key={project.id}
            isSelected={selectedProject === project.id}
            onClick={() => handleProjectClick(project.id)}
            ref={(el: HTMLDivElement | null) => (projectCardRefs.current[idx] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
