import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../app/pages/Home";
import ChatPage from "../app/pages/Chat";
// Errors Pages
import NotFound from "../app/pages/Errors/NotFound";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat/:id" element={<ChatPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;
