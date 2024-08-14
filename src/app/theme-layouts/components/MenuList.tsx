import { menuItems } from "../../../configs/menuItems";
// Custom Components
import MenuItem from "./MenuItem";
import ShopMenu from "./ShopMenu";
import AuthMenu from "./AuthMenu";
// -----------------------------------------------------

const MenuList = () => {
  return (
    <div>
      <h2
        className="font-medium text-xl text-indigo-400 text-left w-full
       justify-start flex"
      >
        Dashboards
      </h2>
      <ul className="flex flex-col mt-2 gap-2">
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
        <ShopMenu />
        <AuthMenu />
      </ul>
    </div>
  );
};

export default MenuList;
