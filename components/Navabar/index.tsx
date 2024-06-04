"use client";
import React, { FC, useState } from "react";
import Logo from "./Logo";
import Search from "../Search";
import UserMenu from "./UserMenu";

const Navbar: FC = () => {
  return (
    <nav className="fixed w-full shadow-sm  bg-white z-10 border-b py-4">
      <div className="main-container flex items-center justify-between">
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
