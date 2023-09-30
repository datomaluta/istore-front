import instance from "./axios";

export const addProduct = async (data) => {
  return await instance.post("/api/product", data);
};

export const getProductById = async (id) => {
  return await instance.get(`/api/product/${id}`);
};

export const editProduct = async (data) => {
  return await instance.post(`/api/product/${data.id}`, data.data);
};

export const deleteProduct = async (id) => {
  return await instance.delete(`/api/product/${id}`);
};
