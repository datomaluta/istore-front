import { useState } from "react";

const useCategoryClicked = () => {
  const [categoryIsClicked, setCategoryIsClicked] = useState(true);

  const categoryClickHandler = () => {
    setCategoryIsClicked((currState) => !currState);
  };

  return { categoryIsClicked, categoryClickHandler };
};

export default useCategoryClicked;
