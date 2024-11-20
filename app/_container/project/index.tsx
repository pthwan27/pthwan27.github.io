import { project } from "@/app/_types/types";
import { useState } from "react";

const ProjectContainer = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [isSliding, setIsSliding] = useState(false);

  const projects: project[] = [
    { id: 1, title: "project1", component: "" },
    { id: 2, title: "project2", component: "" },
    { id: 3, title: "project3", component: "" },
    { id: 4, title: "project4", component: "" },
    { id: 5, title: "project5", component: "" },
  ];
  const handleProjectClick = (projectId: number) => {
    setIsSliding(true);

    if (projectId === selectedProject) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };
  return (
    <div className="project-container section flex">
      {selectedProject && (
        <div className={`selected-view center gap-20 shadow-box ${isSliding ? "slide-up" : ""}`}>
          <div className="main-project">
            {projects.find((project) => project.id === selectedProject)?.title}
          </div>
        </div>
      )}
      <div className="grid-view flex gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card center shadow-box"
            onClick={() => handleProjectClick(project.id)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
