import { CommBankData } from "@src/interfaces";
import {
  CommunicationEvent,
  getAddress,
  sendEventToBackground,
} from "@src/utils";
import { useEffect, useState } from "react";

export function useGetCommBankData() {
  const [commBankData, setCommBankData] = useState<CommBankData>({
    commBankPriceEval: null,
    domainPropertyId: null,
  });

  useEffect(() => {
    sendEventToBackground(CommunicationEvent.getCommBankData, {
      address: getAddress(false),
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      if (msg.eventName !== CommunicationEvent.getCommBankData) return;
      const data = msg.data as CommBankData;
      setCommBankData({
        commBankPriceEval: data.commBankPriceEval,
        domainPropertyId: data.domainPropertyId,
      });
    });
  }, []);

  return {
    commBankPriceEval: commBankData.commBankPriceEval,
    domainPropertyId: commBankData.domainPropertyId,
  };
}
