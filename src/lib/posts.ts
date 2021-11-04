import type { PostMeta, PostData } from "models/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "lib/markdownToHTML";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "posts");

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

/** 記事のスラッグ一覧を取得 */
export const getAllPostSlugs = () => {
  // 全記事を取得、スラッグのみの配列に変換
  const metaList = getSortedPostsMeta();
  const slugs = metaList.map((meta) => meta.slug);
  return slugs;
};

/** 単一の記事を取得 */
export const getPostDataBySlug = async (slug: string): Promise<PostData> => {
  const matterResults = getAllMatterResults();
  const target = matterResults
    .map((matterResult) => {
      const meta = extractPostMeta(matterResult.data);

      if (meta.slug != slug) return;
      const content = matterResult.content + "";

      return { content: content, ...meta };
    })
    .filter((data) => data);

  if (target.length < 1 || target[0] === undefined)
    return { ...extractPostMeta({}), content: "" };

  target[0].content = await markdownToHtml(target[0].content);
  return target[0];
};

/** 全記事のFrontMatterを取得 */
const getAllMatterResults = () => {
  // 記事データを取得
  const files = retrieveFiles(postsDirectory);
  const matterResults = files.map((fullPath) => {
    // Markdownファイルを文字列として取得
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // metaデータをパース
    const matterResult = matter(fileContents);

    return matterResult;
  });

  return matterResults;
};

/** 指定ディレクトリ内のファイルパスを再帰的に取得 */
const retrieveFiles = (dir: string): string[] =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isFile()
        ? [`${dir}/${entry.name}`]
        : retrieveFiles(`${dir}/${entry.name}`)
    );

/** meta情報から必要なデータのみ抽出 */
const extractPostMeta = (matter: { [key: string]: any }): PostMeta => {
  return {
    slug: matter.slug ?? "",
    title: matter.title ?? "Error",
    description: matter.description ?? "error occurred",
    date: matter.date
      ? new Date(matter.date).toISOString()
      : new Date().toISOString(),
    author: matter.author ?? "",
    coverImage: matter.image ?? "",
    category: matter.category ?? "",
    tags: [],
  };
};
