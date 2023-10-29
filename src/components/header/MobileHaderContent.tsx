import { Link } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import { useTranslation } from "react-i18next";
import DownArrowIcon from "../icons/DownArrowIcon";
import { motion } from "framer-motion";
import useCategoryClicked from "../../hooks/useCategoryClicked";

const MobileHeaderContent = (props: {
  mobileHeaderVisibilityHandler: () => void;
}) => {
  const {
    categoryIsClicked: compsCategoryIsClicked,
    categoryClickHandler: compsCategoryClickHandler,
  } = useCategoryClicked();

  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, x: -500, transition: { duration: 0.2 } }}
      className="max-w-screen min-h-screen bg-neutral-800  fixed top-0 left-0 right-0 z-50 
    flex flex-col items-center pt-40 gap-2"
    >
      <h1 className="text-5xl sm:text-4xl font-bold text-white font-sans">
        istore
      </h1>
      <button
        className="absolute top-4 left-4"
        onClick={props.mobileHeaderVisibilityHandler}
      >
        <CloseIcon />
      </button>
      <div>
        <div className="flex gap-2 w-[9rem] justify-center">
          <Link to="/">{t("comps")}</Link>
          <button onClick={compsCategoryClickHandler}>
            <DownArrowIcon />
          </button>
        </div>
        {compsCategoryIsClicked && (
          <div
            className={`flex flex-col gap-1 ${
              i18n.resolvedLanguage === "ka"
                ? "animate-smoothTextAppearka w-[9rem]"
                : "animate-smoothTextAppearForThreeCategory"
            } overflow-hidden text-tint h-0  text-center`}
          >
            <Link className="text-center " to="/">
              • {t("laptops")}
            </Link>
            <Link className="text-center " to="/">
              • {t("pc")}
            </Link>
            <Link to="/">• {t("all_in_one")}</Link>
          </div>
        )}
      </div>

      <Link to="/">{t("monitor")}</Link>
      <Link to="/">{t("about_us")}</Link>
    </motion.div>
  );
};

export default MobileHeaderContent;
