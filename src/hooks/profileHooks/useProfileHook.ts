import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { updateUser } from "../../../services/auth";
import { removeEptyValuesFromObject } from "../../helpers/removeEptyValuesFromObject";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

const useProfileHook = () => {
  const authorizedUser = useSelector(
    (state: RootState) => state.user.authorizedUser
  );
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();

  const newName = useWatch({
    control: control,
    name: "name",
  });

  const newPassword = useWatch({
    control: control,
    name: "password",
  });

  const queryClient = useQueryClient();

  const { mutate: userUpdateMutate, isLoading: userUpdatingLoading } =
    useMutation({
      mutationFn: updateUser,
      onSuccess: () => {
        setSuccessMessage(t("data_updated_success").toString());
        queryClient.invalidateQueries(["userInfo"]);

        setTimeout(() => {
          setSuccessMessage("");
        }, 1500);
      },
      onError: () => {
        setSuccessMessage(t("data_updated_error").toString());
        setTimeout(() => {
          setSuccessMessage("");
        }, 1500);
      },
    });

  const submitHandler = (data: any) => {
    if (newName) {
      if (newName.length > 0) {
        if (
          !(newName.length > 3) ||
          !(newName.length < 15) ||
          !newName.match(/^[a-zA-Z]+$/)
        ) {
          setError("name", {
            type: "manual",
            message: t("user_update_validation_name").toString(),
          });
          return;
        }
      }
    }

    if (newPassword) {
      if (newPassword.length > 0) {
        if (
          !(newPassword.length > 3) ||
          !(newPassword.length < 15) ||
          !newPassword.match(/^[a-z0-9]+$/)
        ) {
          console.log("ara");
          setError("password", {
            type: "manual",
            message: t("user_update_validation_password").toString(),
          });
          return;
        }
      }
    }

    if (!newName && !newPassword) {
      setError("name", {
        type: "manual",
        message: t("user_update_validation_both").toString(),
      });
      return;
    }

    const requestData = removeEptyValuesFromObject(data);
    console.log(requestData);

    userUpdateMutate(requestData);
  };

  return {
    authorizedUser,
    successMessage,
    submitHandler,
    userUpdatingLoading,
    register,
    handleSubmit,
    errors,
    t,
  };
};

export default useProfileHook;
