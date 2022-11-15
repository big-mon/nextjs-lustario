import fs from "fs";

/** 指定ディレクトリ内のファイルパスを再帰的に取得 */
export const retrieveFiles = (dir: string): string[] =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isFile()
        ? [`${dir}/${entry.name}`]
        : retrieveFiles(`${dir}/${entry.name}`)
    );
