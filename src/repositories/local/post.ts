import { getAllMatterResults, extractPostMeta } from "./frontmatter";

/** 日付でソートした全記事データを取得 */
export const getSortedPostsMeta = () => {
  const matterResults = getAllMatterResults();
  const postMetaList = matterResults.map((matter) =>
    extractPostMeta(matter.data)
  );
  const sortedResults = postMetaList.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedResults;
};
