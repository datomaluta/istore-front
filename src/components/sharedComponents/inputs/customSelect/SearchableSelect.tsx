import Select from "react-select";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { StylesConfig } from "react-select";
import { useState } from "react";
import { Controller } from "react-hook-form";

const SearchableSelect = ({ control, name, options }) => {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const colourOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

  const categoryInputStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      border: theme === "dark" ? "1px solid #373D3F" : "1px solid #D8D9CF",
      background: "transparent",
      borderRadius: "4px",
      padding: "2px",
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
        backgroundColor: state.isSelected ? "#24303F" : "#f0f0f0", // Define hover background color
        color: state.isSelected ? "white" : "black", // Define hover text color
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#fff" : "#000",
    }),
  };

  return (
    <>
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
            // value={selectedValue}
            // onChange={(selectedOption: { value: string; label: string }) =>
            //   setSelectedValue(selectedOption)
            // }
          />
        )}
      />
      {/* <Select
        className="basic-single "
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isSearchable={true}
        options={colourOptions}
        styles={categoryInputStyles}
        // value={selectedValue}
        // onChange={(selectedOption: { value: string; label: string }) =>
        //   setSelectedValue(selectedOption)
        // }
      /> */}
    </>
  );
};
export default SearchableSelect;
