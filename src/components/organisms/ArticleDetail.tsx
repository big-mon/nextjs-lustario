import type { PostData } from "models/Post";
import ArticleHeader from "components/molecules/ArticleHeader";
import ArticleBody from "components/molecules/ArticleBody";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  return (
    <>
      <ArticleHeader data={data.meta} />
      <ArticleBody content={data.content} />
    </>
  );
};

export default ArticleDetail;
