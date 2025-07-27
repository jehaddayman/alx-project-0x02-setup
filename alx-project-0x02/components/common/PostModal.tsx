import { useState } from "react";

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal = ({ onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <input
          className="w-full border mb-2 p-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border mb-2 p-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-1 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-1 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
