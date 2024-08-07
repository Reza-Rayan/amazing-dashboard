import { ChatIcon, ClipboardIcon, HomeIcon } from "@heroicons/react/outline";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <HomeIcon width={22} />,
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
    icon: <ClipboardIcon width={22} />,
  },
  {
    id: 3,
    title: "Messages",
    link: "/chats",
    icon: <ChatIcon width={22} />,
  },
];

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
      </ul>
    </div>
  );
};

export default MenuList;
