import { PostMeta } from "models/Post";

type Props = {
  posts: PostMeta[];
};

/** 記事一覧ページ用テンプレート */
const Index = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </>
  );
};

export default Index;
