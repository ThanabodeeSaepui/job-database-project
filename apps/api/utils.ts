export const getPage = (page: String | undefined | any) => {
  return Number(page) > 0 ? Math.floor(Number(page)) : 1;
};
