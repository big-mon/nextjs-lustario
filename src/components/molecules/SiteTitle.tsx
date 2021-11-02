import TitleIcon from "components/atoms/TitleIcon";
import TitleLabel from "components/atoms/TitleLabel";
import { SITE_NAME } from "lib/constants";
import Link from "next/link";

/** 全体ヘッダー用サイト名 */
const SiteTitle = () => {
  return (
    <>
      <div className="inline-block">
        <Link href="/">
          <a className="flex font-medium content-center mb-4 md:mb-0">
            <TitleIcon />
            <TitleLabel>{SITE_NAME}</TitleLabel>
          </a>
        </Link>
      </div>
    </>
  );
};

export default SiteTitle;
