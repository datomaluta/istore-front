import { useForm, useWatch } from "react-hook-form";
import { FormValues, PropsType } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../../../services/auth";
import { useEffect, useState } from "react";
import { customAxiosError } from "../signUp/types";
import { loginFormValidationSchema } from "../../../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

const useSignIn = (setSignInModalIsVisible: (arg: boolean) => void) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [backErrorStatusCode, setBackErrorStatusCode] = useState<number>();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(loginFormValidationSchema) });

  const email = useWatch({ name: "email", control });

  useEffect(() => {
    setBackErrorStatusCode(0);
  }, [email]);

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      setSuccessMessage("მომხმარებელი წარმატებით დალოგინდა");
      setTimeout(() => {
        setSignInModalIsVisible(false);
        setSuccessMessage("");
      }, 1500);

      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error: customAxiosError) => {
      if (error.response) {
        setBackErrorStatusCode(error.response.status);
      }
    },
  });

  const submitHandler = async (data: FormValues) => {
    loginUserMutation.mutate(data);
  };

  return {
    t,
    backErrorStatusCode,
    successMessage,
    register,
    handleSubmit,
    errors,
    submitHandler,
  };
};
export default useSignIn;
