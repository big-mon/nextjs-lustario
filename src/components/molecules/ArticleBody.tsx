import styles from "styles/article.module.scss";

type Props = {
  content: string;
};

/** 記事本文 */
const ArticleBody = ({ content }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto text-lg leading-loose">
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
};

export default ArticleBody;
