import type { PostData } from "models/Post";
import ArticleHeader from "components/molecules/ArticleHeader";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  return (
    <>
      <ArticleHeader data={data.meta} />

      <div className="" dangerouslySetInnerHTML={{ __html: data.content }} />
    </>
  );
};

export default ArticleDetail;
