import { Route, Routes } from "react-router-dom";
// Pages
import Messenger from "../app/pages/messenger";
import Dashboard from "../app/pages/Dashboard";
import ProjectsPage from "../app/pages/Projects";
import ProjectPage from "../app/pages/project";
import Products from "../app/pages/products";
// Errors Pages
import NotFound from "../app/pages/error/NotFound";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:title" element={<ProjectPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
