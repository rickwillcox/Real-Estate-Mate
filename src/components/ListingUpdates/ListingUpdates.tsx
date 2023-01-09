import {
  DivSize,
  useFadeElement,
  useListingUpdates,
  useToggle,
} from "@src/hooks";
import "./listingUpdates.scss";
import { LoadingDots } from "../LoadingDots";
import { Timeline } from "../Timeline";
import AnimateHeight from "react-animate-height";

export function ListingUpdates() {
  const {
    data: { listingUpdates },
    loading,
  } = useListingUpdates();

  const [showTimeline, toggleShowTimeline] = useToggle({ initialValue: true });

  let keysInListingUpdates = 0;
  if (listingUpdates) {
    keysInListingUpdates = Object.keys(listingUpdates).length;
  }
  const buttonText = loading
    ? ""
    : showTimeline
    ? "Hide"
    : `Show (${keysInListingUpdates})`;

  const fadeInShowHidebutton = useFadeElement({
    type: "in",
    fadeWhen: !loading && !!keysInListingUpdates,
  });

  const fadeInNAText = useFadeElement({
    type: "in",
    fadeWhen: !loading && !keysInListingUpdates,
  });

  const NATextClassName = "rem-listing-updates-na-text";
  if (!loading && !!keysInListingUpdates) {
    const foundClasses = document.getElementsByClassName(NATextClassName);
    if (foundClasses && foundClasses[0]) {
      foundClasses[0].remove();
    }
  }

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title rem-listing-subtitle">
        Listing Timeline:{" "}
        <LoadingDots nameClass="rem-loading-timeline" removeWhen={!loading} />
        <span
          className={`rem-sub-title-value-text ${NATextClassName} ${fadeInNAText}`}
        >
          N/A
        </span>
        <button
          className={`rem-sub-title-value-text rem-link ${fadeInShowHidebutton}`}
          onClick={toggleShowTimeline}
        >
          {buttonText}
        </button>
      </h6>
      {!loading && keysInListingUpdates && listingUpdates ? (
        <AnimateHeight
          id="rem-timeline-animate-height"
          duration={500}
          height={showTimeline ? "auto" : 0}
        >
          <div className="rem-listing-updates-timeline">
            <Timeline listingUpdates={listingUpdates} />
          </div>
        </AnimateHeight>
      ) : (
        <div />
      )}
    </div>
  );
}
