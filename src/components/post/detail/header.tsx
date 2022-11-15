import type { PostMeta } from "models/Post";
import Image from "next/image";
import { convertInnerUrl } from "utils/url";
import ArticleCategory from "components/post/categoryText";
import ArticleDate from "components/post/dateText";
import CustomLink from "components/common/customLink";

type Props = {
  data: PostMeta;
};

const Header = ({ data }: Props) => {
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

          {/* タイトル */}
          <h1 className="text-4xl my-4" itemProp="headline name">
            <CustomLink href={`/post/${data.slug}`}>{data.title}</CustomLink>
          </h1>

          <ArticleDate date={data.date} />
        </div>
      </div>
    </>
  );
};

export default Header;
