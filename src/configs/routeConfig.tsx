import { Route, Routes } from "react-router-dom";
// Pages
import Messenger from "../app/pages/Messanger";
import Dashboard from "../app/pages/Dashboard";
import ProjectsPage from "../app/pages/Projects";
// Errors Pages
import NotFound from "../app/pages/Errors/NotFound";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
