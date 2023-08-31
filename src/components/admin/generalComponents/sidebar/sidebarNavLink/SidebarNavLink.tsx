import { NavLink } from "react-router-dom";
import { propsType } from "./types";

const SidebarNavLink = ({ href, label, group, children }: propsType) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          (isActive ? `${group ? "text-shade" : "bg-darkLightBlue"} ` : "") +
          `flex gap-3 p-2 rounded ${
            group ? "hover:text-white" : "hover:bg-darkLightBlue"
          }  transition-all`
        }
      >
        {children}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarNavLink;
