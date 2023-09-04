import instance from "./axios";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await instance.post(`/api/register`, data);
};
