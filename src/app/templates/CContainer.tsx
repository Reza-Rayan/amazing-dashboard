import { Box } from "@mui/material";
import React from "react";

interface CContainerProps {
  children: React.ReactNode;
}

const CContainer = ({ children }: CContainerProps) => {
  return (
    <Box
      bgcolor={"#ffffff"}
      className="container mx-auto px-6 py-8 rounded-2xl shadow-lg"
    >
      {children}
    </Box>
  );
};

export default CContainer;
