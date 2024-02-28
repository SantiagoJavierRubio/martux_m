export function convertToSrc(url?: string) {
  if (!url) return "";
  let id = url.split("d/")[1]?.split("/view")[0];
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000";
}
