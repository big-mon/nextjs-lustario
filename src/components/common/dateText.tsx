import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

/** 日付データ表記 */
const DateText = ({ dateString }: Props) => {
  const date: Date = parseISO(dateString);
  const text: string = format(date, "yyyy-MM-dd");

  return (
    <time dateTime={dateString} itemProp="datePublished">
      {text}
    </time>
  );
};

export default DateText;
