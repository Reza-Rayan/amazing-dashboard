import { Button, Link, Typography } from "@mui/material";

const HeaderBanner = () => {
  return (
    <div className="projects_header_banner py-32 rounded-2xl container mx-auto flex flex-col items-center justify-center gap-4">
      <Typography
        variant="h1"
        fontWeight={700}
        color={"#ffffff"}
        sx={{
          background: "linear-gradient(90deg, #FF6B6B, #FFD93D)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Of Projects
      </Typography>
      <Typography variant="h2" fontSize={20} fontWeight={400} color={"#FFFFFF"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Typography>
      <div className="flex items-center gap-10 justify-center">
        <Button variant="contained" color="warning" component={Link}>
          Documnet
        </Button>
        <Button variant="outlined" color="primary">
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default HeaderBanner;
