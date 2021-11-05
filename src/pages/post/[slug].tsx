import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostData } from "models/Post";
import { getAllPostSlugs, getPostDataBySlug } from "lib/posts";
import Template from "components/template/Post";

type Props = {
  postData: PostData;
};

/** ページ本体 */
const Page = ({ postData }: Props) => {
  return <Template post={postData} />;
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
  const postData = await getPostDataBySlug(params?.slug as string);
  return { props: { postData } };
};

export default Page;
