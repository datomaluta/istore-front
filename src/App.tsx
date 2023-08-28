import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import Computers from "./pages/Computers";
import SubCategory from "./pages/SubCategory";
import { AnimatePresence } from "framer-motion";
import React from "react";

function App() {
  const { i18n } = useTranslation();

  return (
    <div
      className={`bg-neutral-100 dark:bg-darkbg transition-all text-greyforText dark:text-gray-300 ${
        i18n.resolvedLanguage === "ka" ? "font-bpg" : "font-sans"
      } relative`}
    >
      <div className="max-w-[75rem] mx-auto bg-white dark:bg-neutral-900  min-h-screen transition-all">
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
