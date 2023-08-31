import { useLocation } from "react-router-dom";
import CategoryIcon from "../../../../icons/CategoryIcon";
import DownUpArrowIcon from "../../../../icons/DownUpArrowIcon";
import { AnimatePresence, motion } from "framer-motion";
import SidebarNavLink from "../sidebarNavLink/SidebarNavLink";
import PcIcon from "../../../../icons/PcIcon";
import { PropsType } from "./types";
import LaptopIcon from "../../../../icons/LaptopIcon";
import AllInOneIcon from "../../../../icons/AllInOneIcon";

const SidebarGroupNavLink = ({
  categoryClicked,
  categoryClickHandler,
}: PropsType) => {
  const { pathname } = useLocation();
  return (
    <li className="">
      <button
        className={`${
          pathname.includes("computers") ? "bg-darkLightBlue" : ""
        } w-full text-start p-2 rounded hover:bg-darkLightBlue flex justify-between items-center transition-all`}
        onClick={categoryClickHandler}
      >
        <span className="flex gap-3 items-center">
          <CategoryIcon />
          Computers
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
            <SidebarNavLink href="/admin/computers/pc" label="PC" group={true}>
              <PcIcon />
            </SidebarNavLink>
            <SidebarNavLink
              href="/admin/computers/laptop"
              label="Laptop"
              group={true}
            >
              <LaptopIcon />
            </SidebarNavLink>
            <SidebarNavLink
              href="/admin/computers/allinone"
              label="All in one"
              group={true}
            >
              <AllInOneIcon />
            </SidebarNavLink>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </li>
  );
};

export default SidebarGroupNavLink;
