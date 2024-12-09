import { Project } from "@/app/_types/types";

const SelectedView = ({
  project,
  isSliding,
}: {
  project: Project | undefined;
  isSliding: boolean;
}) => {
  if (!project) return;

  return (
    <div
      className={`selected-view center gap-5 shadow-box ${
        isSliding ? "slide-up" : ""
      }`}
    >
      <div className="main-project center">{project.title}</div>
    </div>
  );
};

export default SelectedView;
