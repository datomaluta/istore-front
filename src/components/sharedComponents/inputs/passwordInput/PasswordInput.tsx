import { useState } from "react";
import HideIcon from "../../../icons/HideIcon";
import ViewIcon from "../../../icons/ViewIcon";
import { CustomInputPropsType } from "../types";
import { useTranslation } from "react-i18next";

const PasswordInput = (props: CustomInputPropsType) => {
  const { i18n } = useTranslation();
  const { label, placeholder, register, name, frontError, ...rest } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div
      className={`mb-4 relative ${
        i18n.resolvedLanguage === "ka" && "font-arial"
      }`}
    >
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        {...register(
          name as "name" | "email" | "password" | "confirm_password"
        )}
        placeholder={placeholder}
        className="w-full bg-transparent border border-greyForBorder dark:border-greyforText px-2 py-2 
      rounded outline-none focus:border-primary focus:dark:border-primary transition-all placeholder:text-gray-600 placeholder:text-sm"
        {...rest}
      />
      <p className="text-sm text-red-500 mt-1 h-2">{frontError}</p>
      {name.includes("password") && (
        <button
          type="button"
          onClick={() =>
            setIsPasswordVisible((prevState: boolean) => !prevState)
          }
          className="absolute top-[56%] -translate-y-[56%] right-4"
        >
          {isPasswordVisible ? <ViewIcon /> : <HideIcon />}
        </button>
      )}
    </div>
  );
};

export default PasswordInput;
