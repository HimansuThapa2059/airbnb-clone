"use client";

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

import React from "react";

const Heading: React.FC<HeadingProps> = ({ title, subTitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-bold text-neutral-500">{subTitle}</div>
    </div>
  );
};

export default Heading;
