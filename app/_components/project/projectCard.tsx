import { Project } from "@/app/_types/types";
import Image from "next/image";
import { ForwardedRef } from "react";
const tempImage = "https://picsum.photos/id/13/200/150";

const ProjectCard = ({
  project,
  isSelected,
  onClick,
  ref,
}: {
  project: Project;
  isSelected: boolean;
  onClick: (id: number) => void;
  ref: ForwardedRef<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={`project-card center shadow-box ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(project.id)}
    >
      <Image src={tempImage} fill alt="project intro Image"></Image>
      {project.title}
    </div>
  );
};

export default ProjectCard;
