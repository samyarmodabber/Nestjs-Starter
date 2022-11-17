import Link from 'next/link';

const BlogItem = ({ post }) => {
  return (
    <div>
      <div>Blog Item</div>
      <h1>{post.Title} </h1>
      <date>{post.Date} </date>
      <p>{post.Excerpt}</p>
      <Link href={"posts/"+post.Slug}> Read Post ....</Link>
    </div>
  );
};

export default BlogItem;
