import { priceRangeRegex } from "@src/consts/regex";
import { useLoadedStore } from "@src/stores";
import { useEffect, useState } from "react";

export function useHiddenPriceRange() {
  const [priceRange, setPriceRange] = useState<string>("");
  const { setContainerToLoaded, hiddenPriceRangeLoaded } = useLoadedStore();

  useEffect(() => {
    const matches = document.documentElement.innerHTML.match(priceRangeRegex);
    if (matches === null) {
      setPriceRange(`No price range available`);
      return;
    } else {
      setPriceRange(matches[1].replace("_", " - "));
    }
    setContainerToLoaded("hiddenPriceRangeLoaded");
  }, []);

  return { data: { priceRange }, loading: !hiddenPriceRangeLoaded };
}

// todo: update back end here
// let split_price = matches[1].split("_");
// if (split_price.length === 2) {
//   backgroundFunctions.updateBackend.args.minPrice = split_price[0];
//   backgroundFunctions.updateBackend.args.maxPrice = split_price[1];
// } else {
//   backgroundFunctions.updateBackend.args.minPrice = split_price[0];
//   backgroundFunctions.updateBackend.args.maxPrice = split_price[0];
// }

// if (matches === null) {
//   priceRangeInnerElement().innerHTML = `No price range available`;
//   return;
// }
// priceRangeInnerElement().innerHTML = `${matches[1].replace("_", " - ")}`;
