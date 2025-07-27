import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) =>
        setPosts(data.map((p: any) => ({ title: p.title, content: p.body, userId: p.userId })))
      );
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;
