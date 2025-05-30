import { Post } from "@/__generated__/graphql";
import { truncate } from "@/utils/functions";
import { Globe, Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface PostItemProps {
  post: Post;
  ref: (node?: Element | null | undefined) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, ref }) => {
  const [isVoted, setIsVoted] = useState(false);

  const [votesCount, setVotesCount] = useState(post.votesCount);
  const handleVote = () => {
    const newIsVoted = !isVoted;
    setIsVoted(newIsVoted);
    setVotesCount((prev) => {
      return !newIsVoted ? prev - 1 : prev + 1;
    });
  };

  return (
    <div
      ref={ref}
      className="w-full relative max-w-[97%] md:max-w-[800px] bg-white px-3 py-4 rounded-lg"
    >
      <div className="flex flex-row items-center gap-4">
        <div className="flex relative flex-col w-[45px] overflow-hidden rounded-lg h-[45px] bg-white">
          {post?.thumbnail?.url ? (
            <Image
              className="object-cover"
              fill
              sizes="60px"
              loading="lazy"
              src={post.thumbnail.url}
              alt="Post thumbnail"
            />
          ) : (
            <Globe className="w-[30px] h-[30px]" />
          )}
        </div>
        <div className="flex flex-col gap-1 items-start h-full justify-between">
          <p className="text-md font-medium max-w-[220px] md:max-w-full">
            {post.name || ""}
          </p>
          <p className="md:hidden text-[10px] text-gray-500">
            {truncate(post.tagline || "", 44)}
          </p>
          <p className="hidden md:block text-[10px] text-gray-500">
            {post.tagline || ""}
          </p>
        </div>
      </div>
      <div
        onClick={() => handleVote()}
        className={`absolute cursor-pointer transition-colors duration-300 ${
          isVoted ? "bg-amber-600 text-white" : "bg-white text-black"
        } border-[0.5px] border-gray-200 right-[-15] top-1/2 -translate-y-1/2 flex flex-col items-center px-[6px] py-[6px] w-[50px] md:p-2 rounded-xl md:rounded-2xl text-[12px] text-sm font-bold`}
      >
        <Play
          fill={isVoted ? "white" : "black"}
          className="rotate-270 w-4 h-4 border-0"
        />
        {votesCount}
      </div>
    </div>
  );
};

export default PostItem;
