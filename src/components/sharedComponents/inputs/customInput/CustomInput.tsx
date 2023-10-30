import { useTranslation } from "react-i18next";
import { CustomInputPropsType } from "../types";

const CustomInput = (props: CustomInputPropsType) => {
  const { t, i18n } = useTranslation();
  const {
    label,
    placeholder,
    register,
    name,
    backErrorStatusCode,
    frontError,
    type,
    imagePreviewSrc,
    imageFromDb,
    ...rest
  } = props;
  return (
    <div className={`mb-4 ${i18n.resolvedLanguage === "ka" && "font-arial"}`}>
      <label className="block text-sm mb-1">{label}</label>
      <input
        {...register(
          name as "name" | "email" | "password" | "confirm_password" | "brand"
        )}
        placeholder={placeholder}
        className="w-full bg-transparent border border-greyForBorder dark:border-greyforText px-2 py-2 
      rounded outline-none focus:border-primary focus:dark:border-primary transition-all placeholder:text-gray-600 placeholder:text-sm"
        type={type}
        {...rest}
      />
      <p className="text-sm text-red-500 mt-1 h-2 ">
        {backErrorStatusCode === 422 && t("value_dublicate")}
        {backErrorStatusCode === 401 && t("invalid_credentials")}
        {frontError}
      </p>

      {type === "file" &&
        (imagePreviewSrc ? (
          <img
            className="h-24 w-24 rounded-lg object-cover"
            src={imagePreviewSrc}
            alt="preview"
          />
        ) : imageFromDb ? (
          <img
            className="h-24 w-24 rounded-lg object-cover"
            src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${imageFromDb}`}
            alt="preview"
          />
        ) : (
          ""
        ))}
    </div>
  );
};

export default CustomInput;
