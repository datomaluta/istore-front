import { useState } from "react";
import Sidebar from "../generalComponents/sidebar/Sidebar";

const AdminLayout = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div className="bg-blue-200 min-h-screen flex">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <div className="bg-blue-500 w-full h-[140rem] ml-72 lg:ml-0 overflow-y-auto">
        <header className="bg-yellow-400">
          <h1>header</h1>
          <button onClick={() => setSidebarVisible(true)}>Open Sidebar</button>
        </header>
        {props.children}
      </div>
    </div>
  );
};
export default AdminLayout;
