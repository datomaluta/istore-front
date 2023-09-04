import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";

export type PropsType = {
  closeSignUpOpenSignInHandler: () => void;
  setSignUpModalIsVisible: Dispatch<SetStateAction<boolean>>;
};

export type FormValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type customAxiosError = AxiosError<{
  response?: { status: number };
}>;
