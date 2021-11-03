import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "models/Post";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "posts");

/** 日付でソートした全記事データを取得 */
export const getSortedPostsMeta = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Markdownファイルを文字列として取得
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // metaデータをパース
    const { data: matterResult } = matter(fileContents);

    // データ整形し返却
    return extractPostMeta(matterResult);
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
