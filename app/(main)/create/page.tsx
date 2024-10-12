"use client";
import React, { useState } from "react";
import TextInput from "@/components/TextInput";
import TextTitle from "@/components/TextTitle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState<any>({});

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const newData = {
      ...inputs,
      owner: session?.user.id,
    };

    await fetch("/api/posts/create", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newData),
    });

    router.push('/')
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="card">
      <div className="text-left">
        <TextTitle>Create New Post</TextTitle>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-sm">Item</h4>
            <TextInput
              type="text"
              name="item"
              placeholder="Dimoo Newyear Limited"
              value={inputs.item || ""}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <h4 className="text-sm">URL Ref.</h4>
            <TextInput
              type="text"
              name="url"
              placeholder="https://www.facebook.com"
              value={inputs.url || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="order-2 w-fit rounded-md bg-indigo-600 px-4 py-2 text-white"
            >
              Create
            </button>

            <button
              onClick={() => router.back()}
              className="order-1 w-fit rounded-md bg-indigo-50 px-3 py-2 text-sm text-indigo-300"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePage;
