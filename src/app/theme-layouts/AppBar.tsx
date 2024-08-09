import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { LayoutProps } from "../../types/Layout.interface";

const AppBar = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <aside>
        <Navbar />
      </aside>

      <div className="w-full">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
