import type { PostData } from "models/Post";
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

/** 単一の記事を取得 */
export const getPostDataBySlug = async (slug: string): Promise<PostData> => {
  const matterResults = getAllMatterResults();
  const target = matterResults
    .map((matterResult) => {
      const meta = extractPostMeta(matterResult.data);

      if (meta.slug != slug.toLowerCase()) return;
      const content = matterResult.content + "";

      return { meta: meta, content: content };
    })
    .filter((data) => data);

  if (target.length < 1 || target[0] === undefined)
    return { meta: extractPostMeta({}), content: "" };

  return target[0];
};
