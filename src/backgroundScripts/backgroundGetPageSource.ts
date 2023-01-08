export async function getPageSource(url: string) {
  try {
    const response = await fetch(url);
    const pageSource = await response.text();
    return pageSource;
  } catch (error) {}
  return null;
}
