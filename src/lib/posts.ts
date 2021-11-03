import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "models/Post";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "posts");

/** 日付でソートした全記事データを取得 */
export const getSortedPostsMeta = () => {
  // 記事データを取得
  const files = retrieveFiles(postsDirectory);
  let allPostsData: PostMeta[] = [];
  files.forEach((fullPath) => {
    // Markdownファイルを文字列として取得
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // metaデータをパース
    const { data: matterResult } = matter(fileContents);

    // データ整形し返却
    allPostsData.push(extractPostMeta(matterResult));
  });

  // 日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
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
    slug: matter.slug,
    title: matter.title,
    description: matter.description ?? "",
    date: matter.date
      ? new Date(matter.date).toISOString()
      : new Date().toISOString(),
    author: matter.author ?? "",
    coverImage: matter.image ?? "",
    category: matter.category,
    tags: [],
  };
};
