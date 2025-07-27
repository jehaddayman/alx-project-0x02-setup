// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const dummyPosts: PostProps[] = [
  { id: 1, title: 'First Post', content: 'This is the first post content' },
  { id: 2, title: 'Second Post', content: 'Another interesting post content' },
];

const PostsPage = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {dummyPosts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
