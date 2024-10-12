"use client";
import TextInput from "@/components/TextInput";
import TextTitle from "@/components/TextTitle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const registerPage = () => {
  const [inputs, setInputs] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState<any>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const inputError = {
      email: "",
      password: "",
    };

    if (!inputs.email && !inputs.password) {
      setErrorMsg({
        ...inputError,
        email: "Email not Valid",
        password: "Password should not be empty q",
      });
      return;
    }

    if (!inputs.email || !inputs.email.match(isValidEmail)) {
      setErrorMsg({ ...inputError, email: "Email not Valid" });
      return;
    }

    if (inputs.password !== inputs.conPassword) {
      setErrorMsg({ ...inputError, password: "password mismatch" });
      return;
    }

    if (!inputs.password) {
      setErrorMsg({
        ...inputError,
        password: "password should not be empty",
      });
      return;
    }

    setErrorMsg({});

    const res = await fetch("/api/register", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(inputs),
    });

    if (res.status === 201) {
      toast.success("Register success");
      router.push("/login");
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="card space-y-4">
        <TextTitle>Create New Account</TextTitle>

        <table className="w-full border-separate border-spacing-y-8 select-none">
          <tbody>
            <tr>
              <td className="w-2/6 align-top">
                <h3 className="font-medium text-indigo-900">Email</h3>
              </td>
              <td>
                <TextInput
                  type="text"
                  name="email"
                  value={inputs?.email || ""}
                  placeholder="example@email.com"
                  onChange={handleChange}
                />
                <p className="error-text">{errorMsg.email}</p>
              </td>
            </tr>

            <tr>
              <td className="w-2/6 align-top">
                <h3 className="font-medium text-indigo-900">Password</h3>
              </td>
              <td className="space-y-2">
                <TextInput
                  type="password"
                  name="password"
                  value={inputs?.password || ""}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                <TextInput
                  type="password"
                  name="conPassword"
                  value={inputs?.conPassword || ""}
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
                <p className="error-text">{errorMsg.password}</p>
              </td>
            </tr>

            <tr>
              <td className="w-2/6 align-top">
                <h3 className="font-medium text-indigo-900">Username</h3>
                <p className="text-sm text-slate-400">An email by default</p>
              </td>
              <td>
                <TextInput
                  type="text"
                  name="username"
                  value={inputs?.username || ""}
                  placeholder="John456"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="w-2/6 align-top">
                <h3 className="font-medium text-indigo-900">Bio</h3>
                <p className="text-sm text-slate-400">Optional</p>
              </td>
              <td>
                <textarea
                  name="bio"
                  value={inputs?.bio || ""}
                  className="h-24 w-full select-all resize-none rounded-md border border-slate-300 bg-white p-2 outline-none focus-visible:ring-1 focus-visible:ring-slate-900"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 p-4 font-medium tracking-wider text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default registerPage;
