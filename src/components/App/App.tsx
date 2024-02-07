/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "../../consts/styles/styles.scss";
import { BankEstimate } from "@components/BankEstimate";
import { NBNInfo } from "@components/NBNInfo";
import { Logo } from "@components/Logo";
import { HiddenPriceRange } from "@components/HiddenPriceRange";
import { ListingUpdates } from "@components/ListingUpdates";
import { useMainContainerSize } from "@src/hooks";
import { useUpdatePropertyListing } from "@src/hooks/useUpdatePropertyListing";

export function App() {
  const { divRef } = useMainContainerSize();

  useUpdatePropertyListing();
  console.log("REAL ESTATE MATE APP.TSX");

  return (
    <div ref={divRef} className="rem-container">
      <h3 className="rem-title">Real Estate Mate</h3>
      <Logo />
      <HiddenPriceRange />
      {/* <BankEstimate />
      <NBNInfo /> */}
      <ListingUpdates />
    </div>
  );
}
