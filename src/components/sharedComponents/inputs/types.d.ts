import { UseFormRegister } from "react-hook-form";

export interface CustomInputPropsType {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  backErrorStatusCode?: number;
  frontError?: any;
  register: UseFormRegister<{
    name: string;
    email: string;
    password: string;
    confirm_password: string;
  }>;
}
