function createGetAddressFunction(): (getFullAddress: boolean) => string {
  let address: string;
  let fullAddress: string;
  return function (getFullAddress: boolean): string {
    if (getFullAddress && fullAddress) return fullAddress;
    if (address) return address;
    const metaTags = document.getElementsByTagName("meta");
    fullAddress = Array.prototype.reduce.call(
      metaTags,
      function (acc, metaTag) {
        if (metaTag.getAttribute("property") == "og:title") {
          return metaTag.getAttribute("content");
        } else {
          return acc;
        }
      },
      ""
    ) as string;
    if (getFullAddress) return fullAddress;
    const splitAddress = fullAddress.split(",");
    address = splitAddress[0] + ", " + splitAddress[1];
    return address;
  };
}

export const getAddress = createGetAddressFunction();
