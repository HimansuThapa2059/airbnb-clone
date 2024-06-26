"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      height={100}
      width={100}
      className="hidden cursor-pointer md:block"
    />
  );
};

export default Logo;
