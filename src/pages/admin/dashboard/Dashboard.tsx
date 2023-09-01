import AdminLayout from "../../../components/admin/adminLayout/AdminLayout";
import InfoCard from "../../../components/admin/dashboardComponents/infoCard/InfoCard";
import ProductIcon from "../../../components/icons/ProductIcon";
import ProfitIcon from "../../../components/icons/ProfitIcon";
import UsersIcon from "../../../components/icons/UsersIcon";
import ViewIcon from "../../../components/icons/ViewIcon";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-4 xl:grid-cols-2 sm:grid-cols-1">
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
