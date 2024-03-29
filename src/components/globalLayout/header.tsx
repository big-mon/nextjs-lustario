import Image from "next/image";
import Logo from "@public/favicon.svg";
import { SITE_NAME } from "constants/information";
import CustomLink from "components/common/customLink";

/** 全体ヘッダー */
const GlobalHeader = () => {
  const imageStyle = { width: "2ch", height: "auto" };
  return (
    <>
      <header
        className="container mx-auto mb-2 p-4 flex"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* サイトタイトル */}
        <div className="mx-0">
          <CustomLink href="/" className="flex font-medium content-center">
            <Image src={Logo} alt={SITE_NAME} style={imageStyle} />
            <span className="ml-2 text-xl" itemProp="name about">
              {SITE_NAME}
            </span>
          </CustomLink>
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
