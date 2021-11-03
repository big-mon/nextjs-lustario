import type { GetStaticProps } from "next";
import { getSortedPostsMeta } from "lib/posts";
import { PostMeta } from "models/Post";
import Template from "components/template/Index";

type Props = {
  posts: PostMeta[];
};

/** ページ本体 */
const Page = ({ posts }: Props) => {
  return <Template posts={posts} />;
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = () => {
  const allPosts = getSortedPostsMeta();

  return {
    props: { posts: allPosts },
  };
};

export default Page;
