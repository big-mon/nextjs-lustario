import Button from "components/atoms/Button";
import CustomLink from "components/atoms/CustomLink";

type Props = {
  src: string;
  text: string;
};

const PageButton = ({ src, text }: Props) => {
  return (
    <CustomLink href={src}>
      <Button>{text}</Button>
    </CustomLink>
  );
};

export default PageButton;
