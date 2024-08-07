import Navbar from "./Navbar";
import { LayoutProps } from "../../types/Layout.interface";

const AppBar = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <aside>
        <Navbar />
      </aside>

      <div className="w-full">
        <div className="bg-white shadow-lg p-4"></div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
