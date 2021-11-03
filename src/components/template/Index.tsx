import { PostMeta } from "models/Post";
import ArticleCard from "components/organisms/ArticleCard";

type Props = {
  posts: PostMeta[];
};

/** 記事一覧ページ用テンプレート */
const Index = ({ posts }: Props) => {
  return (
    <>
      <main className="max-w-4xl mx-auto">
        {posts.map((post) => (
          <>
            <ArticleCard key={post.slug} data={post} />
          </>
        ))}
      </main>
    </>
  );
};

export default Index;
