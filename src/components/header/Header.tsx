import BasketIcon from "../icons/BasketIcon";
import SearchIcon from "../icons/SearchIcon";
import Theme from "../sharedComponents/Theme";
import geoFlag from "../../assets/images/geo.png";
import usaFlag from "../../assets/images/usa.png";
import { Link, useNavigate } from "react-router-dom";
import BurgerIcon from "../icons/BurgerIcon";
import MobileHeaderContent from "./MobileHaderContent";
import { categories } from "../../data/Categories";
import useHeader from "./useHeader";
import { AnimatePresence } from "framer-motion";

import SignIn from "../auth/signIn/SignIn";
import SignUp from "../auth/signUp/SignUp";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserIcon from "../icons/UserIcon";
import { useState } from "react";
import ProfileIcon from "../icons/ProfileIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { logoutUser } from "../../../services/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DashboardIcon from "../icons/DashboardIcon";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Header = () => {
  const {
    mobileHeaderIsVisible,
    mobileHeaderVisibilityHandler,
    lngs,
    i18n,
    inputIsVisible,
    placeholderText,
    inputIsVisibleHandler,
    isBottomFixed,
    setHoveredCategory,
    t,
    hoveredCategory,
    hoveredCategoryObject,
    closeSignInOpenSignUpHandler,
    closeSignUpOpenSignInHandler,
    signInModalIsVisible,
    setSignInModalIsVisible,
    signUpModalIsVisible,
    setSignUpModalIsVisible,
  } = useHeader();

  const navigate = useNavigate();

  const [authUserActionsVisible, setAuthUserActionsVisible] = useState(false);
  const authorizedUser = useSelector(
    (state: RootState) => state.user.authorizedUser
  );
  const queryClient = useQueryClient();

  const { refetch } = useQuery({
    queryKey: ["logoutUser"],
    queryFn: () => logoutUser(),
    onSuccess: () => {
      setAuthUserActionsVisible(false);
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: () => {
      // dispatch(saveAuthorizedUser(null));
    },
    enabled: false,
  });

  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  const { register, handleSubmit } = useForm();

  // 163969

  const submitHandler = (data: any) => {
    navigate(`/search/page/1?query=${data.search_query}`);
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-primary w-full  text-white z-50 px-2">
      <AnimatePresence>
        {mobileHeaderIsVisible && (
          <MobileHeaderContent
            mobileHeaderVisibilityHandler={mobileHeaderVisibilityHandler}
          />
        )}
        {signInModalIsVisible && (
          <SignIn
            setSignInModalIsVisible={setSignInModalIsVisible}
            closeSignInOpenSignUpHandler={closeSignInOpenSignUpHandler}
          />
        )}
        {signUpModalIsVisible && (
          <SignUp
            closeSignUpOpenSignInHandler={closeSignUpOpenSignInHandler}
            setSignUpModalIsVisible={setSignUpModalIsVisible}
          />
        )}
      </AnimatePresence>

      <div className="max-w-[75rem] bg-red-40 mx-auto flex items-center justify-between border-b-[0.05rem] pb-2 py-2  ">
        <Link
          to={"/"}
          className="text-5xl sm:text-4xl font-bold text-white font-sans"
        >
          istore
        </Link>
        <div className="flex gap-2 items-center">
          {lngs.map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className={`w-[34px] sm:w-[32px]  h-[34px] sm:h-[32px] ${
                i18n.resolvedLanguage === lng ? "hidden" : "block"
              } overflow-hidden`}
            >
              <img
                src={lng === "ka" ? usaFlag : geoFlag}
                alt="locale"
                className={`w-full h-full  object-cover overflow-hidden  ${
                  lng === "ka"
                    ? "animate-smoothFallFromBottom"
                    : "animate-smoothFallFromTop"
                }`}
              />
            </button>
          ))}
          <Theme />
          <AnimatePresence>
            {inputIsVisible && (
              <form onSubmit={handleSubmit(submitHandler)} className="relative">
                <motion.input
                  {...register("search_query")}
                  className="rounded-full w-[15rem] sm:w-[12rem] text-sm px-4 font-sans py-2 focus:outline-none text-gray-800
                md:absolute md:top-0 md:right-0 md:-translate-y-1/2"
                  placeholder={placeholderText}
                  type="text"
                  initial={{ width: 0 }}
                  animate={{
                    transition: { duration: 0.2 },
                    width: "200px",
                  }}
                  exit={{
                    transition: { duration: 0.2 },
                    width: 0,
                  }}
                />

                <button className="bg-primary w-8 rounded-full flex items-center justify-center h-8 absolute top-1/2 -translate-y-1/2 right-0.5 md:hidden">
                  <SearchIcon />
                </button>
              </form>
            )}
          </AnimatePresence>
          <button
            className="bg-primary h-8 sm:h-7 w-8 sm:w-7 rounded-full  items-center justify-center md:flex hidden"
            onClick={inputIsVisibleHandler}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <div
        className={` mx-auto flex  justify-between  items-center bg-primary transition-all h-[4rem]   ${
          isBottomFixed ? "fixed top-0 left-0 w-full px-2" : ""
        }`}
        id="myHeader"
      >
        <div className="flex justify-between md:w-full w-[75rem] mx-auto relative ">
          <nav
            className={`flex gap-4  lg:hidden ${
              i18n.resolvedLanguage === "ka" ? "font-bpg" : "font-sans"
            }`}
          >
            <Link
              className={`${
                location.pathname === "/" ? "border-b border-white" : ""
              }`}
              to="/"
            >
              {t("home")}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                to={category.href}
                className={`${
                  location.pathname.split("/")[1] === category.fullName
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
              {t("about_us")}
            </Link>

            <Link
              className="hover:text-neutral-200 border-b border-transparent hover:border-white"
              to="/"
            >
              {t("contact")}
            </Link>

            {hoveredCategory && (
              <div
                className={` bg-primary text-white overflow-hidden
              rounded-b w-[27rem] lg:w-[24rem] h-72 absolute  bottom-0  translate-y-full
               animate-smoothHeightGrow py-4 px-2 pt-6 flex flex-col`}
                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {categories
                  .find((category) => category.id === hoveredCategory)
                  ?.subCategories?.map((subCat) => (
                    <Link
                      key={subCat}
                      to={`/${hoveredCategoryObject?.fullName}/${subCat}/page/1`}
                      className="mb-2 border-b border-white py-2 hover:text-neutral-200 "
                    >
                      {t(subCat)}
                    </Link>
                  ))}
              </div>
            )}
          </nav>

          <button
            className="lg:block hidden "
            onClick={mobileHeaderVisibilityHandler}
          >
            <BurgerIcon />
          </button>
          <div className="flex items-center">
            <Link to={"/cart"} className="mr-6 sm:mr-4 relative">
              <span
                className="w-5 h-5 bg-white  absolute -top-2 -right-2  rounded-full
             text-gray-800 text-[0.7rem] flex items-center justify-center"
              >
                {totalQuantity}
              </span>
              <BasketIcon />
            </Link>
            {authorizedUser ? (
              <button
                onClick={() =>
                  setAuthUserActionsVisible((prevState) => !prevState)
                }
                className="border-l pl-4 sm:pl-2 sm:text-sm"
              >
                <UserIcon />
              </button>
            ) : (
              <button
                onClick={() => setSignInModalIsVisible(true)}
                className="border-l pl-4 sm:pl-2 sm:text-sm"
              >
                {t("login")}
              </button>
            )}
            {authUserActionsVisible && authorizedUser && (
              <div
                className="flex flex-col gap-3 items-start bg-primary  px-3 py-4
                  rounded absolute -bottom-2 right-0 translate-y-full shadow-lg z-[99999]"
              >
                <Link className="flex gap-2 hover:text-gray-300 " to="/profile">
                  <ProfileIcon />
                  My profile
                </Link>
                {authorizedUser.isAdmin ? (
                  <Link
                    className="flex gap-2 hover:text-gray-300"
                    to="/admin/dashboard"
                  >
                    <DashboardIcon />
                    Admin Panel
                  </Link>
                ) : (
                  ""
                )}
                <button
                  onClick={() => refetch()}
                  className="flex gap-2 hover:text-gray-300 border-t border-greyforBorder mt-3 pt-4 w-full"
                >
                  <LogoutIcon />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
