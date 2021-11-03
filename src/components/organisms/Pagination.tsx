import { PER_PAGE } from "lib/constants";
import PageButton from "components/molecules/PageButton";

type Props = {
  total: number;
  current: number;
  category?: string;
  tag?: string;
};

/** ページネーション */
const Pagination = ({ total, current, category, tag }: Props) => {
  const totalPage = Math.ceil(total / PER_PAGE);
  const hasPrev = current - 1 > 0;
  const hasNext = totalPage - current > 0;

  let baseHref = "page";
  if (category) {
    baseHref = `categories/${category}`;
  } else if (tag) {
    baseHref = `tags/${tag}`;
  }

  return (
    <div className="text-right">
      {hasPrev ? (
        <PageButton src={`/${baseHref}/${Number(current) - 1}`} text={"<"} />
      ) : (
        <></>
      )}
      {hasNext ? (
        <PageButton src={`/${baseHref}/${Number(current) + 1}`} text={">"} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
