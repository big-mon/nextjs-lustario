import { PostMeta } from "models/Post";
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
    <article className="mx-auto mb-16 bg-white relative flex items-stretch even:flex-row-reverse shadow-xl hover:shadow-2xl transition duration-500">
      <div className="relative w-45/100 py-6 px-8">
        <ArticleCategory>{data.category}</ArticleCategory>
        <ArticleTitle>{data.title}</ArticleTitle>
        <ArticleDescription>{data.description}</ArticleDescription>
        <ArticleDate date={data.date} />
      </div>
      <div className="relative w-55/100">
        <ArticleCoverImage src={data.coverImage} alt={data.title} />
      </div>
    </article>
  );
};

export default ArticleCard;
