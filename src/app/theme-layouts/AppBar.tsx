import { useLocation } from "react-router-dom";
// Custom Components
import { LayoutProps } from "../../types/Layout.interface";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
// ------------------------------------------------------
const AppBar = ({ children }: LayoutProps) => {
  const location = useLocation();
  return (
    <div className="flex">
      <aside
        className={`${location.pathname === "/signup" ? "hidden" : "flex"}`}
      >
        <Navbar />
      </aside>

      <div className="w-full">
        <div
          className={`${
            location.pathname === "/signup" ? "hidden" : "flex"
          } w-full`}
        >
          <Topbar />
        </div>
        <main className="py-4">{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
