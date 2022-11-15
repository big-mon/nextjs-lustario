import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getPosts, getAllPaths } from "services/accessToTag";
import Template from "components/template";
import SEO from "components/common/seo";

type Props = {
  posts: PostMeta[];
  totalPage: number;
  current: number;
  tag: string;
};

/** ページ本体 */
const Page = ({ posts, totalPage, current, tag }: Props) => {
  return (
    <>
      <SEO tag={tag} />
      <Template
        posts={posts}
        total={totalPage}
        current={current}
        mode={`tag/${tag}`}
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
  const tag = (slug[0] ?? "").toLowerCase();
  const page = Number(slug[1]) ?? 1;

  // タグとページに該当する記事に絞り込み
  const posts = getPosts(tag, page);

  return {
    props: {
      posts: posts.posts,
      totalPage: posts.totalPage,
      current: page,
      tag: tag,
    },
  };
};

export default Page;
