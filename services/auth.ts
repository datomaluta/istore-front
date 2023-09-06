import instance from "./axios";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await instance.post(`/api/register`, data);
};

export const getAuthenticatedUserInfo = async () => {
  return instance.get("/api/userinfo");
};

export const loginUser = async (data) => {
  return await instance.post("/api/login", data);
};
