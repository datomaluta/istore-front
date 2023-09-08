import { useForm, useWatch } from "react-hook-form";

import { FormValues, PropsType, customAxiosError } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidationSchema } from "../../../../schemas/authSchema";
import { registerUser } from "../../../../services/auth";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const useSignUp = (setSignUpModalIsVisible: (arg: boolean) => void) => {
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

  const queryClient = useQueryClient();

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setSuccessMessage("მომხმარებელი წარმატებით დარეგისტრირდა");
      setTimeout(() => {
        setSignUpModalIsVisible(false);
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
    const requestData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    registerUserMutation.mutate(requestData);
  };

  return {
    backErrorStatusCode,
    successMessage,
    submitHandler,
    t,
    i18n,
    register,
    handleSubmit,
    errors,
    registerUserMutation,
  };
};
export default useSignUp;
