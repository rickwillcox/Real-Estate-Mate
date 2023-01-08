import create from "zustand";

interface LoadedStates {
  hiddenPriceRangeLoaded: boolean;
  bankEstimateLoaded: boolean;
  NBNLoaded: boolean;
}

interface LoadedStoreState {
  hiddenPriceRangeLoaded: boolean;
  bankEstimateLoaded: boolean;
  NBNLoaded: boolean;
  allContainersLoaded: boolean;
  setContainerToLoaded: (element: keyof LoadedStates) => void;
}

export const useLoadedStore = create<LoadedStoreState>((set) => ({
  hiddenPriceRangeLoaded: false,
  bankEstimateLoaded: false,
  NBNLoaded: false,
  allContainersLoaded: false,
  setContainerToLoaded: (element) => {
    set({ [element]: true });
    const { hiddenPriceRangeLoaded, bankEstimateLoaded, NBNLoaded } =
      useLoadedStore.getState();
    if (hiddenPriceRangeLoaded && bankEstimateLoaded && NBNLoaded) {
      set({ allContainersLoaded: true });
    }
  },
}));
