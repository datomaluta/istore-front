import instance from "./axios";

export const addProduct = async (data: any) => {
  return await instance.post("/api/product", data);
};

// export const getProductById = async (id) => {
//   return await instance.get(`/api/product/${id}`);
// };

export const getProductById = async (id: any) => {
  // Simulate a 3-second loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Perform the actual API call
  return await instance.get(`/api/product/${id}`);
};

export const editProduct = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await instance.post(`/api/product/${data.id}`, data.data);
};

export const deleteProduct = async (id: number | string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await instance.delete(`/api/product/${id}`);
};

export const searchProducts = async (data: {
  data: { search_query: string };
  page: string | number;
}) => {
  return await instance.post(`/api/search?page=${data.page}`, data.data);
};
