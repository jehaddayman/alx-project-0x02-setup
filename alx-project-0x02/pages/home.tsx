import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <button onClick={() => setModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">Add Post</button>

      {modalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />}

      {posts.map((post, idx) => (
        <Card key={idx} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default HomePage;
