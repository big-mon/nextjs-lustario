import Image from "next/image";

type Props = {
  title?: string;
  src?: string;
  alt?: string;
};

const ArticleImage = ({ title, src = "", alt = "" }: Props) => {
  return (
    <figure className="my-8 relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      {title ? (
        <figcaption className="p-2 text-center text-base">{title}</figcaption>
      ) : (
        <></>
      )}
    </figure>
  );
};

export default ArticleImage;
