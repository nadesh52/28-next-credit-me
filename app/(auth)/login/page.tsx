"use client";
import TextInput from "@/components/TextInput";
import TextTitle from "@/components/TextTitle";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const loginPage = () => {
  const [input, setInput] = useState<any>({});

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: input?.email,
      password: input?.password,
    });

    if (res?.error) {
      return toast.error(res.error);
    } else {
      return router.push("/");
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInput((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="card">
      <TextTitle>Sign In</TextTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3>Email</h3>
          <TextInput
            type="text"
            name="email"
            value={input.email || ""}
            placeholder="Example@email.com"
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Password</h3>
          <TextInput
            type="password"
            name="password"
            value={input.password || ""}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>
            Don't have any account ?{" "}
            <Link href="/register" className="text-indigo-600">
              Sign Up
            </Link>
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 p-4 font-medium tracking-wider text-white"
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

export default loginPage;
