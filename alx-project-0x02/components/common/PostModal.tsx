// components/common/PostModal.tsx
import React from 'react';

const PostModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>
        <form>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          />
          <textarea
            placeholder="Enter content"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
