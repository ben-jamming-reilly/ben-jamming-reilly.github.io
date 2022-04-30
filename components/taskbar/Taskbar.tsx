import * as React from "react";

import Start from "./Start";

interface Props {
}

const Taskbar: React.FC<Props> = () => {
  return (
    <footer className="bg-blue-600 w-full ">
      <Start />
    </footer>
  );
};

export default Taskbar;
