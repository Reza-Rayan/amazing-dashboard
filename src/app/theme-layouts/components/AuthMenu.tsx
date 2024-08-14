import { LoginIcon } from "@heroicons/react/outline";

import { IconButton } from "@mui/material";
import { useState } from "react";
import { authItems } from "../../../configs/authItems";
// Custom Components
import MenuItem from "./MenuItem";
// Icons & Images
import { ChevronUpIcon } from "@heroicons/react/solid";

// ---------------------------------------------------------

const AuthMenu = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={openHandler}>
        <li
          className={`flex items-center justify-between text-lg  p-2 transition-all rounded-lg hover:bg-slate-700
            ${open ? "bg-slate-700" : ""}`}
        >
          <div className="flex items-center gap-x-2">
            <span>
              <LoginIcon width={20} />
            </span>
            <span> Authenticate</span>
          </div>
          <IconButton sx={{ color: "#FFFFFF" }}>
            <ChevronUpIcon
              width={20}
              className={`transition-all ${open && "rotate-180"}`}
            />
          </IconButton>
        </li>
      </button>
      {/* Sub Menu */}
      <ul
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-40" : "max-h-0"
        }`}
        style={{ maxHeight: open ? "10rem" : "0" }}
      >
        {authItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
      {/* End Here */}
    </>
  );
};

export default AuthMenu;
