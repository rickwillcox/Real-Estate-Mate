/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useCommBankData } from "@src/hooks";
import "@components/App/App.css";
import "./bankEstimate.css";
import { LoadingDots } from "../LoadingDots";

export function BankEstimate() {
  const {
    data: { commBankPriceEval, commBankLink },
    loading,
  } = useCommBankData();

  const displayText = commBankPriceEval
    ? `$${commBankPriceEval}`
    : "Not Available";

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Bank Est:{" "}
        {loading ? (
          <LoadingDots />
        ) : (
          <a
            className="rem-sub-title-value-text rem-link"
            target="blank"
            href={commBankLink}
          >
            {displayText}
          </a>
        )}
      </h6>
    </div>
  );
}
