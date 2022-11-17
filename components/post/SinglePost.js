import Image from 'next/image';

const SinglePost = ({ post }) => {
  return (
    <div>
      <Image
        alt={post.Title}
        src={post.Image_URL}
        width={120}
        height={120}
        className=""
      />
      <h1>{post.Title} </h1>
      <date>{post.Date} </date>
      <p>{post.Content}</p>
      <div>Categories:</div>
      {post.Categories.map((cat) => (
        <h3 key={cat}>{cat}</h3>
      ))}
      <div>Hashtags:</div>
      {post.Hashtags.map((hash) => (
        <h3 key={hash}>{hash}</h3>
      ))}
    </div>
  );
};

export default SinglePost;
