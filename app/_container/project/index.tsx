import { project } from "@/app/_types/types";
import { useEffect, useState } from "react";

const ProjectContainer = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [showSelectedView, setShowSelectedView] = useState(false);

  const projects: project[] = [
    { id: 1, title: "project1", component: "" },
    { id: 2, title: "project2", component: "" },
    { id: 3, title: "project3", component: "" },
    { id: 4, title: "project4", component: "" },
    { id: 5, title: "project5", component: "" },
  ];
  const handleProjectClick = (projectId: number) => {
    if (projectId === selectedProject) {
      setIsSliding(false);
      setShowSelectedView(false);

      setTimeout(() => setSelectedProject(null), 500);
    } else {
      setSelectedProject(projectId);
      setShowSelectedView(false);

      setTimeout(() => {
        setShowSelectedView(true);
        setIsSliding(true);
      }, 500);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setIsSliding(true);
    }
  }, [selectedProject]);

  return (
    <div className="project-container section flex">
      {selectedProject && showSelectedView && (
        <div className={`selected-view center gap-20 shadow-box ${isSliding ? "slide-up" : ""}`}>
          <div className="main-project center">
            {selectedProject && projects.find((project) => project.id === selectedProject)?.title}
          </div>
        </div>
      )}
      <div className="grid-view non-scrollable flex gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card center shadow-box ${
              selectedProject === project.id ? "selected" : ""
            }`}
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
