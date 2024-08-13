import { useLocation } from "react-router-dom";
// Custom Components
import { LayoutProps } from "../../types/Layout.interface";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
// ------------------------------------------------------
const AppBar = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideAppbar =
    location.pathname === "/signup" || location.pathname === "/login";
  console.log(hideAppbar);
  return (
    <div className="flex">
      <aside className={`${hideAppbar ? "hidden" : "flex"}`}>
        <Navbar />
      </aside>

      <div className="w-full">
        <div className={`${hideAppbar ? "hidden" : "flex"} w-full`}>
          <Topbar />
        </div>
        <main className={`${hideAppbar ? "py-0" : "py-4"}`}>{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
