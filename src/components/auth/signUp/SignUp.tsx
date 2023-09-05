import { useForm, useWatch } from "react-hook-form";
import ModalDiv from "../../sharedComponents/animatedComponents/modalDiv/ModalDiv";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { FormValues, PropsType, customAxiosError } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidationSchema } from "../../../../schemas/register";
import { registerUser } from "../../../../services/auth";
import { useEffect, useState } from "react";
import PasswordInput from "../../sharedComponents/inputs/passwordInput/PasswordInput";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Alert from "../../sharedComponents/alert/Alert";
import LoadingSpinner from "../../sharedComponents/loadingSpinner/LoadingSpinner";

const SignUp = ({
  closeSignUpOpenSignInHandler,
  setSignUpModalIsVisible,
}: PropsType) => {
  const { t, i18n } = useTranslation();

  const [backErrorStatusCode, setBackErrorStatusCode] = useState<number>();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(registerFormValidationSchema),
  });

  const name = useWatch({ name: "name", control });

  useEffect(() => {
    setBackErrorStatusCode(0);
  }, [name]);

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setSuccessMessage("მომხმარებელი წარმატებით დარეგისტრირდა");
      setTimeout(() => {
        setSignUpModalIsVisible(false);
        setSuccessMessage("");
      }, 3500);
    },
    onError: (error: customAxiosError) => {
      if (error.response) {
        setBackErrorStatusCode(error.response.status);
      }
    },
  });

  const submitHandler = async (data: FormValues) => {
    const requestData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    registerUserMutation.mutate(requestData);
  };

  return (
    <>
      <Alert message={successMessage} />
      <ModalDiv setModalIsVisible={setSignUpModalIsVisible}>
        <h1 className="border-b border-t-greyForBorder dark:border-greyforText pb-4 text-center text-2xl font-bold">
          {t("sign_up")}
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className=" mt-4">
          <CustomInput
            register={register}
            name="name"
            label={t("name")}
            placeholder={t("enter_name")}
            type="text"
            backErrorStatusCode={backErrorStatusCode}
            frontError={t(errors["name"]?.message || "")}
          />
          <CustomInput
            name="email"
            register={register}
            label={t("email")}
            placeholder={t("enter_email")}
            type="email"
            frontError={t(errors["email"]?.message || "")}
          />

          <PasswordInput
            name="password"
            register={register}
            label={t("password")}
            placeholder={t("enter_password")}
            frontError={t(errors["password"]?.message || "")}
          />
          <PasswordInput
            name="confirm_password"
            register={register}
            label={t("retype_password")}
            placeholder={t("confirm_password")}
            frontError={t(errors["confirm_password"]?.message || "")}
          />
          <div className="flex justify-between text-sm text-gray-500 ">
            <button
              className={`${i18n.resolvedLanguage === "ka" && "font-arial"} 
            }`}
              type="button"
              onClick={closeSignUpOpenSignInHandler}
            >
              {t("already_have_an_account")}
            </button>
          </div>
          <button className="bg-primary text-white w-full py-3 h-12 rounded font-bold mt-6 relative">
            {registerUserMutation.isLoading ? <LoadingSpinner /> : t("sign_up")}
          </button>
        </form>
      </ModalDiv>
    </>
  );
};

export default SignUp;
