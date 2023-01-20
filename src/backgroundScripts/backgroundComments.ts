import { endpoint } from "@src/consts/endpoint";

export function createNewComment(comment: string, address: string) {
  fetch(`${endpoint}/createNewComment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment: comment,
      realEstateListingAddress: address,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // do something with the response data
    })
    .catch((error) => {
      // handle any errors
    });
}
