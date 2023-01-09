import { DivSize } from "@src/hooks";
import create from "zustand";

interface MainContainerSizeStoreState {
  mainContainerSize: DivSize;
  setMainContainerSize: (divSize: DivSize) => void;
}

export const useMainContainerSizeStore = create<MainContainerSizeStoreState>(
  (set) => ({
    mainContainerSize: { width: 0, height: 0 },
    setMainContainerSize: (size) => set({ mainContainerSize: size }),
  })
);
