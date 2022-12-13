import React from 'react';
import Blog from '../../components/post/Blog';
import {publishedPosts} from '../../data/posts/index.js'

const Posts = () => {
  return (
    <div>
      <Blog posts={publishedPosts} />
    </div>
  );
};

export default Posts;
