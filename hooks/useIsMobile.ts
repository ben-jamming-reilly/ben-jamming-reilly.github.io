import * as React from "react";

const useIsMobile = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleWindowChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  return width <= 800;
};

export default useIsMobile;
