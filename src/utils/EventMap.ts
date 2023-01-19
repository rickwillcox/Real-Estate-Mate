import {
  CommBankResponse,
  ListingUpdatesResponse,
  NBNResponse,
  Nullable,
  UpdatePropertyListing,
  UpdatePropertyListingResponse,
} from "@src/interfaces";

export const enum CommunicationEvent {
  getCommBankData = "getCommBankData",
  getNBNData = "getNBNData",
  getListingUpdates = "getListingUpdates",
  updatePropertyListing = "updatePropertyListing",
}

// content to background
export interface ContentToBackgroundEventMap {
  [CommunicationEvent.getCommBankData]: EventGetCommBankDataValues;
  [CommunicationEvent.getNBNData]: EventGetNBNDataValues;
  [CommunicationEvent.getListingUpdates]: EventGetListingUpdatesValues;
  [CommunicationEvent.updatePropertyListing]: EventUpdatePropertyListing;
}

interface EventGetCommBankDataValues {
  address: string;
}

interface EventGetNBNDataValues {
  address: string;
}

interface EventGetListingUpdatesValues {
  address: string;
}

interface EventUpdatePropertyListing extends UpdatePropertyListing {}

export type ContentToBackgroundEventMapValues =
  ContentToBackgroundEventMap[keyof ContentToBackgroundEventMap];

//background to content
export interface BackgroundToContentEventMap {
  [CommunicationEvent.getCommBankData]: CommBankResponse;
  [CommunicationEvent.getNBNData]: Nullable<NBNResponse>;
  [CommunicationEvent.getListingUpdates]: ListingUpdatesResponse;
  [CommunicationEvent.updatePropertyListing]: UpdatePropertyListingResponse;
}

export type BackgroundToContentEventMapValues =
  BackgroundToContentEventMap[keyof BackgroundToContentEventMap];

export function sendEventToBackground<
  K extends keyof ContentToBackgroundEventMap
>(eventName: K, args?: ContentToBackgroundEventMap[K]): void {
  chrome.runtime.sendMessage({
    eventName: eventName,
    args: args,
  });
}

export async function sendEventToContent<
  K extends keyof BackgroundToContentEventMap
>(
  eventName: K,
  tabId?: number,
  data?: BackgroundToContentEventMapValues
): Promise<void> {
  if (!tabId) throw new Error("tabId is required - sendEventToContent");
  chrome.tabs.sendMessage(tabId, {
    eventName: eventName,
    data: data,
  });
}
