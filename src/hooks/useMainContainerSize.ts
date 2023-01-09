import { useMainContainerSizeStore } from "@src/stores";
import { useResponsiveDivSize } from ".";
import { useEffect } from "react";

export function useMainContainerSize() {
  const { divRef, divSize } = useResponsiveDivSize();

  const setMainContainerSize = useMainContainerSizeStore(
    (state) => state.setMainContainerSize
  );

  const mainContainerSize = useMainContainerSizeStore(
    (state) => state.mainContainerSize
  );

  useEffect(() => {
    setMainContainerSize(divSize);
  }, [divSize]);

  return { divRef, mainContainerSize };
}
