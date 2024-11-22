import { useEffect, useState } from "react";

const useProjectSelection = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [showSelectedView, setShowSelectedView] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIsSliding(true);
    }
  }, [selectedProject]);

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

  return { selectedProject, isSliding, showSelectedView, handleProjectClick };
};

export default useProjectSelection;
