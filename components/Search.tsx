"use client";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = () => {
  return (
    <div className=" w-full md:w-auto py-2 rounded-full transition shadow-sm hover:shadow-md cursor-pointer ">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden text-sm font-semibold md:block border-x px-6 flex-1 text-center">
          Any week
        </div>
        <div className=" text-sm text-gray-600  border-l pl-6 pr-2 flex flex-row  items-center gap-3">
          <div className="hidden sm:block">Add guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
