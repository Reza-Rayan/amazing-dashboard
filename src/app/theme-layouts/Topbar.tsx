import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import ProfileButton from "./components/ProfileButton";

// Icons
import { HomeIcon } from "@heroicons/react/solid";

const Topbar = () => {
  return (
    <div className="shadow-lg py-1 px-10 flex justify-between w-full">
      <div className="flex items-center gap-2">
        <Tooltip title="See Your Friends">
          <Link to={"/"}>
            <HomeIcon width={24} />
          </Link>
        </Tooltip>
      </div>
      <div>
        <ProfileButton />
      </div>
    </div>
  );
};

export default Topbar;
