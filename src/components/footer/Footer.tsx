import { useTranslation } from "react-i18next";
import visaImg from "../../assets/images/footer/visa.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer
      className={`absolute bottom-0 left-0 bg-neutral-800 bg-red-40	
     max-w-screen w-full h-64 sm:h-[21rem] shadow-lg px-2 py-4 ${
       i18n.resolvedLanguage === "ka" ? "font-arial" : "font-sans"
     }`}
    >
      <div className="max-w-[75rem] w-full mx-auto bg-red-40 flex justify-between sm:grid grid-cols-2 gap-y-3 border-b border-neutral-400 pb-6">
        <h1 className="text-5xl sm:text-4xl font-bold text-white font-sans">
          istore
        </h1>
        <div className="">
          <h1 className=" md:text-sm font-bold">{t("contact_us")}</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>{t("address")}</li>
            <li>2 77 55 88 / 574 57 67 17</li>
            <li>onlinesales@istore.com</li>
          </ul>
        </div>
        <div>
          <h1 className=" md:text-sm font-bold">{t("categories")}</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>{t("comps")}</li>
            <li>{t("comp_parts")}</li>
            <li>{t("comp_peripherials")}</li>
            <li>{t("monitor")}</li>
          </ul>
        </div>
        <div>
          <h1 className=" md:text-sm font-bold">{t("about_us")}</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>{t("contact")}</li>
            <li>{t("about_us")}</li>
            <li>FAQs</li>
            <li>{t("policy")}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[75rem] w-full mx-auto flex justify-between mt-4">
        <p className="sm:hidden">© 2023 Powered by Davit Malutashvili</p>
        <p className="hidden sm:block">© Davit Malutashvili</p>
        <img src={visaImg} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
