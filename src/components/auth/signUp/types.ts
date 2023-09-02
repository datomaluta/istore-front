import { Dispatch, SetStateAction } from "react";

export type PropsType = {
  closeSignUpOpenSignInHandler: () => void;
  setSignUpModalIsVisible: Dispatch<SetStateAction<boolean>>;
};
