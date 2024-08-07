// Fake Datas
import { Link } from "react-router-dom";
import { resources } from "../data/resources.json";
import { Button } from "@mui/material";

const NavbarContent = () => {
  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        sasa
        {resources.map((item) => (
          <Button key={item.id}>
            <Link to={item.link}>
              <img src={item.image} alt="" />
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavbarContent;
