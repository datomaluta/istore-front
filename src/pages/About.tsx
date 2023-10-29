import { useTranslation } from "react-i18next";
import Header from "../components/header/Header";
import CityIcon from "../components/icons/CityIcon";
import PeopleIcon from "../components/icons/PeopleIcon";
import SellIcon from "../components/icons/SellIcon";
import WorldIcon from "../components/icons/WorldIcon";
import Layout from "../components/sharedComponents/layout/Layout";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Header />

      <div className="pt-40 px-4 sm:px-2 pb-12">
        <h1 className="text-tint text-center text-4xl font-bold mb-16 sm:mb-10">
          About us
        </h1>
        <div className="flex flex-col gap-6 bg-tint p-4 rounded-lg">
          <p className="leading-relaxed">{t("about_first_p")}</p>
          <p className="leading-relaxed">{t("about_second_p")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 place-items-center mt-10">
          <div className="flex items-center bg-neutral-700 rounded-lg gap-4 h-40 w-full justify-center p-4 hover:bg-primary">
            <PeopleIcon className="h-20 fill-white" />
            <div>
              <p className="text-xl font-bold">{t("total_customers")}</p>
              <p className="text-2xl">200 000+</p>
            </div>
          </div>
          <div className="flex items-center bg-neutral-700 rounded-lg gap-4 h-40 w-full justify-center p-4 hover:bg-primary">
            <CityIcon className="h-20 fill-white" />
            <div>
              <p className="text-xl font-bold">{t("total_cities")}</p>
              <p className="text-2xl">190+</p>
            </div>
          </div>
          <div className="flex items-center bg-neutral-700 rounded-lg gap-4 h-40 w-full justify-center p-4 hover:bg-primary">
            <SellIcon className="h-20 fill-white" />
            <div>
              <p className="text-xl font-bold">{t("total_sales")}</p>
              <p className="text-2xl">20 999+</p>
            </div>
          </div>
          <div className="flex items-center bg-neutral-700 rounded-lg gap-4 h-40 w-full justify-center p-4 hover:bg-primary">
            <WorldIcon className="h-20 fill-white" />
            <div>
              <p className="text-xl font-bold">{t("total_countries")}</p>
              <p className="text-2xl">50+</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
