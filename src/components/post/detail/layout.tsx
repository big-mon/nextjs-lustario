import type { PostData } from "models/Post";
import ArticleHeader from "components/post/detail/ArticleHeader";
import ArticleBody from "components/post/detail/ArticleBody";
import ArticleTags from "components/post/detail/ArticleTags";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  return (
    <>
      <article itemProp="mainEntityOfPage">
        <ArticleHeader data={data.meta} />
        <ArticleBody content={data.content} />
        <ArticleTags tags={data.meta.tags} />
      </article>
    </>
  );
};

export default ArticleDetail;
