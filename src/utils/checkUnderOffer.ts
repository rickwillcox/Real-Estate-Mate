import { imageBadgeElement } from "./documentElements";

/**
 *
 * @summary checks if the badge on the image is under offer.
 * @returns {boolean} true if the badge is under offer, false otherwise.
 *
 */
export function checkUnderOffer(): boolean {
  return imageBadgeElement().innerHTML.includes("Under Offer");
}
