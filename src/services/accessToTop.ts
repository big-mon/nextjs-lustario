import { PER_PAGE } from "constants/setting";
import { getSortedPostsMeta } from "repositories/local/post";

/** トップページ向けの記事一覧と全ページ数を取得 */
export const getPosts = () => {
  const allPosts = getSortedPostsMeta();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    posts: posts,
    totalPage: allPosts.length,
  };
};
