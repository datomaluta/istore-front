import { useState } from "react";

const useAdminLayout = () => {
  const [categoryIsClicked, setCategoryIsClicked] = useState(false);

  const categoryClickHandler = () => {
    setCategoryIsClicked((currState) => !currState);
  };

  return { categoryIsClicked, categoryClickHandler };
};

export default useAdminLayout;
