import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  title?: string;
  src?: string;
  alt?: string;
};

const ArticleImage = ({ title, src = "", alt = "" }: Props) => {
  return (
    <figure className="my-8 relative">
      <Zoom zoomMargin={100}>
        <Image src={src} alt={alt} fill />
      </Zoom>
      {title ? (
        <figcaption className="p-2 text-center text-base">{title}</figcaption>
      ) : (
        <></>
      )}
    </figure>
  );
};

export default ArticleImage;
