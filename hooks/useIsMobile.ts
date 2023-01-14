import { useEffect, useLayoutEffect, useState } from "react";

// const useIsMobile = () => {
//   const [width, setWidth] = useState();
//   const handleWindowChange = () => {
//     setWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowChange);
//     };
//   }, []);

//   return width <= 800;
// };

// export default useIsMobile;
