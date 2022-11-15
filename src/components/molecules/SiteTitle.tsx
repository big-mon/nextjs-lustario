import TitleIcon from "components/atoms/TitleIcon";
import TitleLabel from "components/atoms/TitleLabel";
import { SITE_NAME } from "constants/information";
import Link from "next/link";

/** 全体ヘッダー用サイト名 */
const SiteTitle = () => {
  return (
    <>
      <div className="mx-0">
        <Link href="/" className="flex font-medium content-center">
          <TitleIcon />
          <TitleLabel>{SITE_NAME}</TitleLabel>
        </Link>
      </div>
    </>
  );
};

export default SiteTitle;
