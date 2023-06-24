import { useTranslation } from "react-i18next";
import user1Img from "../../../assets/images/testimonial/user1.jpg";
import user2Img from "../../../assets/images/testimonial/user2.jpg";
import user3Img from "../../../assets/images/testimonial/user3.jpg";
import TestimonialCard from "./TestimonialCard";

const TestimonialLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20 flex flex-col items-center mb-56 sm:mb-80">
      <h1 className="text-lg  mb-8 max-w-max border-b-2 border-primary pb-1">
        {t("testimonial")}
      </h1>
      <div className="flex gap-8 md:grid grid-cols-2 md:gap-y-12 sm:grid-cols-1">
        <TestimonialCard
          userName={t("davit")}
          imgSrc={user1Img}
          text={t("davit_text")}
        />
        <TestimonialCard
          userName={t("izolda")}
          imgSrc={user2Img}
          text={t("izolda_text")}
        />
        <TestimonialCard
          userName={t("lekso")}
          imgSrc={user3Img}
          text={t("lekso_text")}
        />
      </div>
    </div>
  );
};

export default TestimonialLayout;
