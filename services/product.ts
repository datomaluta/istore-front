import instance from "./axios";

export const addProduct = async (data) => {
  return await instance.post("/api/product", data);
};

// export const getProductById = async (id) => {
//   return await instance.get(`/api/product/${id}`);
// };

export const getProductById = async (id) => {
  // Simulate a 3-second loading delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Perform the actual API call
  return await instance.get(`/api/product/${id}`);
};

export const editProduct = async (data) => {
  return await instance.post(`/api/product/${data.id}`, data.data);
};

export const deleteProduct = async (id) => {
  return await instance.delete(`/api/product/${id}`);
};
