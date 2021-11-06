import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getSortedPostsMeta } from "lib/posts";
import { PER_PAGE } from "lib/constants";
import Template from "components/template/Index";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
  category: string;
};

/** ページ本体 */
const Page = ({ posts, total, current, category }: Props) => {
  return (
    <Template
      posts={posts}
      total={total}
      current={current}
      mode={`category/${category}`}
    />
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = async () => {
  const allMeta = getSortedPostsMeta();
  const categories = Array.from(new Set(allMeta.map((meta) => meta.category)));
  const paths = categories.flatMap((cat) => {
    // 指定カテゴリーのページ数を計算
    const postCount = allMeta.filter((meta) => meta.category == cat).length;
    const pageCount = Math.ceil(postCount / PER_PAGE);

    let childParams = [];
    for (let i = 1; i <= pageCount; i++) {
      childParams.push([cat.toLowerCase(), i.toString()]);
    }
    return childParams;
  });

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
  const allPosts = getSortedPostsMeta().filter(
    (meta) => meta.category.toLowerCase() == category
  );
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: {
      posts: posts,
      total: allPosts.length,
      current: page,
      category: category,
    },
  };
};

export default Page;
