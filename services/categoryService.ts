import instance from "./axios";

export const getCategoryAllProducts = async (
  category: string,
  page: number | string
) => {
  return await instance.get(`/api/${category}/allproducts?page=${page}`);
};

export const getAllCategories = async () => {
  return await instance.get("/api/categories");
};

export const getCategoryById = async (id) => {
  return await instance.get(`/api/categories/${id}`);
};
