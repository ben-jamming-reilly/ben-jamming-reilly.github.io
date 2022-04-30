import * as React from "react";

import Layer from "./Layer";

import windowsBackground from "../../media/backgrounds/windows-xp-bliss.jpg";

interface Props {
  children: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex w-screen h-full">
      <Layer distance={1} media={windowsBackground} />
      <div className="z-10 absolute bottom-0 left-0">{children}</div>
    </div>
  );
};

export default Background;
