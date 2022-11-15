import type { PostMeta } from "models/Post";
import ArticleCategory from "components/post/categoryText";
import ArticleDate from "components/post/dateText";
import CoverImage from "components/post/card/coverImage";
import CustomLink from "components/common/customLink";

type Props = {
  data: PostMeta;
};

/** 記事カード */
const ArticleCard = ({ data }: Props) => {
  return (
    <article className="mx-auto mb-16 bg-white relative shadow-xl group hover:shadow-2xl transition duration-500 flex flex-nowrap flex-col md:flex-row md:even:flex-row-reverse content-between items-stretch">
      <div className="relative flex-grow-0 w-full md:w-45/100 pt-8 pb-6 px-8">
        <ArticleCategory>{data.category}</ArticleCategory>

        {/* タイトル */}
        <h1 className="text-xl font-semibold my-4" itemProp="headline name">
          <CustomLink href={`/post/${data.slug}`}>{data.title}</CustomLink>
        </h1>

        {/* 概要 */}
        <p
          className="text-base mb-6 h-24 hidden md:block overflow-hidden"
          itemProp="description"
        >
          {data.description}
        </p>

        <ArticleDate date={data.date} />
      </div>
      <div className="relative flex-grow-0 w-full md:w-55/100 h-56 md:h-72 overflow-hidden">
        {/* サムネイル */}
        <CoverImage src={data.coverImage} alt={data.title} slug={data.slug} />
      </div>
    </article>
  );
};

export default ArticleCard;
