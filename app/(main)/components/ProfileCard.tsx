"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import CreateButton from "@/components/CreateButton";

const ProfileCard = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="size-14 rounded-full bg-indigo-200"></div>
        <div className="flex flex-col">
          <p className="text-sm text-slate-600">Hello,</p>
          <p className="text-2xl font-medium">
            {session?.user ? (
              <Link href={`/u/${session?.user.username}`}>
                {session?.user.username}
              </Link>
            ) : (
              <>Guest</>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
