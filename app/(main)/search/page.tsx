"use client";
import TextTitle from "@/components/TextTitle";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchUserCard from "./components/SearchUserCard";
import SearchPostCard from "./components/SearchPostCard";

const SearchPage = () => {
  const [posts, setPosts] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const searchParams = useSearchParams();
  const newParam = searchParams.get("keyword");

  const fetchData = async () => {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: newParam }),
    });

    const data = await response.json();

    setPosts(data.posts);
    setUsers(data.users);
  };

  useEffect(() => {
    fetchData();
  }, [newParam]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">Search Results for "{newParam}"</h2>
      <div>
        {users ? (
          <div className="space-y-4">
            {users.map((user: any, idx: any) => (
              <SearchUserCard key={idx} user={user} />
            ))}
          </div>
        ) : null}
      </div>
      
      <div className="space-y-4">
        {posts.map((post: any, idx: any) => (
          <SearchPostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
