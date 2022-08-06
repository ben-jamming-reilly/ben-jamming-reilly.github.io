import * as React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  distance: number;
  media: StaticImageData;
}

const Layer: React.FC<Props> = ({ distance, media }) => {
  return (
    <>
      <Image className="w-full object-fill" alt='layer' src={media} />
    </>
  );
};

export default Layer;
