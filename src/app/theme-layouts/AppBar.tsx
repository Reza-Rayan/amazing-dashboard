// Custom Components
import { LayoutProps } from "../../types/Layout.interface";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
// ------------------------------------------------------
const AppBar = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <aside>
        <Navbar />
      </aside>

      <div className="w-full">
        <Topbar />
        <main className="py-4">{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
