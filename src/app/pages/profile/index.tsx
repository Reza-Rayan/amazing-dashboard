import { Box, Typography } from "@mui/material";
// Custom Components
import CContainer from "../../templates/CContainer";
import ProfileForm from "./components/ProfileForm";
// Icons & Images
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { UserProps } from "../../../types/User.interface";
// ------------------------------------------------

// Fake Data For User
// TODO: replace with real data from API
const user: UserProps = {
  avatar: "/assets/avatar.jpg",
  firstName: "Reza",
  lastName: "Rayan",
  email: "rezarayan78@gmail.com",
  bio: "Front-End Developer",
  city: "Tehran",
  phone: "09392721608",
};

const ProfilePage = () => {
  return (
    <>
      <CContainer>
        <Typography
          variant="h1"
          component={"h5"}
          fontSize={26}
          fontWeight={700}
          fontStyle={"italic"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <AdjustmentsIcon width={30} className="text-indigo-700" />
          {user.firstName} {user.lastName}
        </Typography>
      </CContainer>

      <CContainer extraClasses="mt-6">
        <Typography variant="h2" fontSize={20} fontWeight={500}>
          Update your data
        </Typography>
        <Box marginTop={2}>
          <ProfileForm user={user} />
        </Box>
      </CContainer>
    </>
  );
};

export default ProfilePage;
