import instance from "./axios";

export const getCategoryAllProducts = async (
  category: string,
  page: number | string
) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return await instance.get(`/api/${category}/allproducts?page=${page}`);
};

export const getAllCategories = async () => {
  return await instance.get("/api/categories");
};

export const getCategoryById = async (id: number | string) => {
  return await instance.get(`/api/categories/${id}`);
};
