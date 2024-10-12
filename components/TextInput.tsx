import React from "react";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <input
      className="w-full rounded-md bg-white border border-slate-300 select-all p-2 outline-none focus-visible:ring-1 focus-visible:ring-slate-900"
      {...props}
    />
  );
};

export default TextInput;
