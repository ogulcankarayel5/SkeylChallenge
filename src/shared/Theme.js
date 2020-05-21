
import React from "react";
import { ThemeProvider } from "styled-components";

 export const theme = {
  colors: {
    primary:"#00C4EA",
    border: "blue",
    background: "#FFFFFF",
    formButtonColor:"#7041EE",
    
    
    
  }
 
 
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);