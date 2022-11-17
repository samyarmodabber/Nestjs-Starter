import React from 'react';
import Blog from '../../components/post/Blog';
import allPosts from '../../data/posts.json';

export function getPublishedPost(posts) {
  return posts.filter((post) => !post.isDraft);
}
const Posts = () => {
  const publishedPosts = getPublishedPost(allPosts);
  return (
    <div>
      <h1>All Posts</h1>
      <Blog posts={publishedPosts} />
    </div>
  );
};

export default Posts;
