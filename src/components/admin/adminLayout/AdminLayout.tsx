import Sidebar from "../generalComponents/sidebar/Sidebar";
import AdminHeader from "../generalComponents/adminHeader/AdminHeader";
import useAdminLayout from "./useAdminLayout";

const AdminLayout = (props: { children: JSX.Element | JSX.Element[] }) => {
  const { sidebarVisible, setSidebarVisible } = useAdminLayout();
  return (
    <div className="min-h-screen flex pt-20">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <div className="w-full ml-72  lg:ml-0 p-5  transition-all overflow-y-auto relative bg-adminBgWhite dark:bg-adminBgDark">
        <AdminHeader setSidebarVisible={setSidebarVisible} />
        {props.children}
      </div>
    </div>
  );
};
export default AdminLayout;
