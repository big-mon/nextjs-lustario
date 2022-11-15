import { getSortedPostsMeta } from "./post";

/** 記事のスラッグ一覧を取得 */
export const getAllPostSlugs = () => {
  // 全記事を取得、スラッグのみの配列に変換
  const metaList = getSortedPostsMeta();
  const slugs = metaList.map((meta) => meta.slug);
  return slugs;
};
