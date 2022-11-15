import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import Template from "components/template/Index";
import SEO from "components/organisms/SEO";
import { getSortedPostsMeta } from "repositories/local/markdown/post";
import { PER_PAGE } from "constants/setting";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
};

const Page = ({ posts, total, current }: Props) => {
  return (
    <>
      <SEO />
      <Template posts={posts} total={total} current={current} mode={"page"} />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const posts = getSortedPostsMeta();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pages = range(1, Math.ceil(posts.length / PER_PAGE));

  return {
    paths: pages.map((p) => ({
      params: { page: p.toString() },
    })),
    fallback: false,
  };
};

/** ビルド時の静的生成 */
export const getStaticProps: GetStaticProps = ({ params }) => {
  const allPosts = getSortedPostsMeta();
  const page = Number(params?.page as string);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: { posts, total: allPosts.length, current: page },
  };
};

export default Page;
