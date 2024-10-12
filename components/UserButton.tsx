"use client";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";

const UserButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<any>(null);
  const iconRef = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={iconRef}
        onClick={() => setIsOpen(!isOpen)}
        className="size-10 cursor-pointer select-none rounded-full bg-indigo-200"
      ></div>
      {isOpen && (
        <div ref={menuRef} className="absolute rounded-lg shadow-lg right-0 top-11 bg-white p-2">
          <ul>
            <li
              onClick={() => console.log("settings")}
              className="flex cursor-pointer select-none items-center gap-8 rounded-md p-2 hover:bg-slate-200"
            >
              <Cog6ToothIcon className="size-8 rounded-full bg-slate-100 p-1" />
              <p className="text-lg">Settings</p>
            </li>
            <li className="flex cursor-pointer select-none items-center gap-8 rounded-md p-2 hover:bg-slate-200">
              <ArrowLeftStartOnRectangleIcon className="size-8 rounded-full bg-slate-100 p-1" />
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserButton;
