export async function getListingUpdatesHelper(address: string) {
  // add address to the body of the request
  const response = await fetch(
    `http://localhost:3000/getRealEstateListingUpdates`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address.toString(),
      }),
    }
  );
  const data = await response.json();
  return data;
}
