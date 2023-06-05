import { useTranslation } from "react-i18next";
import MessageIcon from "../../icons/MessageIcon";
import PaymentIcon from "../../icons/PaymentIcon";
import ReturnIcon from "../../icons/ReturnIcon";
import ShippingIcon from "../../icons/ShippingIcon";
import FeatureCard from "./featureCard/FeatureCard";

const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20 flex gap-4 justify-between lg:grid grid-cols-2 items-center">
      <FeatureCard
        featureTitle={t("free_shipping")}
        featureBody={t("shipping_text")}
      >
        <ShippingIcon />
      </FeatureCard>

      <FeatureCard
        featureTitle={t("available")}
        featureBody={t("available_text")}
      >
        <MessageIcon />
      </FeatureCard>

      <FeatureCard
        featureTitle={t("return_policy")}
        featureBody={t("return_policy_text")}
      >
        <ReturnIcon />
      </FeatureCard>

      <FeatureCard featureTitle={t("payment")} featureBody={t("payment_text")}>
        <PaymentIcon />
      </FeatureCard>
    </div>
  );
};

export default Features;
