import { PER_PAGE } from "constants/setting";
import { getSortedPostsMeta } from "repositories/local/post";

/** トップページ(ページ指定あり)向けの記事一覧と全ページ数を取得 */
export const getPosts = (page: number) => {
  const allPosts = getSortedPostsMeta();
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return {
    posts: posts,
    totalPage: allPosts.length,
  };
};

/** トップページ(ページ指定あり)のパス一覧を取得 */
export const getAllPaths = () => {
  const posts = getSortedPostsMeta();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pages = range(1, Math.ceil(posts.length / PER_PAGE));

  return pages;
};
