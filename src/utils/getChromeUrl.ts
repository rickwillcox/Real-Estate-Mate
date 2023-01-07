export function getChromeUrl(url: string) {
  return `${chrome.runtime.getURL(url)}`;
}
