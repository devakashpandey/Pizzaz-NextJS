"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobNav from "./MobNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <Navbar openNav={navHandler} />
      <MobNav showNav={showNav} closeNav={navHandler} />
    </>
  );
};

export default ResponsiveNav;
