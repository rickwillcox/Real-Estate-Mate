import { NBNResponse } from "@src/interfaces";

export async function nbnHelper(address: string): Promise<NBNResponse | null> {
  address = address.replace(/,/g, "").replace(/ +/g, " ");
  address = address.replace(/ /g, "+");
  try {
    const nbnData = await fetch(
      `https://nbn-service-check.deta.dev/check?address=${address}`
    );
    const data = await nbnData.json();
    console.log("NBN", data.body);
    return data.body as NBNResponse;
  } catch {
    return null;
  }
}
