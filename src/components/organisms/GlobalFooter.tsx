import CopyRight from "components/atoms/CopyRight";
import SocialIconTwitter from "components/atoms/SocialIconTwitter";
import SocialIconGitHub from "components/atoms/SocialIconGitHub";
import CustomLink from "components/atoms/CustomLink";
import { TWITTER, GITHUB } from "lib/constants";

/** 全体フッター */
export const GlobalFooter = () => {
  return (
    <>
      <footer className="container mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center sm:flex-row flex-col text-gray-500">
          <CopyRight />

          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <CustomLink href={`https://twitter.com/${TWITTER}`}>
              <SocialIconTwitter />
            </CustomLink>

            <CustomLink className="ml-3" href={`https://github.com/${GITHUB}`}>
              <SocialIconGitHub />
            </CustomLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GlobalFooter;
