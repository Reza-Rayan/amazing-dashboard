import { Button, Tooltip, Zoom } from "@mui/material";
// Fake Datas
import { resources } from "../../data/resources.json";
// Custom Components
import UserNavbarHeader from "./UserNavbarHeader";
import MenuList from "./MenuList";

const NavbarContent = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        {resources.map((item) => (
          <Tooltip title={item.title} TransitionComponent={Zoom} key={item.id}>
            <Button sx={{ borderRadius: "6px" }} className="p-2">
              <a href={`${item.link}`} target="_blank">
                <img src={item.image} alt={item.title} width={30} height={30} />
              </a>
            </Button>
          </Tooltip>
        ))}
      </div>
      {/* User Data */}
      <UserNavbarHeader />
      {/* End Here */}

      {/* Navigation List */}
      <div>
        <MenuList />
      </div>
    </>
  );
};

export default NavbarContent;
