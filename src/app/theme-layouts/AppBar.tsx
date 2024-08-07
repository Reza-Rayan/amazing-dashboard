import Navbar from "./Navbar";
import { LayoutProps } from "../../types/Layout.interface";

const AppBar = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <aside>
        <Navbar />
      </aside>

      <main>{children}</main>
    </div>
  );
};

export default AppBar;
