import instance from "./axios";

export const getCategoryAllProducts = async (category: string) => {
  return await instance.get(`/api/${category}/allproducts`);
};
