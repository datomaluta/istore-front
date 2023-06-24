import { useTranslation } from "react-i18next";
import BasketIcon from "../icons/BasketIcon";
import SearchIcon from "../icons/SearchIcon";
import Theme from "../sharedComponents/Theme";
import geoFlag from "../../assets/images/geo.png";
import usaFlag from "../../assets/images/usa.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BurgerIcon from "../icons/BurgerIcon";
import useScreenWidth from "../../hooks/useScreenWidth";
import useFixedHeader from "../../hooks/useFixedHeader";
import MobileHeaderContent from "./MobileHaderContent";
import { categories } from "../../data/Categories";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mobileHeaderIsVisible, setMobileHeaderIsVisible] = useState(false);
  const { isBottomFixed } = useFixedHeader();
  const { screenWidth } = useScreenWidth();
  const placeholderText = t("search_msg");
  const lngs = ["en", "ka"];
  const location = useLocation();

  const inputIsVisibleHandler = (): void => {
    setInputIsVisible((currState) => !currState);
  };

  useEffect(() => {
    function handleScreenWidthChange() {
      if (screenWidth <= 800) {
        setInputIsVisible(false);
      }
    }
    handleScreenWidthChange();
    return () => {
      setInputIsVisible(true);
    };
  }, [screenWidth]);

  const mobileHeaderVisibilityHandler = () => {
    setMobileHeaderIsVisible((currState) => !currState);
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-primary w-full  text-white z-50">
      {mobileHeaderIsVisible && (
        <MobileHeaderContent
          mobileHeaderVisibilityHandler={mobileHeaderVisibilityHandler}
        />
      )}
      <div className="max-w-[75rem] bg-red-40 mx-auto flex items-center justify-between border-b-[0.05rem] pb-2 py-2 md:px-2">
        <h1 className="text-5xl sm:text-4xl font-bold text-white font-sans">
          istore
        </h1>
        <div className="flex gap-2 items-center">
          {lngs.map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className={`w-8 sm:w-7 h-8 sm:h-7 ${
                i18n.resolvedLanguage === lng ? "hidden" : "block"
              } overflow-hidden`}
            >
              <img
                src={lng === "ka" ? geoFlag : usaFlag}
                alt="locale"
                className={`w-full h-full object-cover overflow-hidden ${
                  lng === "ka"
                    ? "animate-smoothFallFromBottom"
                    : "animate-smoothFallFromTop"
                }`}
              />
            </button>
          ))}
          <Theme />
          {inputIsVisible && (
            <form action="" className="relative">
              <input
                className="rounded w-[15rem] sm:w-[12rem] text-sm px-2 py-2 focus:outline-none text-gray-800
                md:absolute md:top-0 md:right-0 md:-translate-y-1/2 md:animate-smoothLengthGrow font-arial"
                placeholder={placeholderText}
                type="text"
              />
              <button
                className="bg-tint w-8 rounded flex items-center justify-center h-8 absolute top-1/2 -translate-y-1/2 right-0.5 md:hidden"
                onClick={inputIsVisibleHandler}
              >
                <SearchIcon />
              </button>
            </form>
          )}
          <button
            className="bg-tint h-8 sm:h-7 w-8 sm:w-7 rounded-full  items-center justify-center md:flex hidden"
            onClick={inputIsVisibleHandler}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <div
        className={`px-2 mx-auto flex justify-between  items-center bg-sky-400 transition-all h-[4rem]  ${
          isBottomFixed ? "fixed top-0 left-0 w-full " : ""
        }`}
        id="myHeader"
      >
        <div className="flex justify-between md:w-full w-[75rem] mx-auto relative">
          <nav
            className={`flex gap-4  md:hidden ${
              i18n.resolvedLanguage === "ka" ? "font-bpg" : "font-sans"
            }`}
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                to={category.href}
                className={`${
                  "/" + location.pathname.split("/")[1] === category.href
                    ? "border-b border-white"
                    : ""
                }`}
              >
                {t(category.name)}
              </Link>
            ))}
            <Link
              className="hover:text-neutral-200 border-b border-transparent hover:border-white"
              to="/"
            >
              {t("monitor")}
            </Link>
            <Link
              className="hover:text-neutral-200 border-b border-transparent hover:border-white"
              to="/"
            >
              {t("about_us")}
            </Link>

            {hoveredCategory && (
              <div
                className=" bg-sky-400 text-white overflow-hidden
              rounded-b w-[21rem] lg:w-[17rem] h-72 absolute  bottom-0  translate-y-full left-[0]
               animate-smoothHeightGrow py-4 px-2 pt-6 flex flex-col"
                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {categories
                  .find((category) => category.id === hoveredCategory)
                  ?.subCategories?.map((subCat) => (
                    <Link
                      key={subCat}
                      to="/"
                      className="mb-2 border-b border-white py-2 hover:text-neutral-200 "
                    >
                      {t(subCat)}
                    </Link>
                  ))}
              </div>
            )}
          </nav>

          <button
            className="md:block hidden"
            onClick={mobileHeaderVisibilityHandler}
          >
            <BurgerIcon />
          </button>
          <div className="flex items-center">
            <button className="mr-6 sm:mr-4 relative">
              <span
                className="w-5 h-5 bg-white  absolute -top-2 -right-2  rounded-full
             text-gray-800 text-[0.7rem] flex items-center justify-center"
              >
                12
              </span>
              <BasketIcon />
            </button>
            <button className="border-l pl-4 sm:pl-2 sm:text-sm">
              {t("login")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
