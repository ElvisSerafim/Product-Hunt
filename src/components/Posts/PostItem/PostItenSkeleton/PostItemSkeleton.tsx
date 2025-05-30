const PostItemSkeleton = () => {
  return (
    <div className="w-full max-w-[97%] md:max-w-[800px] bg-white px-3 py-4 rounded-lg animate-pulse">
      <div className="flex flex-row items-center gap-4">
        <div className="w-[45px] h-[45px] rounded-lg bg-gray-200" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
          <div className="h-3 w-3/4 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default PostItemSkeleton;
