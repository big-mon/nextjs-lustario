import { PER_PAGE } from "constants/setting";
import { getSortedPostsMeta } from "repositories/local/post";

/** タグ一覧ページ向けの記事一覧とページ数を取得 */
export const getPosts = (tag: string, page: number) => {
  // タグとページに該当する記事に絞り込み
  const allPosts = getSortedPostsMeta().filter((meta) =>
    meta.tags.map((tag) => tag.toLowerCase()).includes(tag)
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

/** タグ一覧ページのパス一覧を取得 */
export const getAllPaths = () => {
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

  return paths;
};
