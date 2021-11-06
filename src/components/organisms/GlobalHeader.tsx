import SiteTitle from "../molecules/SiteTitle";
import SiteMenus from "components/molecules/SiteMenus";

/** 全体ヘッダー */
const GlobalHeader = () => {
  return (
    <>
      <header
        className="container mx-auto p-4 flex"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <SiteTitle />
        <SiteMenus />
      </header>
    </>
  );
};

export default GlobalHeader;
