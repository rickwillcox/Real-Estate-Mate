function getInternetPrimaryAccessTechnologyElement() {
  let primaryAccessTechnology: HTMLAnchorElement;
  return function () {
    if (!primaryAccessTechnology) {
      primaryAccessTechnology = document.getElementsByClassName(
        "rem-internet-list-connection"
      )[0] as HTMLAnchorElement;
    }
    return primaryAccessTechnology;
  };
}

function getInternetCoExistanceElement() {
  let internetCoExistanceElement: HTMLAnchorElement;
  return function () {
    if (!internetCoExistanceElement) {
      internetCoExistanceElement = document.getElementsByClassName(
        "rem-internet-list-co-existance"
      )[0] as HTMLAnchorElement;
    }
    return internetCoExistanceElement;
  };
}

function getInternetCoExistanceFaceElement() {
  let internetCoExistanceFaceElement: HTMLElement;
  return function () {
    if (!internetCoExistanceFaceElement) {
      internetCoExistanceFaceElement = document.getElementsByClassName(
        "rem-internet-list-co-existance-face"
      )[0] as HTMLElement;
    }
    return internetCoExistanceFaceElement;
  };
}

function getInternetSpeedElement() {
  let internetSpeedElement: HTMLElement;
  return function () {
    if (!internetSpeedElement) {
      internetSpeedElement = document.getElementsByClassName(
        "rem-internet-list-speed"
      )[0] as HTMLElement;
    }
    return internetSpeedElement;
  };
}

function getInternetElementInner() {
  let internetElementInner: HTMLAnchorElement;
  return function () {
    if (!internetElementInner) {
      internetElementInner = document.getElementsByClassName(
        "rem-internet-not-available"
      )[0] as HTMLAnchorElement;
    }
    return internetElementInner;
  };
}

function getInternetElement() {
  let internetElement: HTMLElement;
  return function () {
    if (!internetElement) {
      internetElement = document.querySelector(".rem-internet") as HTMLElement;
    }
    return internetElement;
  };
}

function getInternetListElement() {
  let internetListElement: HTMLUListElement;
  return function () {
    if (!internetListElement) {
      internetListElement = document.getElementsByClassName(
        "rem-internet-list"
      )[0] as HTMLUListElement;
    }
    return internetListElement;
  };
}

function getBankEstElementInner() {
  let bankEstElementInner: HTMLAnchorElement;
  return function () {
    if (!bankEstElementInner) {
      bankEstElementInner = document.getElementsByClassName(
        "rem-bank-est-inner"
      )[0] as HTMLAnchorElement;
    }
    return bankEstElementInner;
  };
}

function getBankEstElement() {
  let bankEstElement: HTMLElement;
  return function () {
    if (!bankEstElement) {
      bankEstElement = document.querySelector(".rem-bank-est") as HTMLElement;
    }
    return bankEstElement;
  };
}

function getPriceRangeInnerElement() {
  let priceRangeInnerElement: HTMLElement;
  return function () {
    if (!priceRangeInnerElement) {
      priceRangeInnerElement = document.getElementsByClassName(
        "rem-price-range-inner"
      )[0] as HTMLElement;
    }
    return priceRangeInnerElement;
  };
}

function getPriceRangeElement() {
  let priceRangeElement: HTMLElement;
  return function () {
    if (!priceRangeElement) {
      priceRangeElement = document.querySelector(
        ".rem-price-range"
      ) as HTMLElement;
    }
    return priceRangeElement;
  };
}

function getRealEstateMateElement() {
  let realEstateMateElement: HTMLElement;
  return function () {
    if (!realEstateMateElement) {
      realEstateMateElement = document.getElementsByClassName(
        "real-estate-mate"
      )[0] as HTMLElement;
    }
    return realEstateMateElement;
  };
}

function getPropertyInfoMiddleContentElement() {
  let propertyInfoMiddleContentElement: HTMLElement;
  return function () {
    if (!propertyInfoMiddleContentElement) {
      propertyInfoMiddleContentElement = document.getElementsByClassName(
        "property-info__middle-content"
      )[0] as HTMLElement;
    }
    return propertyInfoMiddleContentElement;
  };
}

function getListingUpdatesElement() {
  let listingUpdatesElement: HTMLElement;
  return function () {
    if (!listingUpdatesElement) {
      listingUpdatesElement = document.querySelector(
        ".rem-listing-updates"
      ) as HTMLElement;
    }
    return listingUpdatesElement;
  };
}

