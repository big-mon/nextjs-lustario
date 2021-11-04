import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

/** MarkdownをHTMLへ変換 */
const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkUnwrapImages)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
};

export default markdownToHtml;
