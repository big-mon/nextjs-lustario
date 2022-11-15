import type { GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getPosts } from "services/accessToTop";
import Template from "components/template/Index";
import SEO from "components/organisms/SEO";

type Props = {
  posts: PostMeta[];
  total: number;
};

/** ページ本体 */
const Page = ({ posts, total }: Props) => {
  return (
    <>
      <SEO />
      <Template posts={posts} total={total} current={1} mode={"page"} />
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
