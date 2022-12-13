import { useRouter } from 'next/router';
import SinglePost from '../../components/post/SinglePost';
import { getPostBySlug } from '../../data/posts/index';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = getPostBySlug(slug);
  if (post) {
    return (
      <div>
        <SinglePost post={post} />
      </div>
    );
  } else {
    return <h1>No Post</h1>;
  }
};

export default Post;
