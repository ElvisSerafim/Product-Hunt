import PostsList from "@/components/Posts/PostsList/PostsList";
import Header from "@/components/layout/Header/Header";

export default function Posts() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <PostsList />
    </div>
  );
}
