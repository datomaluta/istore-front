import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout/AdminLayout";
import InfoCard from "../../../components/admin/dashboardComponents/infoCard/InfoCard";
import ProductIcon from "../../../components/icons/ProductIcon";
import ProfitIcon from "../../../components/icons/ProfitIcon";
import UsersIcon from "../../../components/icons/UsersIcon";
import ViewIcon from "../../../components/icons/ViewIcon";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldAnimate(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AdminLayout>
      <div className="h-[23rem] bg-interStellar bg-center bg-cover mb-10 rounded  flex justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -300 }}
          animate={{
            opacity: 1,
            y: 0,

            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 360,
              damping: 20,
            },
          }}
          className={`text-6xl font-sans font-bold text-white ${
            shouldAnimate ? "animate-pulse" : ""
          }`}
        >
          istore
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 gap-4  sm:grid-cols-1">
        <InfoCard label="Total Views" percent={0.34} count={3.567}>
          <ViewIcon />
        </InfoCard>
        <InfoCard label="Total Profit" percent={0.24} count={45.2}>
          <ProfitIcon />
        </InfoCard>
        <InfoCard label="Total Product" percent={0.74} count={2450}>
          <ProductIcon />
        </InfoCard>
        <InfoCard label="Total Users" percent={0.94} count={3466}>
          <UsersIcon />
        </InfoCard>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
