import ThumbDownIcon from "@/components/ThumbDownIcon";
import Link from "next/link";
import React from "react";

const ListCard = ({ post }: any) => {
  const formatDate = (date: any) => {
    return date.split("T")[0];
  };

  return (
    <div className="card space-y-2 divide-y">
      <div className="flex justify-between py-2">
        <div className="flex items-center gap-4">
          <ThumbDownIcon />
          <div>
            <div>
              <p className="py-2 text-lg font-medium">{post?.item}</p>
            </div>
            <Link
              href={post?.url}
              target="_blank"
              className="line-clamp-1 w-fit rounded-md bg-slate-100 px-2 text-slate-400"
            >
              {post?.url}
            </Link>
          </div>
        </div>
        <p className="text-sm text-slate-400">{formatDate(post?.createdAt)}</p>
      </div>
    </div>
  );
};

export default ListCard;
