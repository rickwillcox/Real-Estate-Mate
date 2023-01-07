import { NBNResponse, Nullable } from "@src/interfaces";
import {
  CommunicationEvent,
  getAddress,
  sendEventToBackground,
} from "@src/utils";
import { useEffect, useState } from "react";

export function useGetNBNData() {
  const [NBNData, setNBNData] = useState<NBNResponse | null>(null);

  useEffect(() => {
    console.log("sendEventToBackground(CommunicationEvent.getNBNData);");
    sendEventToBackground(CommunicationEvent.getNBNData, {
      address: getAddress(false),
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (msg) {
      console.log(
        "chrome.runtime.onMessage.addListener(function (msg) { NBN BEFORE"
      );

      if (msg.eventName !== CommunicationEvent.getNBNData) return;
      console.log(
        "chrome.runtime.onMessage.addListener(function (msg) { NBN AFTER"
      );
      setNBNData(msg.data);
    });
  }, []);

  const { primaryAccessTechnology, primaryAccessTechnologyLink } =
    processPrimaryAccessTechnologyData(NBNData?.primaryAccessTechnology);

  const { speedText, speedCategory } = processSpeedData(
    NBNData?.speed,
    NBNData?.upperSpeed,
    NBNData?.lowerSpeed
  );

  const networkCoexistence = processNetworkCoexistenceData(
    NBNData?.networkCoexistence
  );

  return {
    primaryAccessTechnology,
    primaryAccessTechnologyLink,
    speedText,
    speedCategory,
    networkCoexistence,
  };
}

function processNetworkCoexistenceData(
  networkCoexistenceRaw?: NBNResponse["networkCoexistence"]
): boolean {
  return networkCoexistenceRaw?.toLocaleLowerCase() === "yes";
}

export enum SpeedCategory {
  slow = "slow",
  medium = "medium",
  fast = "fast",
}

function processSpeedData(
  speedRaw?: NBNResponse["speed"],
  upperSpeedRaw?: NBNResponse["upperSpeed"],
  lowerSpeedRaw?: NBNResponse["lowerSpeed"]
): { speedText: Nullable<string>; speedCategory: Nullable<SpeedCategory> } {
  if (!speedRaw) return { speedText: null, speedCategory: null };

  let speedUnit = "Mbps";

  const speed = lowerSpeedRaw && upperSpeedRaw ? upperSpeedRaw : speedRaw;

  const speedCategory: SpeedCategory =
    speed < 25
      ? SpeedCategory.slow
      : speed < 50
      ? SpeedCategory.medium
      : SpeedCategory.fast;

  const speedText: string =
    lowerSpeedRaw && upperSpeedRaw
      ? `${lowerSpeedRaw} - ${upperSpeedRaw} ${speedUnit}`
      : `${speedRaw} ${speedUnit}`;

  return { speedText, speedCategory };
}

function processPrimaryAccessTechnologyData(
  primaryAccessTechnologyRaw?: NBNResponse["primaryAccessTechnology"]
): {
  primaryAccessTechnology: string;
  primaryAccessTechnologyLink: string;
} {
  let primaryAccessTechnology = "NBN data unreliable";
  let primaryAccessTechnologyLink =
    "https://www.nbnco.com.au/learn/network-technology";
  console.log("!!!!!!!!!!", primaryAccessTechnologyRaw);
  if (!primaryAccessTechnologyRaw)
    return { primaryAccessTechnology, primaryAccessTechnologyLink };
  switch (primaryAccessTechnologyRaw?.toLowerCase()) {
    case "fibre to the premises":
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-premises-explained-fttp";
      primaryAccessTechnology = "FTTP";
      break;
    case "fibre to the node":
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-node-explained-fttn";
      primaryAccessTechnology = "FTTN";
      break;
    case "fibre to the curb":
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-curb-explained-fttc";
      primaryAccessTechnology = "FTTC";
      break;
    case "fibre to the building":
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-building-explained-fttb";
      primaryAccessTechnology = "FTTB";
      break;
    case "hybrid fibre coaxil":
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology/hybrid-fibre-coaxial-explained-hfc-3";
      primaryAccessTechnology = "HFC";
      break;
    case "fibre": {
      primaryAccessTechnology = "Fibre";
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology";
      break;
    }
    default:
      primaryAccessTechnology = "NBN tech unknown";
      primaryAccessTechnologyLink =
        "https://www.nbnco.com.au/learn/network-technology";
  }
  return { primaryAccessTechnology, primaryAccessTechnologyLink };
}
