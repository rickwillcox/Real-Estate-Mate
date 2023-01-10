export function updateListing(
  address: string,
  link: string,
  price: string,
  minPrice: string,
  maxPrice: string,
  title: string
) {
  console.log(
    "updating real estate listing",
    address,
    link,
    price,
    minPrice,
    maxPrice,
    title
  );
  fetch("http://localhost:3000/updateListing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      link: link,
      price: price,
      minPrice: minPrice,
      maxPrice: maxPrice,
      title: title,
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
