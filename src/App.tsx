import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserInfo } from "../services/auth";
import { saveAuthorizedUser } from "./store/userSlice/UserSlice";

import { RootState } from "./store/store";
import { useEffect, useState } from "react";
import { routes } from "./routes/routes";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { products, totalQuantity, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const [isInitial, setIsInitial] = useState(true);

  useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getAuthenticatedUserInfo(),
    retry: 1,
    onSuccess: (data) => {
      dispatch(saveAuthorizedUser(data.data));
    },
    onError: () => {
      dispatch(saveAuthorizedUser(false));
    },
  });

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    localStorage.setItem(
      "cartState",
      JSON.stringify({ products, totalAmount, totalQuantity })
    );
  }, [isInitial, products, totalAmount, totalQuantity]);

  return (
    <div
      className={`bg-neutral-100 dark:bg-darkbg transition-all text-greyforText dark:text-gray-300 ${
        i18n.resolvedLanguage === "ka" ? "font-arial" : "font-sans"
      } relative`}
    >
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
