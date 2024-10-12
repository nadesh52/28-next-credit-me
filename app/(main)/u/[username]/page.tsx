"use client";
import React, { useEffect, useState } from "react";
import TextTitle from "@/components/TextTitle";
import ThumbUpIcon from "@/components/ThumbUpIcon";
import ThumbDownIcon from "@/components/ThumbDownIcon";
import ListCard from "./components/ListCard";

const UserDetailPage = ({ params }: { params: { username: string } }) => {
  const [user, setUser] = useState<any>();

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${params.username}`);
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="space-y-4 pb-10">
      <div className="card flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-14 items-center justify-center rounded-md bg-indigo-200 text-center text-3xl font-medium text-indigo-400">
            <p>N</p>
          </div>
          <div>
            <p className="text-lg font-medium">{user?.user?.username}</p>
            <p className="text-slate-600">{user?.user?.bio}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <ThumbUpIcon />
            <p>TBA</p>
          </div>

          <div className="h-[40px] w-[1px] bg-slate-200"></div>

          <div className="flex items-center gap-4">
            <ThumbDownIcon />
            <p>TBA</p>
          </div>
        </div>
      </div>

      <div>
        <TextTitle>Latest List</TextTitle>

        <div className="space-y-4 divide-y">
          {user?.posts?.map((post: any, idx: any) => (
            <ListCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserDetailPage;
