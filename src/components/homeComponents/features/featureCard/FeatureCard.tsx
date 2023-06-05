import { useTranslation } from "react-i18next";
import { propsType } from "./types";

const FeatureCard = ({ featureTitle, featureBody, children }: propsType) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`flex items-center gap-2 lg:justify-center lg:flex-col lg:gap-1  ${
        i18n.resolvedLanguage === "ka" ? "font-arial" : ""
      }`}
    >
      <span>{children}</span>
      <div className="text-sm sm:text-[0.8rem] lg:text-center">
        <p className="text-neutral-200 font-bold">{featureTitle}</p>
        <p className="text-neutral-400 sm:px-2">{featureBody}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
