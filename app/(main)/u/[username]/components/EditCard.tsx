"use client";
import React, { useState } from "react";
import TextInput from "@/components/TextInput";

const EditCard = ({ onClose }: any) => {
  const [inputs, setInputs] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs);
    onClose();
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleDiscard = () => {
    setInputs({});
    onClose();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <h1 className="text-xl font-medium">Edit Your Profile</h1>
        <div className="space-y-1">
          <h3>Username</h3>
          <TextInput
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <h4>Bio</h4>
          <TextInput
            name="bio"
            value={inputs.bio || ""}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-fit order-2 text-sm rounded-md bg-slate-900 px-3 py-2 text-white"
          >
            Apply Change
          </button>

          <button
            onClick={handleDiscard}
            className="w-fit order-1 text-sm rounded-md bg-slate-100 px-3 py-2 text-slate-500"
          >
            Discard
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditCard;
