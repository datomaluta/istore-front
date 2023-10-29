import { Link } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import { useTranslation } from "react-i18next";
import DownArrowIcon from "../icons/DownArrowIcon";
import { motion } from "framer-motion";
import useCategoryClicked from "../../hooks/useCategoryClicked";

const MobileHeaderContent = (props: {
  mobileHeaderVisibilityHandler: () => void;
}) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, x: -500, transition: { duration: 0.2 } }}
      className="max-w-screen min-h-screen bg-neutral-800  fixed top-0 left-0 right-0 z-50 
    flex flex-col items-center pt-40 gap-2"
    >
      <h1 className="text-5xl mb-4 font-bold text-white font-sans">istore</h1>
      <button
        className="absolute top-4 left-4"
        onClick={props.mobileHeaderVisibilityHandler}
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col items-center gap-4 justify-center text-2xl">
        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/computers/page/1"
        >
          {t("comps")}
        </Link>
        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/computers/laptop/page/1"
        >
          {t("laptop")}
        </Link>
        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/computers/pc/page/1"
        >
          {t("pc")}
        </Link>
        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/computers/all_in_one/page/1"
        >
          {t("all_in_one")}
        </Link>

        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/about"
        >
          {t("about_us")}
        </Link>
        <Link
          className="border-b-2 border-tint px-2 py-1 w-full text-center"
          to="/contact"
        >
          {t("contact")}
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileHeaderContent;
