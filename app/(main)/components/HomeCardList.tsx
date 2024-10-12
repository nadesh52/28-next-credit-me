"use client";
import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import TextTitle from "@/components/TextTitle";

const HomeCardList = () => {
  const [posts, setPosts] = useState<any>([]);

  const fetchPost = async () => {
    const res = await fetch("/api/posts");
    const jsonData = await res.json();
    setPosts(jsonData);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="space-y-4">
      <TextTitle>Trends</TextTitle>
      {posts.map((post: any, idx: any) => (
        <HomeCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default HomeCardList;
