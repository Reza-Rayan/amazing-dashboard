// Fake Datas
import { Button } from "@mui/material";
import { resources } from "../data/resources.json";

const NavbarContent = () => {
  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        {resources.map((item) => (
          <Button key={item.id} sx={{ borderRadius: "100%" }} className="p-2">
            <a>
              <img src={item.image} alt="" width={50} height={50} />
            </a>
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavbarContent;
