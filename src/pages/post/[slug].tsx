import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostData } from "models/Post";
import { getPost, getAllPostSlugs } from "services/accessToPost";
import Template from "components/template/post";
import SEO from "components/common/seo";

type Props = {
  postData: PostData;
};

/** ページ本体 */
const Page = ({ postData }: Props) => {
  return (
    <>
      <SEO meta={postData.meta} />
      <Template post={postData} />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths: paths.map((path) => ({
      params: { slug: path },
    })),
    fallback: false,
  };
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postData = await getPost(slug);
  return { props: { postData } };
};

export default Page;
