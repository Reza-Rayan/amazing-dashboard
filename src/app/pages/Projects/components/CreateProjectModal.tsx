import { useState } from "react";
import { Box, Modal, ModalProps, Typography } from "@mui/material";
// Custom Components
import ProjectForm from "./ProjectForm";
import { ProjectProps } from "../../../../types/Project.interface";
import { projects as AllProjects } from "../../../data/projects.json";

// Define types for the component props
interface CreateProjectModalProps extends Omit<ModalProps, "children"> {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  open,
  handleClose,
}) => {
  const [projects, setProjects] = useState<ProjectProps[]>(AllProjects);

  const handleAddProject = (newProject: ProjectProps) => {
    newProject.id = projects.length + 1;
    setProjects([...projects, newProject]);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} borderRadius={6}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h3"
          fontSize={24}
          fontWeight={700}
        >
          Create New Project
        </Typography>
        <ProjectForm onSubmit={handleAddProject} />
      </Box>
    </Modal>
  );
};

export default CreateProjectModal;
