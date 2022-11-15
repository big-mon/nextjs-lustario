import Date from "components/common/dateText";

type Props = {
  date: string;
};

const ArticleDate = ({ date }: Props) => {
  return (
    <span className="text-xs opacity-80">
      <Date dateString={date} />
    </span>
  );
};

export default ArticleDate;
