import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { color } from "framer-motion";
import { useDispatch } from "react-redux";
import { saveTheme } from "../../store/themeSlice/ThemeSlice";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");
  const dispatch = useDispatch();

  useEffect(() => {
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
    dispatch(saveTheme(colorMode));
  }, [colorMode, dispatch]);

  return [colorMode, setColorMode];
};

export default useColorMode;
