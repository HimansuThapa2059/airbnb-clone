"use client";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = () => {
  return (
    <div className="w-full cursor-pointer rounded-full py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex items-center justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="hidden flex-1 border-x px-6 text-center text-sm font-semibold md:block">
          Any week
        </div>
        <div className="flex flex-row items-center gap-3 border-l pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add guests</div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
