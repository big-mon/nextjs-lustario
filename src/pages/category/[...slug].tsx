import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getPosts, getAllPaths } from "services/accessToCategory";
import Template from "components/template/Index";
import SEO from "components/common/SEO";

type Props = {
  posts: PostMeta[];
  totalPage: number;
  current: number;
  category: string;
};

/** ページ本体 */
const Page = ({ posts, totalPage, current, category }: Props) => {
  return (
    <>
      <SEO category={category} />
      <Template
        posts={posts}
        total={totalPage}
        current={current}
        mode={`category/${category}`}
      />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPaths();

  return {
    paths: paths.map((path) => ({
      params: { slug: path },
    })),
    fallback: false,
  };
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug?.length != 2 ? ["other", "1"] : params.slug;
  const category = (slug[0] ?? "").toLowerCase();
  const page = Number(slug[1]) ?? 1;

  // カテゴリーとページに該当する記事に絞り込み
  const posts = getPosts(category, page);

  return {
    props: {
      posts: posts.posts,
      totalPage: posts.totalPage,
      current: page,
      category: category,
    },
  };
};

export default Page;
