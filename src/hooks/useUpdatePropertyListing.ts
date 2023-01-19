import { priceRangeRegex } from "@src/consts/regex";
import {
  CommunicationEvent,
  getAddress,
  getTitle,
  getUrlFromPage,
  sendEventToBackground,
} from "@src/utils";
import { useEffect } from "react";

export function useUpdatePropertyListing() {
  const priceRange = processPriceRange();

  useEffect(() => {
    sendEventToBackground(CommunicationEvent.updatePropertyListing, {
      address: getAddress(true),
      link: getUrlFromPage(),
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      title: getTitle(),
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      if (msg.eventName !== CommunicationEvent.updatePropertyListing) return;
      chrome.runtime.onMessage.removeListener(function () {});
    });
  }, []);
}

function processPriceRange() {
  const matches = document.documentElement.innerHTML.match(priceRangeRegex);
  if (matches === null) {
    return ["", ""];
  }
  const split_price = matches[1].split("_");
  if (split_price.length === 2) {
    return [split_price[0], split_price[1]];
  }
  return [split_price[0], split_price[0]];
}
