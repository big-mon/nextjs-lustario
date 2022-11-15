import Link from "next/link";
import { SITE_NAME } from "constants/information";
import TitleIcon from "components/atoms/TitleIcon";
import TitleLabel from "components/atoms/TitleLabel";
import CustomLink from "components/common/CustomLink";

/** 全体ヘッダー */
const GlobalHeader = () => {
  return (
    <>
      <header
        className="container mx-auto mb-2 p-4 flex"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* サイトタイトル */}
        <div className="mx-0">
          <Link href="/" className="flex font-medium content-center">
            <TitleIcon />
            <TitleLabel>{SITE_NAME}</TitleLabel>
          </Link>
        </div>

        {/* サイトメニュー */}
        <ul className="ml-auto hidden md:flex">
          <li className="px-4">
            <CustomLink href={"/"}>Home</CustomLink>
          </li>
          <li className="px-4">
            <CustomLink href={"/post/about"}>About</CustomLink>
          </li>
          <li className="px-4">
            <CustomLink href={"https://github.com/big-mon/nextjs-lustario"}>
              Project
            </CustomLink>
          </li>
          <li className="px-4">
            <CustomLink href={"https://twitter.com/BIG_MON"}>
              Twitter
            </CustomLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default GlobalHeader;
