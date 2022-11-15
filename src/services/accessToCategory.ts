import { PER_PAGE } from "constants/setting";
import { getSortedPostsMeta } from "repositories/local/markdown/post";

/** カテゴリー一覧ページ向けの記事一覧とページ数を取得 */
export const getPosts = (category: string, page: number) => {
  // カテゴリーとページに該当する記事に絞り込み
  const allPosts = getSortedPostsMeta().filter(
    (meta) => meta.category.toLowerCase() == category
  );
  const currentPagePosts = allPosts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return {
    posts: currentPagePosts,
    totalPage: allPosts.length,
  };
};

/** カテゴリー一覧ページのパス一覧を取得 */
export const getAllPaths = () => {
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

  return paths;
};
