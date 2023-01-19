import { UpdatePropertyListing } from "@src/interfaces";

export async function updatePropertyListing(args: UpdatePropertyListing) {
  const { address, link, minPrice, maxPrice, title } = args;
  console.log(
    "updating real estate listing",
    address,
    link,
    minPrice,
    maxPrice,
    title
  );
  return await fetch("http://localhost:3000/updatePropertyListing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      link: link,
      minPrice: minPrice,
      maxPrice: maxPrice,
      title: title,
    }),
  });
}
