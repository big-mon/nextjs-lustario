import type { PostMeta } from "models/Post";
import ArticleCard from "components/organisms/ArticleCard";
import Pagination from "components/organisms/Pagination";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
};

/** 記事一覧ページ用テンプレート */
const Index = ({ posts, total, current }: Props) => {
  return (
    <>
      <main className="max-w-4xl mx-auto py-6">
        {posts.map((post) => (
          <>
            <ArticleCard key={post.slug} data={post} />
          </>
        ))}

        <Pagination total={total} current={current} />
      </main>
    </>
  );
};

export default Index;
