"use client";
import Link from "next/link";
import React from "react";

const CreateBtn = () => {
  return (
    <Link
      href="/create"
      className="w-full rounded-lg bg-indigo-600 p-2 tracking-wider text-white"
    >
      Create
    </Link>
  );
};

export default CreateBtn;
