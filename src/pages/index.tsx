import type { GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getSortedPostsMeta } from "lib/posts";
import { PER_PAGE } from "lib/constants";
import Template from "components/template/Index";

type Props = {
  posts: PostMeta[];
  total: number;
};

/** ページ本体 */
const Page = ({ posts, total }: Props) => {
  return <Template posts={posts} total={total} current={1} mode={"page"} />;
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = () => {
  const allPosts = getSortedPostsMeta();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    props: { posts: posts, total: allPosts.length },
  };
};

export default Page;
