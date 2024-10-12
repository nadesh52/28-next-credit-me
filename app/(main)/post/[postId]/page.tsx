"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { postId: string } }) => {
  const [post, setPost] = useState<any>();

  const fetchPost = async () => {
    const response = await fetch(`/api/posts/${params.postId}`);
    const jsonData = await response.json();

    console.log(jsonData);
    setPost(jsonData);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section>
      {params.postId}
      <div className="space-y-1">
        <div className="card">
          <div>
            <p className="text-lg">{post?.item}</p>
          </div>
          <div
            //   href={post?.url}
            //   target="_blank"
            className="line-clamp-1 w-fit rounded-md bg-slate-100 px-2 text-slate-400"
          >
            {post?.url}
          </div>
        </div>
      </div>
      <div className="card">{post?.reviewer.username}</div>
    </section>
  );
};

export default page;
