"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src="/user.png"
      alt="avatar"
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};

export default Avatar;
