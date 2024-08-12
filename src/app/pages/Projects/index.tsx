// Custom Components
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
// Custom Components
import CContainer from "../../templates/CContainer";
import HeaderBanner from "./components/HeaderBanner";
import ProjectsContainer from "./components/ProjectsContainer";
// ------------------------------------------------------------------------

const ProjectsPage = () => {
  return (
    <section className="space-y-5">
      <HeaderBanner />
      <CContainer>
        <Stack direction={"row"}>
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <Typography variant="h2" fontSize={20} fontWeight={700}>
              Search Projects:
            </Typography>
            <TextField
              variant="outlined"
              color="primary"
              placeholder="type project name ..."
            />
          </Box>
        </Stack>
        <Divider sx={{ marginY: "20px" }} />
        <ProjectsContainer />
      </CContainer>
    </section>
  );
};

export default ProjectsPage;
