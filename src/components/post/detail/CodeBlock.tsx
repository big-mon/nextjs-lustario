import { CodeProps } from "react-markdown/lib/ast-to-react";
import TweetEmbed from "react-tweet-embed";
import YouTubeEmbed from "react-youtube";
import style from "styles/codeblock.module.scss";

const CodeBlock = ({ node, className, children, ...props }: CodeProps) => {
  // カスタム値の判定材料を抽出
  const prefix = "language-";
  const classes = className
    ?.split(" ")
    .find((c) => c.startsWith(prefix))
    ?.replace(prefix, "");
  const params = classes ? classes.split(":") : [];

  if (params.length > 0 && params[0] === "twitter") {
    // Twitter埋め込み
    const id = children.toString().replace(/\r?\n/g, "");
    return <TweetEmbed tweetId={id} />;
  }

  if (params.length > 0 && params[0] === "youtube") {
    // YouTube埋め込み
    const id = children.toString().replace(/\r?\n/g, "");
    return (
      <YouTubeEmbed
        videoId={id}
        iframeClassName={style.iframe}
        className={style.youtube}
      />
    );
  }

  // 通常のコンポーネントを返却
  return <code className={className}>{children}</code>;
};

export default CodeBlock;
