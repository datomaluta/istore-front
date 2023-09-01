import { useEffect, useState } from "react";
import useScreenWidth from "../../../hooks/useScreenWidth";

const useAdminLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const { screenWidth } = useScreenWidth();

  useEffect(() => {
    function handleScreenWidthChange() {
      if (screenWidth <= 1023) {
        setSidebarVisible(false);
      }
    }
    handleScreenWidthChange();
    return () => {
      setSidebarVisible(true);
    };
  }, [screenWidth]);

  return { sidebarVisible, setSidebarVisible };
};

export default useAdminLayout;
