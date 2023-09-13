import { useForm, useWatch } from "react-hook-form";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { useTranslation } from "react-i18next";
import { generalArray, pcArray } from "../../../data/StaticAddProductFormArray";
import CustomSelect from "../../sharedComponents/inputs/customSelect/CustomSelect";
import SearchableSelect from "../../sharedComponents/inputs/customSelect/SearchableSelect";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../../services/categoryService";

const AddProductForm = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const { data: categoriesData } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAllCategories(),
  });

  const optionsForCategories = categoriesData?.data.map((item) => {
    return { value: item.id, label: item.name };
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  const category = useWatch({ control: control, name: "category" });
  console.log(category);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {generalArray.map((item) => {
        if (item.type === "select") {
          return (
            <SearchableSelect
              control={control}
              name={"category"}
              options={optionsForCategories}
            />
          );
        } else
          return (
            <CustomInput
              key={item.name}
              register={register}
              name={item.name}
              label={t(item.label)}
              placeholder={t("")}
              type={item.type}
              frontError={t(errors?.brand?.message || "")}
              // backErrorStatusCode={backErrorStatusCode}
            />
          );
      })}
      {category?.label === "pc" &&
        pcArray.map((item) => (
          <CustomInput
            key={item.name}
            register={register}
            name={item.name}
            label={t(item.label)}
            placeholder={t("")}
            type={item.type}
            frontError={t(errors?.brand?.message || "")}
            // backErrorStatusCode={backErrorStatusCode}
          />
        ))}
      <button className="bg-primary w-full block mt-10 py-3 rounded-lg text-white">
        დამატება
      </button>
    </form>
  );
};

export default AddProductForm;
