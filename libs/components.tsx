"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="w-fit rounded-xl bg-indigo-600 px-4 py-2 text-white"
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export const RegisterButton = () => {
  return (
    <Link href={"/register"} className="font-medium text-indigo-600">
      Register
    </Link>
  );
};
