import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import Template from "components/template";
import SEO from "components/common/seo";
import { getPosts, getAllPaths } from "services/accessToPage";

type Props = {
  posts: PostMeta[];
  totalPage: number;
  current: number;
};

const Page = ({ posts, totalPage, current }: Props) => {
  return (
    <>
      <SEO />
      <Template
        posts={posts}
        total={totalPage}
        current={current}
        mode={"page"}
      />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const pages = getAllPaths();

  return {
    paths: pages.map((p) => ({
      params: { page: p.toString() },
    })),
    fallback: false,
  };
};

/** ビルド時の静的生成 */
export const getStaticProps: GetStaticProps = ({ params }) => {
  const page = Number(params?.page as string);
  const posts = getPosts(page);

  return {
    props: {
      posts,
      totalPage: posts.totalPage,
      current: page,
    },
  };
};

export default Page;
