import { Box } from "@chakra-ui/core";
import React from "react";
import Navbar from "./Navbar";

interface WraperProps {}

const Wraper: React.FC<WraperProps> = ({ children }) => {
  return (
    <Box width="850px" mx="auto">
      {children}
    </Box>
  );
};

export default Wraper;
