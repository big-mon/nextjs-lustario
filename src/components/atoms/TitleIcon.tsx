import Image from "next/image";

import Logo from "../../../public/favicon.svg";
import { SITE_NAME } from "lib/constants";

/** 全体ヘッダー用アイコン */
export const TitleIcon = () => {
  return (
    <>
      <Image src={Logo} alt={SITE_NAME} width={24} height={24} />
    </>
  );
};

export default TitleIcon;
