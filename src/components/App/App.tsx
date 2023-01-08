/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "../../consts/styles/styles.scss";
import { BankEstimate } from "../BankEstimate";
import { NBNInfo } from "../NBNInfo";
import { Logo } from "../Logo";
import { HiddenPriceRange } from "../HiddenPriceRange";

export function App() {
  return (
    <div className="rem-container">
      <h3 className="rem-title">Real Estate Mate</h3>
      <Logo />
      <HiddenPriceRange />
      <BankEstimate />
      <NBNInfo />
      {/* <div className="rem-listing-updates">Listing Timeline:</div> */}
    </div>
  );
}
