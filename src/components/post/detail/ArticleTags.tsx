import CustomLink from "components/common/CustomLink";

type Props = {
  tags: string[];
};

/** 記事下のタグ表示 */
const ArticleTags = ({ tags }: Props) => {
  return (
    <div className="max-w-2xl mx-auto py-6 border-t border-gray-500">
      {tags.map((tag, i) => (
        <CustomLink
          key={i}
          href={`/tag/${tag.toLowerCase()}/1`}
          className="mr-4"
        >
          #{tag}
        </CustomLink>
      ))}
    </div>
  );
};

export default ArticleTags;
