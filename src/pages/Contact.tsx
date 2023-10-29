import { useTranslation } from "react-i18next";
import Header from "../components/header/Header";
import EmailIcon from "../components/icons/EmailIcon";
import LocationIcon from "../components/icons/LocationIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import Layout from "../components/sharedComponents/layout/Layout";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Header />
      <div className="pt-40 px-8 sm:px-4 pb-12">
        <h1 className="text-tint text-center text-4xl font-bold mb-16 sm:mb-10">
          {t("contact_us")}
        </h1>
        <div className="flex gap-10 items-start lg:flex-col lg:items-center bg-contactGradient bg-no-repeat bg-cover px-8 sm:px-4 py-16 rounded">
          <div className="flex flex-col gap-8 w-1/2 lg:w-full justify-center items-center lg:items-start">
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-5 items-center">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                  <LocationIcon className="fill-white text-white h-7" />
                </div>
                <div>
                  <h2 className="text-tint font-bold text-lg">
                    {t("location")}
                  </h2>
                  <p className="text-gray-400"> {t("address")}</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                  <EmailIcon className="fill-white text-white h-7" />
                </div>
                <div>
                  <h2 className="text-tint font-bold text-lg">{t("email")}</h2>
                  <p className="text-gray-400">istore-ifno@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                  <PhoneIcon className="fill-white text-white h-7" />
                </div>
                <div>
                  <h2 className="text-tint font-bold text-lg">{t("call")}</h2>
                  <p className="text-gray-400">2 77 55 88 / 574 57 67 17</p>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="w-1/2 lg:w-full">
            <form className="flex flex-col gap-8">
              <input
                type="text"
                placeholder={t("email") || "Email"}
                className="bg-transparent border border-primary rounded px-4 py-2 placeholder:text-gray-500 text-white block"
              />
              <input
                type="text"
                placeholder={t("subject") || "Subject"}
                className="bg-transparent border border-primary rounded px-4 py-2 placeholder:text-gray-500 text-white block"
              />
              <textarea
                placeholder={t("message") || "Message"}
                className="bg-transparent border border-primary rounded px-4 py-2 h-28 resize-none placeholder:text-gray-500 text-white"
              ></textarea>
              <button className="bg-primary text-white rounded py-3">
                {t("send_message")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
