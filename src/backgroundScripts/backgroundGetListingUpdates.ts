import { endpoint } from "@src/consts/endpoint";

export async function getListingUpdatesHelper(address: string) {
  // add address to the body of the request

  const encodedAddress = encodeURIComponent(address);
  console.log(encodedAddress);

  const response = await fetch(
    `${endpoint}/getPropertyListingUpdates?address=${encodedAddress}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("AFTER", response);
  const data = await response.json();
  return data;
}
