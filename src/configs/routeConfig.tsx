import { Route, Routes } from "react-router-dom";
// Pages
import ChatPage from "../app/pages/Chat";
import Dashboard from "../app/pages/Dashboard";
// Errors Pages
import NotFound from "../app/pages/Errors/NotFound";

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteConfig;
