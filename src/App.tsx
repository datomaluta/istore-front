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
import { RootState } from "./store/store"; // Import the RootState type from your store module

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const userQuery = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getAuthenticatedUserInfo(),
    onSuccess: (data) => {
      console.log("rendered");
      dispatch(saveAuthorizedUser(data.data));
    },
  });

  const authorizedUser = useSelector(
    (state: RootState) => state.user.authorizedUser
  );

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
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Dashboard />} />
        <Route path="/admin/computers/:subcategory" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
