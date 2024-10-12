"use client";

import React from "react";
import { LoginButton, RegisterButton } from "@/libs/components";
import { useSession } from "next-auth/react";
import UserButton from "./UserButton";
import CreateButton from "@/components/CreateButton";

const ButtonGroup = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center">
      {!session?.user ? (
        <div className="mx-4 flex items-center gap-2">
          <RegisterButton />
          or
          <LoginButton />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <CreateButton />
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
