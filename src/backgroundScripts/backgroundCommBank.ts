import { CommBankData, Nullable } from "@src/interfaces";
import { getPageSource } from ".";

export async function commBankHelper(address: string): Promise<CommBankData> {
  let domainLink = null;
  let domainPropertyId = null;
  let commBankPriceEval = null;

  try {
    domainLink = await getDomainLink(address);
    if (domainLink === null) {
      throw new Error("Failed to get domain link");
    }

    domainPropertyId = await getDomainPropertyId(domainLink);
    if (!domainPropertyId) {
      throw new Error("Failed to get domain property ID");
    }
  } catch (error) {
    return { commBankPriceEval: "Not Available", domainPropertyId };
  }

  commBankPriceEval = await getCommBankPriceEval(domainPropertyId);
  console.log("CommBank price eval", commBankPriceEval);
  return { commBankPriceEval, domainPropertyId };
}

async function getDomainLink(searchTerm: string) {
  const pageSource = await getPageSource(
    `https://www.domain.com.au/sale/?street=${searchTerm}`
  );
  const regex = /<a href="(https:\/\/www\.domain\.com\.au\/\d+-.*-\d+-\d+)">/;
  const matches = pageSource?.match(regex);
  if (!(matches && matches[0] && matches[1])) {
    return null;
  }
  const domainLink = matches !== null ? matches[1].split('"')[0] : null;
  console.log("Domain link", domainLink);
  return domainLink;
}

async function getDomainPropertyId(domainLink: string) {
  const pageSource = await getPageSource(domainLink);
  let domainPropertyId;
  if (typeof pageSource === "string") {
    const regex = /propertyId":"(.+?)"/;
    const matches = pageSource.match(regex);
    domainPropertyId = matches !== null ? matches[1].split('"')[0] : null;
  }
  console.log("Domain property ID", domainPropertyId);

  return domainPropertyId;
}

async function getCommBankPriceEval(domainPropertyId: string) {
  const pageSource = await getPageSource(
    `https://www.commbank.com.au/digital/home-buying/property/${domainPropertyId}?byAddress=true`
  );
  const regex = /displayPrice&quot;:\&quot;\$(\d+,\d+)\&/;
  const matches = (pageSource as string).match(regex);
  const commBankPriceEval = matches !== null ? matches[1].split('"')[0] : null;
  console.log("CommBank price eval", commBankPriceEval);
  return commBankPriceEval;
}
