import { useEffect, useRef, useState } from "react";

export interface DivSize {
  width: number;
  height: number;
}

interface ResponsiveDivSizeReturn {
  divRef: React.RefObject<HTMLDivElement>;
  divSize: DivSize;
}

export function useResponsiveDivSize(): ResponsiveDivSizeReturn {
  const divRef = useRef<HTMLDivElement>(null);
  const [divSize, setDivSize] = useState({
    width: 0,
    height: 0,
  });

  function getInitialDivSize() {
    const divElement = document.getElementsByClassName(
      "rem-container"
    )[0] as HTMLDivElement;
    setDivSize({
      width: divElement.offsetWidth,
      height: divElement.offsetHeight,
    });
  }

  useEffect(() => {
    getInitialDivSize();

    function handleResize() {
      const div = divRef.current!;
      if (div) {
        setDivSize({
          width: div.offsetWidth,
          height: div.offsetHeight,
        });
      }
    }

    window.window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { divRef, divSize };
}
