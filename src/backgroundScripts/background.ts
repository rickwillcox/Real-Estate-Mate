import {
  BackgroundToContentEventMapValues,
  CommunicationEvent,
  ContentToBackgroundEventMap,
  sendEventToContent,
} from "@src/utils";
import {
  commBankHelper,
  getListingUpdatesHelper,
  nbnHelper,
  updatePropertyListing,
} from ".";

export {};

console.log("background script loaded");
console.clear();

chrome.runtime.onMessage.addListener(function async(func, sender) {
  processContentScriptFunctions(func, sender);
});

async function processContentScriptFunctions<
  K extends keyof ContentToBackgroundEventMap
>(
  func: { eventName: K; args?: ContentToBackgroundEventMap[K] },
  sender: chrome.runtime.MessageSender
) {
  console.log("processContentScriptFunctions", func);

  let msg: {
    eventName: K;
    data: BackgroundToContentEventMapValues;
  } = {
    eventName: func.eventName,
    data: null,
  };
  switch (func.eventName) {
    case CommunicationEvent.getCommBankData: {
      const args =
        func?.args as ContentToBackgroundEventMap[CommunicationEvent.getCommBankData];
      msg.data = await commBankHelper(args.address);
      break;
    }
    case CommunicationEvent.getNBNData: {
      const args =
        func?.args as ContentToBackgroundEventMap[CommunicationEvent.getNBNData];
      msg.data = await nbnHelper(args.address);
      break;
    }
    case CommunicationEvent.getListingUpdates: {
      console.log("LISTNG UPDATES START");
      const args =
        func?.args as ContentToBackgroundEventMap[CommunicationEvent.getListingUpdates];
      msg.data = await getListingUpdatesHelper(args.address);
      console.log("!!!!", msg.data);
      console.log("LISTNG UPDATES END");
      break;
    }
    case CommunicationEvent.updatePropertyListing: {
      const args =
        func?.args as ContentToBackgroundEventMap[CommunicationEvent.updatePropertyListing];
      const res = await updatePropertyListing(args);
      //todo get real response
      msg.data = { success: true };
      break;
    }
    default:
      break;
  }
  sendEventToContent(msg.eventName, sender?.tab?.id, msg.data);
}
