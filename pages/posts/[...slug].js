import { useRouter } from 'next/router';
import SinglePost from '../../components/post/SinglePost';
import {getPostBySlug} from '../../data/posts/index';


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
