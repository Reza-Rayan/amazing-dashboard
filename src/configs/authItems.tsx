import { HomeIcon, LoginIcon } from "@heroicons/react/outline";

export const authItems = [
  {
    id: 1,
    title: "Sign up",
    link: "/signup",
    icon: <HomeIcon width={20} />,
  },
  {
    id: 2,
    title: "Login",
    link: "/login",
    icon: <LoginIcon width={20} />,
  },
];
