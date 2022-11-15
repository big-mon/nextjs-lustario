import type { PostData } from "models/Post";
import CustomLink from "components/common/CustomLink";
import Header from "components/post/detail/header";
import Body from "components/post/detail/body";

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
        <Header data={data.meta} />

        {/* 本文 */}
        <Body content={data.content} />

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
