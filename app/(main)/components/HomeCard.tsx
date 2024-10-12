import Link from "next/link";
import React from "react";

const HomeCard = ({ post }: any) => {
  const formatDate = (date: any) => {
    return date.split("T")[0];
  };
  return (
    <div className="card space-y-2 divide-y">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-md bg-red-200 text-center text-3xl font-medium text-red-400">
          <p>N</p>
        </div>
        <div className="flex flex-col">
          <Link
            href={`/u/${post?.owner?.username}`}
            className="text-xl font-medium"
          >
            {post?.owner?.username}
          </Link>
          <p className="text-sm text-slate-400">
            {formatDate(post?.createdAt)}
          </p>
        </div>
      </div>

      <div>
        <div className="my-2">{post?.item}</div>
        <Link
          href={post?.url}
          target="_blank"
          className="line-clamp-1 w-fit rounded-md bg-slate-100 px-2 text-slate-400"
        >
          {post?.url}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
