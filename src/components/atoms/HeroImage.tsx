import Image from "next/image";
import { convertInnerUrl } from "lib/url";

type Props = {
  src: string;
  alt: string;
};

/** ヒーロー画像 */
const HeroImage = ({ src, alt }: Props) => {
  return (
    <>
      <Image
        src={convertInnerUrl(src)}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={50}
        className="pointer-events-none"
      />
    </>
  );
};

export default HeroImage;
