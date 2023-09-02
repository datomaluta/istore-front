import { Dispatch, ReactNode, SetStateAction } from "react";

export type PropsType = {
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
