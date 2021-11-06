import { PER_PAGE } from "lib/constants";
import PageButton from "components/molecules/PageButton";

type Props = {
  total: number;
  current: number;
  mode?: string;
};

/** ページネーション */
const Pagination = ({ total, current, mode = "page" }: Props) => {
  const totalPage = Math.ceil(total / PER_PAGE);
  const hasPrev = current - 1 > 0;
  const hasNext = totalPage - current > 0;

  return (
    <div className="text-right">
      {hasPrev ? (
        <PageButton src={`/${mode}/${Number(current) - 1}`} text={"<"} />
      ) : (
        <></>
      )}
      {hasNext ? (
        <PageButton src={`/${mode}/${Number(current) + 1}`} text={">"} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
