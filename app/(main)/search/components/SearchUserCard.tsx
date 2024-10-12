"use client";
import Link from "next/link";
import React from "react";

const SearchUserCard = ({ user }: any) => {
  return (
    <div className="card flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-full bg-indigo-600"></div>
        <Link href={`/u/${user.username}`}>
          <p className="text-lg font-medium">{user.username}</p>
        </Link>
      </div>
      <Link
        href={`/u/${user.username}`}
        className="rounded-lg bg-indigo-600 p-2 font-medium text-white shadow-md hover:bg-indigo-500"
      >
        View Profile
      </Link>
    </div>
  );
};

export default SearchUserCard;
