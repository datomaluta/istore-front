import Select from "react-select";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { StylesConfig } from "react-select";
import { Controller } from "react-hook-form";
import { PropsType } from "./types";
import { useTranslation } from "react-i18next";

const SearchableSelect = ({
  control,
  name,
  options,
  frontError,
}: PropsType) => {
  const { t, i18n } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const categoryInputStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      border: theme === "dark" ? "1px solid #373D3F" : "1px solid #D8D9CF",
      background: "transparent",
      borderRadius: "4px",
      padding: "2px",
      marginBottom: "6px",
    }),
    input: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#fff" : "#000",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#24303F" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "#24303F" : "#f0f0f0",
        color: state.isSelected ? "white" : "black",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#fff" : "#000",
    }),
  };

  return (
    <>
      <label
        className={`${
          i18n.resolvedLanguage === "ka" && "font-arial"
        } block text-sm mb-1`}
      >
        {t("product_category")}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            className="basic-single "
            classNamePrefix="select"
            isSearchable={true}
            options={options}
            styles={categoryInputStyles}
          />
        )}
      />

      <p className="text-sm text-red-500  h-2 font-arial">{frontError}</p>
    </>
  );
};
export default SearchableSelect;
