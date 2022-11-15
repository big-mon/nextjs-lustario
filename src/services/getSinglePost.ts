import type { PostData } from "models/Post";
import {
  getAllMatterResults,
  extractPostMeta,
} from "repositories/local/markdown/frontmatter";

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
