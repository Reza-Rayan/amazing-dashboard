import { useState } from "react";
// Custom Components
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
// Custom Components
import CContainer from "../../templates/CContainer";
import HeaderBanner from "./components/HeaderBanner";
import ProjectsContainer from "./components/ProjectsContainer";
// ------------------------------------------------------------------------
import { projects } from "../../data/projects.json";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
        </Stack>
        <Divider sx={{ marginY: "20px" }} />
        {filteredProjects.length > 0 ? (
          <ProjectsContainer projects={filteredProjects} />
        ) : (
          <Box
            minHeight={200}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ opacity: "0.8" }}
          >
            <Typography variant="h6" fontSize={32} color="textSecondary">
              No projects found.
            </Typography>
          </Box>
        )}
      </CContainer>
    </section>
  );
};

export default ProjectsPage;
