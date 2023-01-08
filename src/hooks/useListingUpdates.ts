import { ListingUpdate, ListingUpdatesResponse } from "@src/interfaces";
import { useLoadedStore } from "@src/stores";
import {
  CommunicationEvent,
  getAddress,
  sendEventToBackground,
} from "@src/utils";
import { useEffect, useState } from "react";

export function useListingUpdates() {
  const [listingUpdates, setListingUpdates] =
    useState<ListingUpdatesResponse>();
  const { setContainerToLoaded, listingUpdatesLoaded } = useLoadedStore();

  useEffect(() => {
    sendEventToBackground(CommunicationEvent.getListingUpdates, {
      address: getAddress(true),
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      if (msg.eventName !== CommunicationEvent.getListingUpdates) return;
      setListingUpdates(msg.data);
      setContainerToLoaded("listingUpdatesLoaded");
      chrome.runtime.onMessage.removeListener(function () {});
    });
  }, []);

  return { data: { listingUpdates }, loading: !listingUpdatesLoaded };
}
