import ModalDiv from "../../sharedComponents/animatedComponents/modalDiv/ModalDiv";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { PropsType } from "./types";
import PasswordInput from "../../sharedComponents/inputs/passwordInput/PasswordInput";
import Alert from "../../sharedComponents/alert/Alert";
import useSignIn from "./useSignIn";
import LoaderDots from "../../sharedComponents/LoaderDots";

const SignIn = ({
  closeSignInOpenSignUpHandler,
  setSignInModalIsVisible,
}: PropsType) => {
  const {
    t,
    backErrorStatusCode,
    successMessage,
    register,
    handleSubmit,
    errors,
    submitHandler,
    signInLoading,
  } = useSignIn(setSignInModalIsVisible);

  return (
    <>
      <Alert message={successMessage} />
      <ModalDiv setModalIsVisible={setSignInModalIsVisible}>
        <h1 className="border-b border-t-greyForBorder dark:border-greyforText pb-4 text-center text-2xl font-bold">
          {t("sign_in")}
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className=" mt-4">
          <CustomInput
            register={register}
            name="email"
            label={t("email")}
            placeholder={t("enter_email")}
            type="email"
            frontError={t(errors["email"]?.message || "")}
            backErrorStatusCode={backErrorStatusCode}
          />
          <PasswordInput
            name="password"
            register={register}
            label={t("password")}
            placeholder={t("enter_password")}
            frontError={t(errors["password"]?.message || "")}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <button
              type="button"
              onClick={closeSignInOpenSignUpHandler}
              className="hover:text-primary"
            >
              {t("register")}
            </button>
            <button type="button" className="hover:text-primary">
              {" "}
              {t("password_reset")}
            </button>
          </div>
          <button className="bg-primary text-white w-full py-3 rounded font-bold mt-6 button-effect flex justify-center">
            {signInLoading ? <LoaderDots /> : t("sign_in")}
          </button>
        </form>
      </ModalDiv>
    </>
  );
};

export default SignIn;