function getLogoElement() {
  let logoElement: HTMLImageElement;
  return function () {
    if (!logoElement) {
      logoElement = document.getElementsByClassName(
        "rem-logo"
      )[0] as HTMLImageElement;
    }
    return logoElement;
  };
}

/**
 *
 * @summury the title and price are the same thing. So either a price or something like FOR SALE, AUCTION
 */
function getTitleElement() {
  let titleElement: HTMLElement;
  return function () {
    if (!titleElement) {
      titleElement = document.getElementsByClassName(
        "property-price property-info__price"
      )[0] as HTMLElement;
    }
    return titleElement;
  };
}

function getBankLoadingElement() {
  let bankLoadingElement: HTMLElement;
  return function () {
    if (!bankLoadingElement) {
      bankLoadingElement = document.getElementsByClassName(
        "rem-bank-loading"
      )[0] as HTMLElement;
    }
    return bankLoadingElement;
  };
}

function getInternetLoadingElement() {
  let internetLoadingElement: HTMLElement;
  return function () {
    if (!internetLoadingElement) {
      internetLoadingElement = document.getElementsByClassName(
        "rem-internet-loading"
      )[0] as HTMLElement;
    }
    return internetLoadingElement;
  };
}

function getListingUpdatesLoadingElement() {
  let listingUpdatesLoadingElement: HTMLElement;
  return function () {
    if (!listingUpdatesLoadingElement) {
      listingUpdatesLoadingElement = document.getElementsByClassName(
        "rem-listing-updates-loading"
      )[0] as HTMLElement;
    }
    return listingUpdatesLoadingElement;
  };
}

function getMainContainerTitleElement() {
  let mainContainerTitleElement: HTMLElement;
  return function () {
    if (!mainContainerTitleElement) {
      mainContainerTitleElement = document.getElementsByClassName(
        "rem-title"
      )[0] as HTMLElement;
    }
    return mainContainerTitleElement;
  };
}

function getAuctionElement() {
  let auctionElement: HTMLElement;
  return function () {
    if (!auctionElement) {
      auctionElement = document.getElementsByClassName(
        "GavelLg__StyledSVG-sc-1n8cns6-0 gKNrIq View__FilledGavel-sc-1ai73n3-2 iPSeZN"
      )[0] as HTMLElement;
    }
    return auctionElement;
  };
}

function getImageBadgeElement() {
  let imageBadgeElement: HTMLElement;
  return function () {
    if (!imageBadgeElement) {
      imageBadgeElement = document.getElementsByClassName(
        "styles__Content-sc-1l20hun-1 grvyUL"
      )[0] as HTMLElement;
    }
    return imageBadgeElement;
  };
}

function getTitleInfoElement() {
  let titleInfoElement: HTMLElement;
  return function () {
    if (!titleInfoElement) {
      titleInfoElement = document.getElementsByClassName(
        "property-price property-info__price"
      )[0] as HTMLElement;
    }
    return titleInfoElement;
  };
}

export const internetPrimaryAccessTechnologyElement =
  getInternetPrimaryAccessTechnologyElement();

export const internetCoExistanceElement = getInternetCoExistanceElement();

export const internetCoExistanceFaceElement =
  getInternetCoExistanceFaceElement();

export const internetSpeedElement = getInternetSpeedElement();

export const internetElementInner = getInternetElementInner();

export const internetElement = getInternetElement();

export const internetListElement = getInternetListElement();

export const bankEstElementInner = getBankEstElementInner();

export const bankEstElement = getBankEstElement();

export const priceRangeInnerElement = getPriceRangeInnerElement();

export const priceRangeElement = getPriceRangeElement();

export const realEstateMateElement = getRealEstateMateElement();

export const propertyInfoMiddleContentElement =
  getPropertyInfoMiddleContentElement();

export const listingUpdatesElement = getListingUpdatesElement();

export const logoElement = getLogoElement();

export const titleElement = getTitleElement();

export const bankLoadingElement = getBankLoadingElement();

export const internetLoadingElement = getInternetLoadingElement();

export const listingUpdatesLoadingElement = getListingUpdatesLoadingElement();

export const mainContainerTitleElement = getMainContainerTitleElement();

export const auctionElement = getAuctionElement();

export const imageBadgeElement = getImageBadgeElement();
