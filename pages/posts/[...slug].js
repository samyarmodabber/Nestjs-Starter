import { useRouter } from 'next/router';
import SinglePost from '../../components/post/SinglePost';
import AllPosts from '../../data/posts.json';

export function getPostBySlug(Slug) {
  return AllPosts.find((item) => item.Slug == Slug);
}
const Post = () => {
  const router = useRouter();
  const { slug = [] } = router.query;
  const post = getPostBySlug(slug[0]);
  return (
    <div>
      <SinglePost post={post} />
    </div>
  );
};

export default Post;
