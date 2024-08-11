// Custom Components
import { Box, Divider, TextField, Typography } from "@mui/material";
import HeaderBanner from "./components/HeaderBanner";
import CContainer from "../../templates/CContainer";

const ProjectsPage = () => {
  return (
    <section className="space-y-5">
      <HeaderBanner />
      <CContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h3" fontSize={18} width={"200px"}>
              Search Project
            </Typography>
            <TextField
              type="search"
              placeholder="Search the project"
              sx={{ marginBottom: "20px" }}
              fullWidth
            />
          </Box>
        </div>
        <Divider />
      </CContainer>
    </section>
  );
};

export default ProjectsPage;
