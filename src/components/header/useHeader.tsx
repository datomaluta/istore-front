import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import useFixedHeader from "../../hooks/useFixedHeader";

const useHeader = () => {
  const { t, i18n } = useTranslation();
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mobileHeaderIsVisible, setMobileHeaderIsVisible] = useState(false);
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
  };
};

export default useHeader;
