import Image, { StaticImageData } from "next/image";

import pic0 from "../public/images/signal-2023-01-13-225945_004.jpeg";
import pic1 from "../public/images/signal-2023-01-13-225945_008.jpeg";
import pic2 from "../public/images/signal-2023-01-13-225945_012.jpeg";
import pic3 from "../public/images/signal-2023-01-13-225945_017.jpeg";
import pic4 from "../public/images/signal-2023-01-13-225945_005.jpeg";
import pic5 from "../public/images/signal-2023-01-13-225945_009.jpeg";
import pic6 from "../public/images/signal-2023-01-13-225945_013.jpeg";
import pic7 from "../public/images/signal-2023-01-13-225945_018.jpeg";
import pic8 from "../public/images/signal-2023-01-13-225945_002.jpeg";
import pic9 from "../public/images/signal-2023-01-13-225945_006.jpeg";
import pic10 from "../public/images/signal-2023-01-13-225945_010.jpeg";
import pic11 from "../public/images/signal-2023-01-13-225945_014.jpeg";
import pic12 from "../public/images/signal-2023-01-13-225945_019.jpeg";
import pic13 from "../public/images/signal-2023-01-13-225945_003.jpeg";
import pic14 from "../public/images/signal-2023-01-13-225945_007.jpeg";
import pic15 from "../public/images/signal-2023-01-13-225945_011.jpeg";
import pic16 from "../public/images/signal-2023-01-13-225945_015.jpeg";
import pic17 from "../public/images/signal-2023-01-13-225945_020.jpeg";

const pics = [
  pic0,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
];

interface PostProps {
  src: StaticImageData;
}

function Post({ src }: PostProps) {
  return (
    <div className="my-6 mx-1">
      <Image className="rounded-lg" src={src} />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 w-3/4">
      {pics.map((pic) => (
        <Post src={pic} />
      ))}
    </div>
  );
}
