import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`bg-neutral-100 dark:bg-darkbg transition-all text-neutral-900 dark:text-white ${
        i18n.resolvedLanguage === "ka" ? "font-bpg" : "font-sans"
      } relative`}
    >
      <div className="max-w-[75rem] mx-auto bg-white dark:bg-neutral-900 min-h-screen transition-all">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
