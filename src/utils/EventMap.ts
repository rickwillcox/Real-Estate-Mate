import { CommBankData, NBNResponse, Nullable } from "@src/interfaces";

export const enum CommunicationEvent {
  getCommBankData = "getCommBankData",
  getNBNData = "getNBNData",
}

// content to background
export interface ContentToBackgroundEventMap {
  [CommunicationEvent.getCommBankData]: EventGetCommBankDataValues;
  [CommunicationEvent.getNBNData]: EventGetNBNDataValues;
}

interface EventGetCommBankDataValues {
  address: string;
}

interface EventGetNBNDataValues {
  address: string;
}

export type ContentToBackgroundEventMapValues =
  ContentToBackgroundEventMap[keyof ContentToBackgroundEventMap];

//background to content
export interface BackgroundToContentEventMap {
  [CommunicationEvent.getCommBankData]: CommBankData;
  [CommunicationEvent.getNBNData]: Nullable<NBNResponse>; // maybe this breaks it
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
