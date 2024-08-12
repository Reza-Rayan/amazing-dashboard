// Custom Components
import ProjectCard from "./ProjectCard";
// Types
import { ProjectProps } from "../../../../types/Project.interface";

const ProjectsContainer = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:min-h-[500px]">
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
