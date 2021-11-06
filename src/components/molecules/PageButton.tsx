import Button from "components/atoms/Button";
import CustomLink from "components/atoms/CustomLink";

type Props = {
  src: string;
  text: string;
};

const PageButton = ({ src, text }: Props) => {
  return (
    <Button>
      <CustomLink href={src}>{text}</CustomLink>
    </Button>
  );
};

export default PageButton;
