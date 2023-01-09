import {
  DivSize,
  useFadeElement,
  useListingUpdates,
  useMainContainerSize,
  useToggle,
} from "@src/hooks";
import "./listingUpdates.scss";
import { LoadingDots } from "../LoadingDots";
import { Timeline } from "../Timeline";
import AnimateHeight from "react-animate-height";
import { useEffect, useRef } from "react";

export function ListingUpdates() {
  const {
    data: { listingUpdates },
    loading,
  } = useListingUpdates();

  const [showTimeline, toggleShowTimeline] = useToggle({ initialValue: false });

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

  const { mainContainerSize } = useMainContainerSize();

  const hideTopRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (hideTopRef.current) {
      hideTopRef.current.style.width = `${mainContainerSize.width}px`;
    }
  }, [mainContainerSize]);

  let intervalId: any;

  function start() {
    intervalId = setInterval(() => {
      const element = document.getElementsByClassName(
        "rem-timeline-container"
      )[0] as HTMLDivElement;

      if (element) {
        // console.log(element);
        const x = window.getComputedStyle(element);
        console.log(x.maxHeight);
        const maxHeight = x.maxHeight;
        // remove the px
        const numberMaxHeight = Number(
          maxHeight.substring(0, maxHeight.length - 2)
        );
        if (numberMaxHeight < 30) {
          element.style.opacity = "0";
        } else {
          element.style.opacity = "1";
        }
      }
    }, 5);
  }

  function stop() {
    clearInterval(intervalId);
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
          onClick={() => {
            toggleShowTimeline();
            start();
            setTimeout(stop, 1500);
          }}
        >
          {buttonText}
        </button>
      </h6>
      {!loading && keysInListingUpdates && listingUpdates ? (
        // <AnimateHeight
        //   id="rem-timeline-animate-height"
        //   duration={500}
        //   height={showTimeline ? "auto" : 0}
        // >
        <div className="rem-listing-updates-timeline">
          <Timeline
            listingUpdates={listingUpdates}
            showTimeline={showTimeline}
          />
          <div ref={hideTopRef} className="rem-timeline-hide-top"></div>
        </div>
      ) : (
        // </AnimateHeight>
        <div />
      )}
    </div>
  );
}
