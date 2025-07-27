import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
