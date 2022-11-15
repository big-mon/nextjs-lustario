import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostMeta } from "models/Post";
import { getSortedPostsMeta } from "repositories/local/markdown/post";
import { PER_PAGE } from "constants/setting";
import Template from "components/template/Index";
import SEO from "components/organisms/SEO";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
  tag: string;
};

/** ページ本体 */
const Page = ({ posts, total, current, tag }: Props) => {
  return (
    <>
      <SEO tag={tag} />
      <Template
        posts={posts}
        total={total}
        current={current}
        mode={`tag/${tag}`}
      />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = async () => {
  const allMeta = getSortedPostsMeta();
  const tags = Array.from(new Set(allMeta.flatMap((meta) => meta.tags)));
  const paths = tags.flatMap((tag) => {
    // 指定タグのページ数を計算
    const postCount = allMeta.filter((meta) => meta.tags.includes(tag)).length;
    const pageCount = Math.ceil(postCount / PER_PAGE);

    let childParams = [];
    for (let i = 1; i <= pageCount; i++) {
      childParams.push([tag.toLowerCase(), i.toString()]);
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
  const tag = (slug[0] ?? "").toLowerCase();
  const page = Number(slug[1]) ?? 1;

  // タグとページに該当する記事に絞り込み
  const allPosts = getSortedPostsMeta().filter((meta) =>
    meta.tags.map((tag) => tag.toLowerCase()).includes(tag)
  );
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    props: {
      posts: posts,
      total: allPosts.length,
      current: page,
      tag: tag,
    },
  };
};

export default Page;
