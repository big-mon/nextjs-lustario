import type { PostMeta } from "models/Post";
import ArticleCard from "components/post/card/layout";
import Pagination from "components/common/pagination";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
  mode: string;
};

/** 記事一覧ページ用テンプレート */
const Index = ({ posts, total, current, mode }: Props) => {
  return (
    <>
      <main className="max-w-4xl mx-auto py-0 md:py-6">
        {posts.map((post, i) => (
          <ArticleCard key={i} data={post} />
        ))}

        <Pagination total={total} current={current} mode={mode} />
      </main>
    </>
  );
};

export default Index;
