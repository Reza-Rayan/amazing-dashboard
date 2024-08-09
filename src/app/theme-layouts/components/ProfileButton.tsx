import { Avatar, Badge, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
// Images and Icons
import {
  BellIcon,
  ChevronDownIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const user = {
  data: {
    photoURL: "/assets/avatar.jpg",
    displayName: "Reza Rayan",
    email: "rezarayan78@gmail.com",
    role: "ADMIN",
  },
};

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-1">
      <Tooltip title="Notifications" className="cursor-pointer">
        <Badge variant="dot" color="primary">
          <BellIcon width={24} />
        </Badge>
      </Tooltip>
      <div className="cursor-pointer hover:bg-slate-100 p-2 rounded-lg transition-all">
        <button
          className="flex items-center justify-center gap-2"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            className="avatar"
            src={user.data.photoURL}
            alt={user.data.displayName}
          >
            {user.data.displayName.charAt(0)}
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm">{user.data.displayName}</span>
            <span className="text-[10px] text-green-600 font-medium">
              {user.data.role}
            </span>
          </div>
          <ChevronDownIcon width={16} />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "300px" }}
        >
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <Link to={"/profile"} className="flex items-center gap-1">
              <UserIcon width={16} />
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <Link to={"/profile"} className="flex items-center gap-1">
              <LogoutIcon width={16} />
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default ProfileButton;
