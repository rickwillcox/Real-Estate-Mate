import React, { useEffect } from "react";
import { useUserStore } from "./stores";

interface AppContextInterface {
  exampleFetch: () => void;
}

export const AppContext = React.createContext({} as AppContextInterface);

interface Props {
  children: React.ReactNode;
}

function AppProvider(props: Props) {
  const { children } = props;
  const userStore = useUserStore();

  function exampleFetch() {
    chrome.runtime.sendMessage({
      functionName: "exampleFetch",
      data: {},
    });
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      switch (msg.functionName) {
        case "exampleFetch": {
          console.log("Foreground received exampleFetch");
          console.log(msg.data);
          userStore.setUser(msg.data);
        }
        default:
          break;
      }
      return;
    });
  }, []);

  return (
    <AppContext.Provider value={{ exampleFetch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
