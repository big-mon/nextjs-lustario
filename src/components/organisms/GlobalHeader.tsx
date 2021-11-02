import SiteTitle from "../molecules/SiteTitle";
import SiteMenus from "components/molecules/SiteMenus";

/** 全体ヘッダー */
export const GlobalHeader = () => {
  return (
    <>
      <header className="container mx-auto p-4 flex">
        <SiteTitle />
        <SiteMenus />
      </header>
    </>
  );
};

export default GlobalHeader;
