// pages/home.tsx
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>
      {showModal && <PostModal />}
    </div>
  );
};

export default HomePage;
