import { Link, NavLink, useLocation } from "react-router-dom";
import DashboardIcon from "../../icons/DashboardIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import useAdminLayout from "./useAdminLayout";

const AdminLayout = (props: { children: JSX.Element | JSX.Element[] }) => {
  const {
    categoryIsClicked: compsCategoryIsClicked,
    categoryClickHandler: compsCategoryClickHandler,
  } = useAdminLayout();

  const { pathname } = useLocation();

  return (
    <div className="bg-blue-200 min-h-screen flex">
      <aside className="w-72 bg-darkBlue h-screen overflow-y-hidden fixed top-0 left-0 text-gray-300 px-4 py-4">
        <Link className="text-4xl font-bold font-sans" to="/">
          istore
        </Link>
        <div className="mt-10">
          <h1 className="text-gray-400 mb-4">Menu</h1>

          <nav>
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    (isActive ? "bg-darkLightBlue " : "") +
                    "flex gap-3 p-2 rounded hover:bg-darkLightBlue"
                  }
                >
                  <DashboardIcon />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/profile"
                  className={({ isActive }) =>
                    (isActive ? "bg-darkLightBlue " : "") +
                    "flex gap-3 p-2 rounded hover:bg-darkLightBlue"
                  }
                >
                  <ProfileIcon />
                  Profile
                </NavLink>
              </li>
              <li className="">
                <button
                  className={`${
                    pathname.includes("computers") ? "bg-darkLightBlue" : ""
                  } w-full text-start p-2 rounded hover:bg-darkLightBlue`}
                  onClick={compsCategoryClickHandler}
                >
                  Computers
                </button>
                {compsCategoryIsClicked ? (
                  <div className="pl-2 ">
                    <NavLink
                      to="/admin/computers/pc"
                      className={({ isActive }) =>
                        (isActive ? "text-white " : "") +
                        "flex gap-3 p-2 rounded hover:text-white"
                      }
                    >
                      <ProfileIcon />
                      PC
                    </NavLink>
                    <NavLink
                      to="/admin/pc"
                      className={({ isActive }) =>
                        (isActive ? "text-white " : "") +
                        "flex gap-3 p-2 rounded hover:text-white"
                      }
                    >
                      <ProfileIcon />
                      Laptop
                    </NavLink>
                    <NavLink
                      to="/admin/pc"
                      className={({ isActive }) =>
                        (isActive ? "text-white " : "") +
                        "flex gap-3 p-2 rounded hover:text-white"
                      }
                    >
                      <ProfileIcon />
                      All in One
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="bg-blue-500 w-full h-[140rem] ml-72 overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
};
export default AdminLayout;
