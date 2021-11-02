import CustomLink from "components/atoms/CustomLink";
import { SITE_NAME } from "lib/constants";

const CopyRight = () => {
  return (
    <>
      <p className="text-sm sm:py-2 sm:mt-0 mt-4">
        <span className="font-extrabold">
          © {new Date().getFullYear()} {SITE_NAME}
        </span>
        ,
        <span className="ml-2 text-xs">
          Theme designed by{" "}
          <CustomLink href="https://estrilda.damonge.com/">Mon</CustomLink>
        </span>
      </p>
    </>
  );
};

export default CopyRight;
