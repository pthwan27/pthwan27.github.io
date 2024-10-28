import { throttle } from "lodash";
import { useEffect, useState } from "react";

const useWindowSizeCustom = () => {
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = throttle(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
        handleResize.cancel();
      };
    }
  }, []);

  return windowSize;
};

export default useWindowSizeCustom;
