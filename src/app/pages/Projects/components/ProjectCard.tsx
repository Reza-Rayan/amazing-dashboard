import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
// Types
import { CheckCircleIcon } from "@heroicons/react/outline";
import { ProjectProps } from "../../../../types/Project.interface";
// Images & Icons

const ProjectCard = ({
  image,
  title,
  description,
  completed,
  category,
}: ProjectProps) => {
  const navigate = useNavigate();
  return (
    <Card
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        overflow: "auto",
        resize: "horizontal",
        transitionDuration: "0.3s",
        "--icon-size": "120px",
        ":hover": {
          boxShadow: "0 5px 10px #21212130",
          transition: "all 0.3s",
        },
      }}
    >
      <CardOverflow
        variant="solid"
        sx={{ backgroundColor: "#1d4ed8", position: "relative" }}
      >
        <span className="absolute top-5 left-5">
          {completed == true && (
            <CheckCircleIcon className="text-green-400 w-8 bg-white rounded-full" />
          )}
        </span>
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(50%)",
            borderRadius: "50%",
            width: "var(--icon-size)",
            boxShadow: "sm",
            bgcolor: "background.surface",
            position: "relative",
          }}
        >
          <div>
            <img src={image} alt={title} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
        {title}
      </Typography>
      <Chip label={category} />
      <CardContent sx={{ maxWidth: "40ch" }}>
        <p className="line-clamp-2">{description}</p>
      </CardContent>
      <CardActions orientation="vertical" buttonFlex={1}>
        <Button
          variant="outlined"
          sx={{ borderRadius: "8px", borderColor: "#1d4ed8" }}
          onClick={() => navigate(`${title}`)}
        >
          Continue
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
