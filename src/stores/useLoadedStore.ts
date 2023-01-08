import create from "zustand";

interface LoadedStates {
  hiddenPriceRangeLoaded: boolean;
  bankEstimateLoaded: boolean;
  NBNLoaded: boolean;
  listingUpdatesLoaded: boolean;
}

interface LoadedStoreState {
  hiddenPriceRangeLoaded: boolean;
  bankEstimateLoaded: boolean;
  NBNLoaded: boolean;
  allContainersLoaded: boolean;
  listingUpdatesLoaded: boolean;
  setContainerToLoaded: (element: keyof LoadedStates) => void;
}

export const useLoadedStore = create<LoadedStoreState>((set) => ({
  hiddenPriceRangeLoaded: false,
  bankEstimateLoaded: false,
  NBNLoaded: false,
  listingUpdatesLoaded: false,
  allContainersLoaded: false,
  setContainerToLoaded: (element) => {
    set({ [element]: true });
    const {
      hiddenPriceRangeLoaded,
      bankEstimateLoaded,
      NBNLoaded,
      listingUpdatesLoaded,
    } = useLoadedStore.getState();
    if (
      hiddenPriceRangeLoaded &&
      bankEstimateLoaded &&
      NBNLoaded &&
      listingUpdatesLoaded
    ) {
      set({ allContainersLoaded: true });
    }
  },
}));
