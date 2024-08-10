import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ item }: any) => {
  // Get URL path address
  const location = useLocation();
  return (
    <li key={item.id}>
      <Link
        to={`${item.link}`}
        className={`flex items-center text-lg gap-x-2 p-2 transition-all
        rounded-lg hover:bg-slate-700
        ${location.pathname === item.link ? "bg-slate-700" : ""}`}
      >
        <span> {item.icon}</span>
        <span> {item.title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
