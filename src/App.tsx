import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import Computers from "./pages/Computers";
import SubCategory from "./pages/SubCategory";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserInfo } from "../services/auth";
import { saveAuthorizedUser } from "./store/userSlice/UserSlice";
import CheckAuthAndAdmin from "./components/auth/checkAuthAndAdmin/CheckAuthAndAdmin";
import AdminSubCategory from "./pages/admin/subCategory/AdminSubCategory";
import AddProduct from "./pages/admin/addProduct/AddProduct";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

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

  return (
    <div
      className={`bg-neutral-100 dark:bg-darkbg transition-all text-greyforText dark:text-gray-300 ${
        i18n.resolvedLanguage === "ka" ? "font-bpg" : "font-sans"
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

        {/* admin */}
        <Route
          path="/admin/dashboard"
          element={
            <CheckAuthAndAdmin admin={true}>
              <Dashboard />
            </CheckAuthAndAdmin>
          }
        />
        <Route path="/admin/profile" element={<Dashboard />} />
        <Route
          path="/admin/:category/:subCategory/page/:page"
          element={<AdminSubCategory />}
        />
        <Route path="/admin/product/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
