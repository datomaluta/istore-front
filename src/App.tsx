import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import Computers from "./pages/Computers";
import SubCategory from "./pages/SubCategory";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserInfo } from "../services/auth";
import { saveAuthorizedUser } from "./store/userSlice/UserSlice";
import CheckAuthAndAdmin from "./components/auth/checkAuthAndAdmin/CheckAuthAndAdmin";
import AdminSubCategory from "./pages/admin/subCategory/AdminSubCategory";
import AddProduct from "./pages/admin/addProduct/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { RootState } from "./store/store";
import { useEffect, useState } from "react";
import Search from "./pages/Search";

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
      // On the first render, do nothing related to local storage
      setIsInitial(false);
      return;
    }
    // For subsequent renders, update local storage when the 'products' array changes
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
        <Route path="/" element={<Home />} />
        {/* <Route path="/computers/:page" element={<Computers />} /> */}
        <Route path="/computers/page/:page" element={<Computers />} />

        <Route path="/parts" element={<Computers />} />
        <Route path="/peripherals" element={<Computers />} />
        <Route
          path="/computers/:subCategory/page/:page"
          element={<SubCategory />}
        />

        <Route path="/product/:category/:id" element={<ProductDetails />} />

        {/* admin */}
        <Route
          path="/admin/dashboard"
          element={
            <CheckAuthAndAdmin admin={true}>
              <Dashboard />
            </CheckAuthAndAdmin>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admin/:category/:subCategory/page/:page"
          element={<AdminSubCategory />}
        />
        <Route
          path="/admin/product/add/:subCategory"
          element={<AddProduct />}
        />
        <Route path="/admin/product/:id/edit" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/page/:page" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
