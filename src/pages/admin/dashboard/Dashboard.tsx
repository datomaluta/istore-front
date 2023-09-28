import { useTranslation } from "react-i18next";
import AdminLayout from "../../../components/admin/adminLayout/AdminLayout";
import ImageContainer from "../../../components/admin/dashboardComponents/imageContainer/ImageContainer";
import InfoCard from "../../../components/admin/dashboardComponents/infoCard/InfoCard";
import ProductIcon from "../../../components/icons/ProductIcon";
import ProfitIcon from "../../../components/icons/ProfitIcon";
import UsersIcon from "../../../components/icons/UsersIcon";
import ViewIcon from "../../../components/icons/ViewIcon";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <AdminLayout>
      <ImageContainer />
      <div className="grid grid-cols-2 gap-4  sm:grid-cols-1">
        <InfoCard label={t("total_views")} percent={0.34} count={3.567}>
          <ViewIcon />
        </InfoCard>
        <InfoCard label={t("total_profit")} percent={0.24} count={45.2}>
          <ProfitIcon />
        </InfoCard>
        <InfoCard label={t("total_product")} percent={0.74} count={2450}>
          <ProductIcon />
        </InfoCard>
        <InfoCard label={t("total_users")} percent={0.94} count={3466}>
          <UsersIcon />
        </InfoCard>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
