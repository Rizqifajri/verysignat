import React from "react";
import NavigationBar from "./components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
