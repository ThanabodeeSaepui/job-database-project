export const getPage = (page: String | undefined | any) => {
  return Number(page) > 0 ? Math.floor(Number(page)) : 1;
};

export const queryToString = (text: String | undefined | any) => {
  return text !== undefined ? String(text).replace("_", " ") : "";
};
