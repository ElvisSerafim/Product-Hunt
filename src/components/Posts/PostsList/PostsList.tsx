"use client";
import Tabs from "@/components/ui/Tabs/Tabs";
import { TODAY_POSTS_QUERY } from "@/graphql/clients/queries/queries";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useMemo, useState } from "react";
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

  const currentOrder = useMemo((): PostsOrder => {
    return activeTab === "popular" ? PostsOrder.Ranking : PostsOrder.Newest;
  }, [activeTab]);

  const { data, fetchMore, refetch, loading } = useQuery(TODAY_POSTS_QUERY, {
    variables: {
      first: POSTS_PER_PAGE,
      order: currentOrder,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    refetch({ first: POSTS_PER_PAGE, cursor: null, order: tab });
  };

  const getPosts = useCallback(() => {
    fetchMore({
      variables: {
        order: currentOrder,
        cursor: data?.posts?.pageInfo?.endCursor,
      },
    });
  }, [fetchMore, data?.posts?.pageInfo?.endCursor, currentOrder]);

  const getSkeletons = () => {
    return [...Array(POSTS_PER_PAGE)].map((_, idx) => (
      <PostItemSkeleton key={idx} />
    ));
  };

  useEffect(() => {
    if (inView) {
      getPosts();
    }
  }, [inView, getPosts]);

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
        {loading && !data ? (
          getSkeletons()
        ) : (
          <>
            {data?.posts?.edges?.map((item: PostEdge, index: number) => (
              <PostItem
                ref={
                  index === data.posts.edges.length - 5 ? ref : () => undefined
                }
                key={`${item.node.id}-${index}`}
                post={item.node}
              />
            ))}
            {loading && getSkeletons()}
          </>
        )}
      </div>
    </div>
  );
};

export default PostsList;
