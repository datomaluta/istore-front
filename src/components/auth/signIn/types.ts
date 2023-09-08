import { Dispatch, SetStateAction } from "react";

export type PropsType = {
  closeSignInOpenSignUpHandler: () => void;
  setSignInModalIsVisible: Dispatch<SetStateAction<boolean>>;
};

export type FormValues = {
  email: string;
  password: string;
};
