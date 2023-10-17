import { useNavigate } from "react-router-dom";
import notFoundImage from "../../../assets/images/notFound/not-found.png";
import { useTranslation } from "react-i18next";

const NotFoundComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="h-screen py-40 flex flex-col items-center gap-4 ">
      <h1 className="">{t("notfound")}</h1>
      <img className="rounded-full h-72" src={notFoundImage} alt="notfound" />
      <button
        onClick={() => navigate(-1)}
        className="bg-primary font-bold px-4 py-3 rounded-lg mt-10"
      >
        {t("back")}
      </button>
    </div>
  );
};

export default NotFoundComponent;
