import Date from "components/atoms/Date";

type Props = {
  date: string;
};

const ArticleDate = ({ date }: Props) => {
  return (
    <span className="text-xs text-gray-500">
      <Date dateString={date} />
    </span>
  );
};

export default ArticleDate;
