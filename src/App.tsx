import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import Computers from "./pages/Computers";
import SubCategory from "./pages/SubCategory";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
  const { i18n } = useTranslation();

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
