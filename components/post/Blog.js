import BlogItem from './BlogItem';

const Blog = ({posts}) => {
    
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
