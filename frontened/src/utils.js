export const getURl = (path) => {
  return new URL(`assets/${path}`, import.meta.url).href;
};
