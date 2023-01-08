import { CommBankResponse } from "@src/interfaces";
import { useLoadedStore } from "@src/stores";
import {
  CommunicationEvent,
  getAddress,
  sendEventToBackground,
} from "@src/utils";
import { useEffect, useState } from "react";

export function useCommBankData() {
  const [commBankData, setCommBankData] = useState<CommBankResponse>({
    commBankPriceEval: null,
    domainPropertyId: null,
  });
  const { setContainerToLoaded, bankEstimateLoaded } = useLoadedStore();

  useEffect(() => {
    sendEventToBackground(CommunicationEvent.getCommBankData, {
      address: getAddress(false),
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      if (msg.eventName !== CommunicationEvent.getCommBankData) return;
      const data = msg.data as CommBankResponse;
      setCommBankData({
        commBankPriceEval: data.commBankPriceEval,
        domainPropertyId: data.domainPropertyId,
      });
      setContainerToLoaded("bankEstimateLoaded");
    });
  }, []);

  const commBankLink = commBankData.domainPropertyId
    ? `https://www.commbank.com.au/digital/home-buying/property/${commBankData.domainPropertyId}?byAddress=true`
    : "https://www.commbank.com.au/digital/home-buying/search";

  return {
    data: {
      commBankPriceEval: commBankData.commBankPriceEval,
      commBankLink,
    },
    loading: !bankEstimateLoaded,
  };
}
