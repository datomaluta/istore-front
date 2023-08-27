import { useTranslation } from "react-i18next";
import visaImg from "../../assets/images/footer/visa.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer
      className={`absolute bottom-0 left-0 bg-neutral-800 bg-red-40	
     max-w-screen w-full shadow-lg px-2 py-4 ${
       i18n.resolvedLanguage === "ka" ? "font-arial" : "font-sans"
     }`}
    >
      <div className="max-w-[75rem] w-full mx-auto bg-red-40 flex justify-between sm:grid grid-cols-2 gap-y-3 border-b border-neutral-400 pb-6">
        <h1 className="text-5xl sm:text-4xl font-bold  font-sans text-white">
          istore
        </h1>
        <div className="">
          <ul className="md:text-sm text-neutral-500 flex flex-col  mt-2">
            <li>{t("address")}</li>
            <li>2 77 55 88 / 574 57 67 17</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[75rem] w-full mx-auto flex justify-between mt-4 text-greyForBorder">
        <p className="sm:hidden">© 2023 Powered by Davit Malutashvili</p>
        <p className="hidden sm:block ">© Davit Malutashvili</p>
        <img src={visaImg} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
