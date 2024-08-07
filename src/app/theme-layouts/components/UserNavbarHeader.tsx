import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// Fake Data For User
// TODO: replace with real data from API
const user = {
  data: {
    photoURL: "/assets/avatar.jpg",
    displayName: "Reza Rayan",
    email: "rezarayan78@gmail.com",
  },
};

const Root = styled("div")(({ theme }) => ({
  "& .username, & .email": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  "& .avatar": {
    background: theme.palette.background.default,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    width: "150px",
    height: "150px",
    "& > img": {
      borderRadius: "50%",
    },
  },
}));

const UserNavbarHeader = () => {
  return (
    <Root className="user relative flex flex-col items-center justify-center px-10 pt-6 pb-14 shadow-0">
      <div className="flex items-center justify-center mb-8">
        <Avatar
          className="avatar"
          src={user.data.photoURL}
          alt={user.data.displayName}
        >
          {user.data.displayName.charAt(0)}
        </Avatar>
      </div>
      <Typography className="text-xl font-semibold">
        {user.data.displayName}
      </Typography>
      <Typography className="email text-13 whitespace-nowrap font-medium text-gray-500">
        {user.data.email}
      </Typography>
    </Root>
  );
};

export default UserNavbarHeader;
