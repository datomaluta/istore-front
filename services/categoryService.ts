import instance from "./axios";

export const getCategoryAllProducts = async (
  category: string,
  page: number | string
) => {
  return await instance.get(`/api/${category}/allproducts?page=${page}`);
};
