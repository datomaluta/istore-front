import Header from "../components/header/Header";
import Layout from "../components/sharedComponents/layout/Layout";
import avatar from "../assets/images/avatar.webp";
import CustomInput from "../components/sharedComponents/inputs/customInput/CustomInput";
import { useTranslation } from "react-i18next";
import LoaderDots from "../components/sharedComponents/LoaderDots";
import Alert from "../components/sharedComponents/alert/Alert";
import useProfileHook from "../hooks/profileHooks/useProfileHook";

const Profile = () => {
  const {
    authorizedUser,
    successMessage,
    submitHandler,
    userUpdatingLoading,
    register,
    handleSubmit,
    errors,
  } = useProfileHook();

  const { t } = useTranslation();

  return (
    <Layout>
      <Header />
      <Alert message={successMessage} />
      <div className="pt-40 pb-12 px-4">
        <div className="bg-profileGradient h-[15rem] sm:h-[10rem] rounded w-full relative mb-32">
          <div className="h-32 absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <img
              src={avatar}
              className="h-full border-4 border-white rounded-full"
              alt="avatar"
            />
            <h3 className="text-lg font-bold">{authorizedUser?.name}</h3>
          </div>
        </div>
        <div className="w-1/2 sm:w-full mx-auto">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(submitHandler)}
          >
            {/* <CustomInput register={register} name="name" label="New name" /> */}
            <CustomInput
              register={register}
              name="name"
              label={t("new_name")}
              placeholder={t("enter_new_name")}
              type="text"
              frontError={t(errors["name"]?.message?.toString() || "")}
            />
            <CustomInput
              register={register}
              name="password"
              label={t("new_password")}
              placeholder={t("enter_new_password")}
              type="password"
              frontError={t(errors["password"]?.message?.toString() || "")}
            />
            <button
              className="bg-primary hover:bg-blue-500 active:translate-y-1 active:bg-blue-700
            active:shadow-lg transition-all w-full  mt-10 py-3 h-12 rounded-lg text-white disabled:bg-tint
              disabled:text-gray-400 flex justify-center"
            >
              {userUpdatingLoading ? <LoaderDots /> : t("confirm")}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
