"use client";
import Tabs from "@/components/ui/Tabs/Tabs";
import { TODAY_POSTS_QUERY } from "@/graphql/clients/queries/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import { useInView } from "react-intersection-observer";
import { PostEdge, PostsOrder } from "@/__generated__/graphql";
import PostItemSkeleton from "../PostItem/PostItenSkeleton/PostItemSkeleton";

const tabs = ["popular", "newests"];

const POSTS_PER_PAGE = 20;

const PostsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("popular");
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const getCurrentOrder = (): PostsOrder => {
    return activeTab === "popular" ? PostsOrder.Ranking : PostsOrder.Newest;
  };

  const { data, fetchMore, refetch, loading } = useQuery(TODAY_POSTS_QUERY, {
    variables: {
      first: POSTS_PER_PAGE,
      order: getCurrentOrder(),
    },
  });

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    refetch({ first: POSTS_PER_PAGE, cursor: null, order: tab });
  };

  const getPosts = () => {
    fetchMore({
      variables: {
        order: getCurrentOrder(),
        cursor: data?.posts?.pageInfo?.endCursor,
      },
    });
  };

  useEffect(() => {
    if (inView) {
      getPosts();
    }
  }, [inView]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex-col flex items-center bg-white">
        <div className="w-full max-w-[1000px] ">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={handleChangeTab}
          />
        </div>
      </div>
      <div className="flex items-start md:items-center flex-col gap-4 w-full md:p-4 px-3 py-4">
        {loading &&
          !data &&
          [...Array(5)].map((_, idx) => <PostItemSkeleton key={idx} />)}
        {data?.posts?.edges?.map((item: PostEdge, index: number) => (
          <PostItem
            ref={index === data.posts.edges.length - 2 ? ref : () => undefined}
            key={`${item.node.id}-${index}`}
            post={item.node}
          />
        ))}
        {loading &&
          !data &&
          [...Array(5)].map((_, idx) => <PostItemSkeleton key={idx} />)}
      </div>
    </div>
  );
};

export default PostsList;
