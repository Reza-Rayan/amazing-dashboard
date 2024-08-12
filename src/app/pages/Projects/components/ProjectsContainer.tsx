// Custom Components
import ProjectCard from "./ProjectCard";
// Mock Data
import { projects } from "../../../data/projects.json";
// Types
import { ProjectProps } from "../../../../types/Project.interface";

const ProjectsContainer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {projects.map((project: ProjectProps) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          completed={project.completed}
          category={project.category}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
