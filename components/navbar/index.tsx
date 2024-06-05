"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Search from "../Search";
import UserMenu from "./UserMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-10 w-full border-b bg-white py-4 shadow-sm">
      <div className="main-container flex items-center justify-between">
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
