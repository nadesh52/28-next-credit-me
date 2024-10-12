"use client";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchBar: FC<SearchBarProps> = ({ ...props }) => {
  const [searchQuery, setSearchQuery] = useState<any>("");

  const router = useRouter();

  const handleChange = (event: any) => {

    if (event.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <input
      type="text"
      placeholder="Ex. John Doe"
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyUp={handleChange}
      value={searchQuery || ""}
      className="w-1/2 rounded-full bg-slate-200 px-6 py-2 shadow-inner"
      {...props}
    />
  );
};

export default SearchBar;
