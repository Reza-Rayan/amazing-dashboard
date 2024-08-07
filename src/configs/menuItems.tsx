import {
  ChatIcon,
  ClipboardIcon,
  HomeIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

export const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <HomeIcon width={20} />,
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
    icon: <ClipboardIcon width={20} />,
  },
  {
    id: 3,
    title: "Messages",
    link: "/chats",
    icon: <ChatIcon width={20} />,
  },
  {
    id: 4,
    title: "Profile",
    link: "/profile",
    icon: <PencilAltIcon width={20} />,
  },
];
