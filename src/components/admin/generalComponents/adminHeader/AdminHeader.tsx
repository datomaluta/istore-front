import { Link } from "react-router-dom";
import BurgerIcon from "../../../icons/BurgerIcon";
import DownArrowIcon from "../../../icons/DownArrowIcon";
import Theme from "../../../sharedComponents/Theme";
import ProfileIcon from "../../../icons/ProfileIcon";
import LogoutIcon from "../../../icons/LogoutIcon";
import avatar from "../../../../assets/images/avatar.webp";
import { PropsType } from "./types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import geoFlag from "../../../../assets/images/geo.png";
import usaFlag from "../../../../assets/images/usa.png";

const AdminHeader = ({ setSidebarVisible }: PropsType) => {
  const [userDropDownVisible, setUserDropDownVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const lngs = ["en", "ka"];
  return (
    <header
      className=" flex items-center py-4 px-4 bg-white dark:bg-adminBgLightDark shadow-lg 
    justify-between fixed top-0 left-0 w-full pl-72 lg:pl-4 z-50"
    >
      <div className="flex gap-2 ml-4 lg:ml-0 items-center">
        <button
          className="text-black hidden lg:inline-block bg-adminBgLightDark rounded p-1"
          onClick={() => setSidebarVisible(true)}
        >
          <BurgerIcon />
        </button>
        <Theme />
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
              src={lng === "ka" ? usaFlag : geoFlag}
              alt="locale"
              className={`w-full h-full object-cover overflow-hidden  ${
                lng === "ka"
                  ? "animate-smoothFallFromBottom"
                  : "animate-smoothFallFromTop"
              }`}
            />
          </button>
        ))}
      </div>
      <button
        onClick={() => setUserDropDownVisible((prev) => !prev)}
        className="flex gap-2 items-center "
      >
        <div className="text-right">
          <p className="text-sm">Dato Maluta</p>
          <p className="text-xs text-gray-400">Manager</p>
        </div>
        <div className="h-12">
          <img className="h-full" src={avatar} alt="avatar" />
        </div>
        <DownArrowIcon />
      </button>

      {userDropDownVisible && (
        <div
          className="flex flex-col gap-2 items-start bg-white dark:bg-adminBgLightDark px-3 py-4
      rounded absolute -bottom-2 right-4 translate-y-full shadow-lg z-[99999]"
        >
          <Link className="flex gap-2 hover:text-tint " to="#">
            <ProfileIcon />
            My profile
          </Link>
          <button className="flex gap-2 hover:text-tint border-t border-greyforBorder mt-3 pt-4 w-full">
            <LogoutIcon />
            Log out
          </button>
        </div>
      )}
    </header>
  );
};
export default AdminHeader;
