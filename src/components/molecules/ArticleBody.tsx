import styles from "styles/article.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import CustomLink from "components/atoms/CustomLink";
import ArticleImage from "components/molecules/ArticleImage";

type Props = {
  content: string;
};

/** 記事本文 */
const ArticleBody = ({ content }: Props) => {
  return (
    <>
      <div className={styles.article}>
        <ReactMarkdown
          className="max-w-2xl mx-auto text-lg leading-loose"
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[
            [rehypeHighlight, { ignoreMissing: true }],
            rehypeRaw,
          ]}
          components={{
            h1: "h2",
            h2: "h3",
            h3: "h4",
            h4: "h5",
            h5: "h6",
            a: CustomLink,
            img: ArticleImage,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default ArticleBody;
