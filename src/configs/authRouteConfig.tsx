import { Routes, Route } from "react-router-dom";

// Pages
import Signup from "../app/auth-pages/Signup";
import Login from "../app/auth-pages/Login";
import ForgetPassword from "../app/auth-pages/ForgetPassword";

const AuthRouteConfig = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
};

export default AuthRouteConfig;
