import instance from "./axios";

export const addProduct = async (data) => {
  return await instance.post("/api/product", data);
};
