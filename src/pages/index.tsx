import type { GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getPosts } from "services/accessToTop";
import Template from "components/template";
import SEO from "components/common/seo";

type Props = {
  posts: PostMeta[];
  totalPage: number;
};

/** ページ本体 */
const Page = ({ posts, totalPage }: Props) => {
  return (
    <>
      <SEO />
      <Template posts={posts} total={totalPage} current={1} mode={"page"} />
    </>
  );
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = () => {
  return {
    props: getPosts(),
  };
};

export default Page;
