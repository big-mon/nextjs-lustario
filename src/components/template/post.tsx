import type { PostData } from "models/Post";
import ArticleDetail from "components/post/detail/layout";

type Props = {
  post: PostData;
};

/** 記事詳細ページ用テンプレート */
const Post = ({ post }: Props) => {
  return (
    <>
      <main className="max-w-4xl mx-auto relative">
        <ArticleDetail data={post} />
      </main>
    </>
  );
};

export default Post;
