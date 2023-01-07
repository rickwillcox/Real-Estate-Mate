/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "./App.css";

import { getChromeUrl } from "@src/utils";
import {
  useGetCommBankData,
  useGetNBNData,
  useGetPriceRangeFromDom,
} from "@src/hooks";

const realEstateMateLogoPath = "src/assets/logo-128.png";

export function App() {
  const priceRange = useGetPriceRangeFromDom();
  const { commBankPriceEval, domainPropertyId } = useGetCommBankData();
  const NBNData = useGetNBNData();

  console.log("commbankdata app", commBankPriceEval, domainPropertyId);
  console.log("NBNData app", NBNData);

  const commBankLink = domainPropertyId
    ? `https://www.commbank.com.au/digital/home-buying/property/${domainPropertyId}?byAddress=true`
    : "https://www.commbank.com.au/digital/home-buying/search";

  return (
    <div className="rem-container">
      <h3 className="rem-title">Real Estate Mate</h3>
      <img className="rem-logo" />
      <img
        className="rem-logo"
        src={`${getChromeUrl(realEstateMateLogoPath)}`}
        alt="logo"
        height={50}
        width={50}
      />
      <h6 className="rem-price-range">
        Price Range: <span className="rem-price-range-inner">{priceRange}</span>
      </h6>
      <h6 className="rem-bank-est">
        Bank Est: {commBankPriceEval ?? ""}
        <a
          className="rem-bank-est-inner"
          target="blank"
          href="${commBankLink}"
        ></a>
      </h6>
      <div className="rem-internet">Internet:</div>
      <div className="rem-listing-updates">Listing Timeline:</div>
    </div>
  );
}

// return (
//   <div className="rcet-main-cointainer">
//     <h1 className="rcet-title">React Chrome Extension Template</h1>
//     <br />
//     <img className="rcet-logo spin" src={`${getChromeUrl(logo)}`} alt="logo" />
//     <br />
//     <div className="rcet-container">
//       <h2>Normal React State Example</h2>
//       <div className="rcet-checkbox">
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={() => setIsChecked((prev) => !prev)}
//         />
//         <label> Click me!</label>
//       </div>
//     </div>
//     <br />
//     <UpdateFromBackgroundScript />
//   </div>
// );
