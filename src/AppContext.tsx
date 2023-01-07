import React, { useEffect } from "react";
import { useUserStore } from "./stores";
import { CommunicationEvent, sendEventToBackground } from "./utils";

interface AppContextInterface {
  getCommBankData: () => void;
  getNBNData: () => void;
}

export const AppContext = React.createContext({} as AppContextInterface);

interface Props {
  children: React.ReactNode;
}

function AppProvider(props: Props) {
  const { children } = props;
  const userStore = useUserStore();

  function getCommBankData() {
    sendEventToBackground(CommunicationEvent.getCommBankData);
  }

  function getNBNData() {
    sendEventToBackground(CommunicationEvent.getNBNData);
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      switch (msg.eventName) {
        case CommunicationEvent.getCommBankData: {
          console.log("Foreground received getCommBankData");
          console.log(msg.data);
        }
        case CommunicationEvent.getNBNData: {
          console.log("Foreground received getNBNData");
          console.log(msg.data);
        }
        default:
          break;
      }
      return;
    });
  }, []);

  return (
    <AppContext.Provider value={{ getCommBankData, getNBNData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
