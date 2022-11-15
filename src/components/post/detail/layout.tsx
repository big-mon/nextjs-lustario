import type { PostData } from "models/Post";
import CustomLink from "components/common/CustomLink";
import ArticleHeader from "components/post/detail/ArticleHeader";
import ArticleBody from "components/post/detail/ArticleBody";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  const tags = data.meta.tags;

  return (
    <>
      <article itemProp="mainEntityOfPage">
        {/* ヘッダー */}
        <ArticleHeader data={data.meta} />

        {/* 本文 */}
        <ArticleBody content={data.content} />

        {/* タグ一覧 */}
        <div className="max-w-2xl mx-auto py-6 border-t border-gray-500">
          {tags.map((tag, i) => (
            <CustomLink
              key={i}
              href={`/tag/${tag.toLowerCase()}/1`}
              className="mr-4"
            >
              #{tag}
            </CustomLink>
          ))}
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
