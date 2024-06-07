"use client";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu: FC = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer items-center gap-3 rounded-full border border-neutral-100 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] rounded-xl bg-white/80 text-sm shadow-md backdrop-blur-sm md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign up" onClick={registerModal.onOpen} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
