import { ShoppingBagIcon, PlusIcon } from "@heroicons/react/outline";

export const shopItems = [
  {
    id: 1,
    title: "products",
    link: "/products",
    icon: <ShoppingBagIcon width={20} />,
  },
  {
    id: 2,
    title: "Add Product",
    link: "/products/create",
    icon: <PlusIcon width={20} />,
  },
];
