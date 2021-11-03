import Link from "next/link";
import Button from "components/atoms/Button";

type Props = {
  src: string;
  text: string;
};

const PageButton = ({ src, text }: Props) => {
  return (
    <Button>
      <Link href={src}>
        <a>{text}</a>
      </Link>
    </Button>
  );
};

export default PageButton;
