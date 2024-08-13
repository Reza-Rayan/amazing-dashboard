import { Route, Routes } from "react-router-dom";
// Pages
import Dashboard from "../app/pages/Dashboard";
import ProjectsPage from "../app/pages/Projects";
import ProjectPage from "../app/pages/project";
import Products from "../app/pages/products";
import ProductPage from "../app/pages/product";
import CreateProduct from "../app/pages/products/CreateProduct";
import ProfilePage from "../app/pages/profile";
// Auth
import Signup from "../app/auth-pages/Signup";
import Login from "../app/auth-pages/Login";
// Errors Pages
import NotFound from "../app/pages/error/NotFound";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:title" element={<ProjectPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/:title" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
