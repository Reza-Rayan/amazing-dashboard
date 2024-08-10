import { Box } from "@mui/material";
import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

interface CContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
}

const CContainer = ({ children, extraClasses }: CContainerProps) => {
  const { state } = useDarkMode();

  return (
    <Box
      bgcolor={state.darkMode ? "#1e293b" : "#ffffff"}
      className={`container mx-auto px-6 py-8 rounded-2xl shadow-lg ${extraClasses}`}
    >
      {children}
    </Box>
  );
};

export default CContainer;
