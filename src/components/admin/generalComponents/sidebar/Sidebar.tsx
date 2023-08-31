import { Link } from "react-router-dom";
import DashboardIcon from "../../../icons/DashboardIcon";
import ProfileIcon from "../../../icons/ProfileIcon";
import useCategoryClicked from "../../../../hooks/useCategoryClicked";
import SidebarNavLink from "./sidebarNavLink/SidebarNavLink";
import SidebarGroupNavLink from "./sidebarGroupNavLink/SideBarGroupNavLink";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {
  const {
    categoryIsClicked: compsCategoryIsClicked,
    categoryClickHandler: compsCategoryClickHandler,
  } = useCategoryClicked();

  return (
    <>
      <AnimatePresence>
        {sidebarVisible ? (
          <motion.aside
            initial={{ x: -500 }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: -500, transition: { duration: 0.5 } }}
            className="w-72 bg-darkBlue h-screen overflow-y-hidden fixed top-0 left-0 text-gray-300 px-4 py-4"
          >
            <Link className="text-4xl font-bold font-sans" to="/">
              istore
            </Link>
            <button onClick={() => setSidebarVisible(false)}>
              Hide Sidebar
            </button>
            <div className="mt-10">
              <nav>
                <ul className="flex flex-col gap-3">
                  <SidebarNavLink href="/admin/dashboard" label="Dashboard">
                    <DashboardIcon />
                  </SidebarNavLink>

                  <SidebarNavLink href="/admin/profile" label="Profile">
                    <ProfileIcon />
                  </SidebarNavLink>

                  <SidebarGroupNavLink
                    categoryClicked={compsCategoryIsClicked}
                    categoryClickHandler={compsCategoryClickHandler}
                  />
                </ul>
              </nav>
            </div>
          </motion.aside>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};
export default Sidebar;
