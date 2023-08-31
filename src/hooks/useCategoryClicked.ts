import { useState } from "react";

const useCategoryClicked = () => {
  const [categoryIsClicked, setCategoryIsClicked] = useState(false);

  const categoryClickHandler = () => {
    setCategoryIsClicked((currState) => !currState);
  };

  return { categoryIsClicked, categoryClickHandler };
};

export default useCategoryClicked;
