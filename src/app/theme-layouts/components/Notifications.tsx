import { BellIcon } from "@heroicons/react/outline";
import {
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Notifications = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      paddingX={2}
      paddingY={2}
      onClick={toggleDrawer(false)}
    >
      <Typography variant="h3" fontSize={30}>
        Notifications:
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            backgroundColor: "#e2e8f0",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h4" fontSize={18} fontWeight={600}>
            New Message From Reza
          </Typography>
          <Typography>blah blah blah ..........</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            backgroundColor: "#e2e8f0",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h4" fontSize={18} fontWeight={600}>
            New Message From Reza
          </Typography>
          <Typography>blah blah blah ..........</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            backgroundColor: "#e2e8f0",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h4" fontSize={18} fontWeight={600}>
            New Message From Reza
          </Typography>
          <Typography>blah blah blah ..........</Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Tooltip
        onClick={toggleDrawer(true)}
        title="Notifications"
        className="cursor-pointer"
      >
        <Badge variant="dot" color="primary">
          <BellIcon width={24} />
        </Badge>
      </Tooltip>
      {/* Drawer Sidebar */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Notifications;
