import useColorMode from "../../hooks/theme/useColorMode";
import LightModeIcon from "../icons/LightModeIcon";
import NightModeIcon from "../icons/NightModeIcon";

const Theme = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className="h-8 sm:h-7 w-8 sm:w-7 flex items-center justify-center bg-white rounded-full group hover:bg-tint overflow-hidden"
    >
      {colorMode === "dark" ? <NightModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default Theme;
