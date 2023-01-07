import {
  BackgroundToContentEventMap,
  BackgroundToContentEventMapValues,
  CommunicationEvent,
  ContentToBackgroundEventMap,
  sendEventToContent,
} from "@src/utils";
import { commBankHelper } from ".";
import { nbnHelper } from "./backgroundNBN";
import { Nullable } from "@src/interfaces";

export {};

console.log("background script loaded");
//clear the console
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
    default:
      break;
  }
  sendEventToContent(msg.eventName, sender?.tab?.id, msg.data);
}

async function exampleFetch() {
  //gen a random number between 1 and 10
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return fetch(`https://jsonplaceholder.typicode.com/users/${randomNum}`).then(
    (response) => response.json()
  );
}

export async function getPageSource(url: string) {
  try {
    const response = await fetch(url);
    const pageSource = await response.text();
    return pageSource;
  } catch (error) {}
  return null;
}
