import CustomLink from "components/atoms/CustomLink";

type Props = {
  text: string;
  href: string;
};

export const MenuItem = ({ text, href }: Props) => {
  return (
    <>
      <li className="px-4">
        <CustomLink href={href}>{text}</CustomLink>
      </li>
    </>
  );
};

export default MenuItem;
