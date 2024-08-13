import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
// Custom Components
import CContainer from "../../templates/CContainer";
// Fake Data
import { projects } from "../../data/projects.json";
// Icons & Images
import { DocumentDuplicateIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

const ProjectPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const project = projects.find((project) => project.title === title);

  return (
    <CContainer>
      {/* Back to Projects page */}
      <Button
        startIcon={<ArrowLeftIcon width={16} />}
        color="secondary"
        variant="outlined"
        className="absolute top-4 left-4"
        onClick={() => navigate(`/projects`)}
      >
        Back
      </Button>
      {/* End Here */}
      <img
        src={project?.image}
        alt={project?.title}
        className="rounded-2xl mx-auto mb-6"
        width={600}
      />

      <Stack
        direction={"column"}
        spacing={3}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            variant="h4"
            component="h4"
            fontSize={28}
            fontWeight={700}
            display={"flex"}
            gap={1}
            textAlign={"center"}
          >
            <DocumentDuplicateIcon width={32} className="text-indigo-600" />
            {project?.title}
            <Chip label={project?.category} />
            {project?.completed && (
              <Chip
                label="Completed"
                sx={{ backgroundColor: "green", color: "white" }}
                icon={<CheckIcon width={20} color="#FFFFFF" />}
              />
            )}
          </Typography>
        </Box>
        <Typography variant="body1" fontSize={14}>
          {project?.description}
        </Typography>
      </Stack>
    </CContainer>
  );
};

export default ProjectPage;
