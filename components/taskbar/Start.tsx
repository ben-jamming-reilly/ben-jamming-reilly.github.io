import * as React from "react";
import Image from "next/image";

interface Props {}

import logo from "../../media/icons/windows-logo.png";

const Start: React.FC<Props> = () => {
  return (
    <div className="bg-green-500 w-11 rounded-r-lg  ">
      <Image src={logo} className="object-contain" layout="responsive" />
    </div>
  );
};

export default Start;
