// pages/posts.tsx

import React from 'react'
import { GetStaticProps } from 'next'
import { PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard'

type PostsPageProps = {
  posts: PostProps[]
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const data = await res.json()

  const posts: PostProps[] = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    content: item.body,
  }))

  return {
    props: {
      posts,
    },
  }
}

export default PostsPage
