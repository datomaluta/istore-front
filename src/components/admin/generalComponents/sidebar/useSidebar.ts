import { useState } from "react";

const useSidebar = () => {
  const [categoryIsClicked, setCategoryIsClicked] = useState(false);

  const categoryClickHandler = () => {
    setCategoryIsClicked((currState) => !currState);
  };

  return { categoryIsClicked, categoryClickHandler };
};

export default useSidebar;
