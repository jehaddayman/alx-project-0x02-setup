// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p>Here you can view all posts.</p>
      </div>
    </>
  );
};

export default PostsPage;
