import type { PostMeta } from "models/Post";
import Image from "next/image";
import { convertInnerUrl } from "utils/url";
import ArticleCategory from "components/post/CategoryText";
import ArticleTitle from "components/molecules/ArticleTitle";
import ArticleDate from "components/molecules/ArticleDate";

type Props = {
  data: PostMeta;
};

const ArticleHeader = ({ data }: Props) => {
  return (
    <>
      <div className="mx-screen relative h-104 mb-16">
        {/* ヒーローイメージ */}
        <Image
          src={convertInnerUrl(data.coverImage)}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />

        <div className="absolute bottom-6 max-w-4xl w-full mx-auto p-6 left-1/2 transform -translate-x-2/4 rounded backdrop-filter backdrop-blur-sm bg-black bg-opacity-20 text-gray-200">
          <ArticleCategory>{data.category}</ArticleCategory>
          <ArticleTitle slug={data.slug} isLarge={true}>
            {data.title}
          </ArticleTitle>
          <ArticleDate date={data.date} />
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
