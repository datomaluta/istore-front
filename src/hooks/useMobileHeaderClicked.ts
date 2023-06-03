import { useState } from "react";

const useMobileHeaderClicked = () => {
  const [categoryIsClicked, setCategoryIsClicked] = useState(false);

  const categoryClickHandler = () => {
    setCategoryIsClicked((currState) => !currState);
  };

  return { categoryIsClicked, categoryClickHandler };
};

export default useMobileHeaderClicked;
