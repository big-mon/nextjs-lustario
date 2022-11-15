import { getPostDataBySlug } from "services/getSinglePost";
import { getSortedPostsMeta } from "repositories/local/markdown/post";

/** 記事詳細ページ向けの記事データを取得 */
export const getPost = async (slug: string) => {
  const postData = await getPostDataBySlug(slug);
  return { postData };
};

/** 記事のスラッグ一覧を取得 */
export const getAllPostSlugs = () => {
  // 全記事を取得、スラッグのみの配列に変換
  const metaList = getSortedPostsMeta();
  const slugs = metaList.map((meta) => meta.slug);
  return slugs;
};
