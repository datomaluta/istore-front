import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import useFixedHeader from "../../hooks/useFixedHeader";
import { categories } from "../../data/Categories";
import { useLocation } from "react-router-dom";

const useHeader = () => {
  const { t, i18n } = useTranslation();
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mobileHeaderIsVisible, setMobileHeaderIsVisible] = useState(false);
  const [signInModalIsVisible, setSignInModalIsVisible] = useState(false);
  const [signUpModalIsVisible, setSignUpModalIsVisible] = useState(false);
  const { isBottomFixed } = useFixedHeader();
  const { screenWidth } = useScreenWidth();
  const placeholderText = t("search_msg");
  const lngs = ["en", "ka"];

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

  const hoveredCategoryObject = categories?.find(
    (category) => category.id === hoveredCategory
  );

  const closeSignInOpenSignUpHandler = () => {
    setSignInModalIsVisible(false);
    setSignUpModalIsVisible(true);
  };
  const closeSignUpOpenSignInHandler = () => {
    setSignUpModalIsVisible(false);
    setSignInModalIsVisible(true);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileHeaderIsVisible(false);
  }, [pathname]);

  return {
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
  };
};

export default useHeader;
