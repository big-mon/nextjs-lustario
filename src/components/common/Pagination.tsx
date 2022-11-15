import { PER_PAGE } from "constants/setting";
import CustomLink from "components/atoms/CustomLink";
import Button from "components/common/Button";

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
        <CustomLink href={`/${mode}/${Number(current) - 1}`}>
          <Button>{"<"}</Button>
        </CustomLink>
      ) : (
        <></>
      )}
      {hasNext ? (
        <CustomLink href={`/${mode}/${Number(current) + 1}`}>
          <Button>{">"}</Button>
        </CustomLink>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
