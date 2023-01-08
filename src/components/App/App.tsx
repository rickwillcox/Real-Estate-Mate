/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "../../consts/styles/styles.scss";
import { BankEstimate } from "@components/BankEstimate";
import { NBNInfo } from "@components/NBNInfo";
import { Logo } from "@components/Logo";
import { HiddenPriceRange } from "@components/HiddenPriceRange";
import { ListingUpdates } from "@components/ListingUpdates";

export function App() {
  return (
    <div className="rem-container">
      <h3 className="rem-title">Real Estate Mate</h3>
      <Logo />
      <HiddenPriceRange />
      <BankEstimate />
      <NBNInfo />
      <ListingUpdates />
    </div>
  );
}
