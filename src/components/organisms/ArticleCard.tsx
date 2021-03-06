import type { PostMeta } from "models/Post";
import ArticleCategory from "components/molecules/ArticleCategory";
import ArticleTitle from "components/molecules/ArticleTitle";
import ArticleDescription from "components/molecules/ArticleDescription";
import ArticleDate from "components/molecules/ArticleDate";
import ArticleCoverImage from "components/molecules/ArticleCoverImage";

type Props = {
  data: PostMeta;
};

/** 記事カード */
const ArticleCard = ({ data }: Props) => {
  return (
    <article className="mx-auto mb-16 bg-white relative shadow-xl group hover:shadow-2xl transition duration-500 flex flex-nowrap flex-col md:flex-row md:even:flex-row-reverse content-between items-stretch">
      <div className="relative flex-grow-0 w-full md:w-45/100 pt-8 pb-6 px-8">
        <ArticleCategory>{data.category}</ArticleCategory>
        <ArticleTitle slug={data.slug} isLarge={false}>
          {data.title}
        </ArticleTitle>
        <ArticleDescription>{data.description}</ArticleDescription>
        <ArticleDate date={data.date} />
      </div>
      <div className="relative flex-grow-0 w-full md:w-55/100 h-56 md:h-72 overflow-hidden">
        <ArticleCoverImage
          src={data.coverImage}
          alt={data.title}
          slug={data.slug}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
