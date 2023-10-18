import { useLocation } from "react-router-dom";
import CategoryIcon from "../../../../icons/CategoryIcon";
import DownUpArrowIcon from "../../../../icons/DownUpArrowIcon";
import { AnimatePresence, motion } from "framer-motion";
import SidebarNavLink from "../sidebarNavLink/SidebarNavLink";
import PcIcon from "../../../../icons/PcIcon";
import { PropsType } from "./types";
import LaptopIcon from "../../../../icons/LaptopIcon";
import AllInOneIcon from "../../../../icons/AllInOneIcon";
import { useTranslation } from "react-i18next";

const SidebarGroupNavLink = ({
  categoryClicked,
  categoryClickHandler,
}: PropsType) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <div className="">
      <button
        className={`${
          pathname.includes("computers") ? "bg-darkLightBlue" : ""
        } w-full text-start p-2 rounded hover:bg-darkLightBlue flex justify-between items-center transition-all`}
        onClick={categoryClickHandler}
      >
        <span className="flex gap-3 items-center">
          <CategoryIcon />
          {t("comps")}
        </span>
        <DownUpArrowIcon open={categoryClicked} />
      </button>
      <AnimatePresence>
        {categoryClicked ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{
              height: 0,
            }}
            className="pl-2  overflow-hidden"
          >
            <SidebarNavLink
              href="/admin/computers/pc/page/1"
              label={t("pc")}
              group={true}
            >
              <PcIcon />
            </SidebarNavLink>
            <SidebarNavLink
              href="/admin/computers/laptop/page/1"
              label={t("laptop")}
              group={true}
            >
              <LaptopIcon />
            </SidebarNavLink>
            <SidebarNavLink
              href="/admin/computers/all_in_one/page/1"
              label={t("all_in_one")}
              group={true}
            >
              <AllInOneIcon />
            </SidebarNavLink>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarGroupNavLink;
