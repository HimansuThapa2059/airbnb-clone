"use client";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Provider;
