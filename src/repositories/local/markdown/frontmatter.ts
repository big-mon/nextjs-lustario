import type { PostMeta } from "models/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { retrieveFiles } from "utils/filepath";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "posts");

/** 全記事のFrontMatterを取得 */
export const getAllMatterResults = () => {
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

/** meta情報から必要なデータのみ抽出 */
export const extractPostMeta = (matter: { [key: string]: any }): PostMeta => {
  return {
    slug: (matter.slug ?? "").toLowerCase(),
    title: matter.title ?? "Error",
    description: matter.description ?? "error occurred",
    date: matter.date
      ? new Date(matter.date).toISOString()
      : new Date().toISOString(),
    author: matter.author ?? "",
    coverImage: matter.image ?? "",
    category: matter.category ?? "",
    tags: matter.tags ?? [],
  };
};
