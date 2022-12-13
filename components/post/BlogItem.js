import Link from 'next/link';

const BlogItem = ({ post }) => {
  return (
    <div>
      <div>Blog Item</div>
      <h1>{post.Title} </h1>
      <time dateTime={post.Date}>{post.Date}</time>
      <p>{post.Excerpt}</p>
      <Link href={'posts/' + post.Slug}> Read Post ....</Link>
    </div>
  );
};

export default BlogItem;
