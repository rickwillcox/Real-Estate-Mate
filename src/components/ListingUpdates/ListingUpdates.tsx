import { useListingUpdates } from "@src/hooks";
import "./listingUpdates.scss";
import { LoadingDots } from "../LoadingDots";
import { Timeline } from "../Timeline";
import { useReducer } from "react";

export function ListingUpdates() {
  const {
    data: { listingUpdates },
    loading,
  } = useListingUpdates();

  const [showTimeline, toggleShowTimeline] = useReducer(
    (showTimeline) => !showTimeline,
    true
  );

  let keysInListingUpdates = 0;
  if (listingUpdates) {
    keysInListingUpdates = Object.keys(listingUpdates).length;
  }
  const buttonText = loading
    ? ""
    : showTimeline
    ? "Hide"
    : `Show (${keysInListingUpdates})`;

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Listing Timeline: {loading && <LoadingDots />}
        {!loading && !keysInListingUpdates && (
          <span className="rem-sub-title-value-text">N/A</span>
        )}
        {!loading && keysInListingUpdates ? (
          <button
            className="rem-sub-title-value-text rem-link"
            onClick={toggleShowTimeline}
          >
            {buttonText}
          </button>
        ) : (
          <div />
        )}
      </h6>
      {!loading && keysInListingUpdates && listingUpdates ? (
        <div className="rem-listing-updates-timeline">
          <Timeline
            listingUpdates={listingUpdates}
            showTimeline={showTimeline}
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
