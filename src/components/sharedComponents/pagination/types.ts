import { Dispatch, SetStateAction } from "react";

export type PropsType = {
  total: number;
  currentPage: number | string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
