import type { PostData } from "models/Post";
import ArticleHeader from "components/molecules/ArticleHeader";
import ArticleBody from "components/molecules/ArticleBody";
import ArticleTags from "components/molecules/ArticleTags";

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
