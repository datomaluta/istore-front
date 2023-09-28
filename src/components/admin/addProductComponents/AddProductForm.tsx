import { useForm, useWatch } from "react-hook-form";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { useTranslation } from "react-i18next";
import {
  generalArray,
  laptopAndAllInOneArray,
  pcArray,
} from "../../../data/StaticAddProductFormArray";
import SearchableSelect from "../../sharedComponents/inputs/customSelect/SearchableSelect";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../../services/categoryService";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  productAddValidationSchema,
  pcValidationSchema,
  laptopAndAllInOneValidationSchema,
} from "../../../../schemas/productSchema";
import { ProductType, extraFieldType, extraFieldsArrayType } from "./types";
import { addProduct } from "../../../../services/product";
import { customAxiosError } from "../../auth/signUp/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../sharedComponents/alert/Alert";
import { isObjectEmpty } from "../../../helpers/isObjectEmpty";
import * as yup from "yup";

const AddProductForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [extraFieldsBasedOnCategory, setExtraFieldsBasedOnCategory] =
    useState<extraFieldsArrayType>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const getValidationSchema = (selectedCategory: string) => {
    switch (selectedCategory) {
      case "pc":
        return pcValidationSchema;
      case "laptop":
        return laptopAndAllInOneValidationSchema;
      case "all_in_one":
        return laptopAndAllInOneValidationSchema;
      default:
        return productAddValidationSchema; // Use the general schema as the default
    }
  };
  const combinedSchema = yup.object().shape({
    ...productAddValidationSchema.fields, // Include the fields from the general schema
    ...getValidationSchema(selectedCategory).fields, // Include the fields from the category-specific schema
  });

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(combinedSchema),
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAllCategories(),
  });

  const optionsForCategories = categoriesData?.data.map((item: ProductType) => {
    return { value: item.id, label: item.name };
  });

  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      setSuccessMessage("პროდუქტი წარმატებით დაემატა");
      setTimeout(() => {
        setSuccessMessage("");
        navigate(`/admin/computers/pc/page/1`);
      }, 1500);

      // queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error: customAxiosError) => {
      console.log(error);
    },
  });

  const formData = new FormData();

  const submitHandler = (data: any) => {
    const requestData = {
      ...data,
      image: data.image[0],
      category_id: data.category_id.value,
    };
    generalArray.forEach((item) => {
      formData.append(item.name, requestData[item.name]);
    });

    extraFieldsBasedOnCategory.forEach((item) => {
      formData.append(item.name, requestData[item.name]);
    });

    addProductMutation.mutate(formData);
  };

  const category: { label: string; value: number } = useWatch({
    control: control,
    name: "category_id",
  }) as { label: string; value: number };

  useEffect(() => {
    switch (category?.label) {
      case "pc":
        setSelectedCategory("pc");
        setExtraFieldsBasedOnCategory(pcArray);
        break;
      case "laptop":
        setSelectedCategory("laptop");
        setExtraFieldsBasedOnCategory(laptopAndAllInOneArray);
        break;
      case "all_in_one":
        setSelectedCategory("all_in_one");
        setExtraFieldsBasedOnCategory(laptopAndAllInOneArray);
        break;
    }
  }, [category]);

  return (
    <>
      <Alert message={successMessage} />
      <form onSubmit={handleSubmit(submitHandler)}>
        {generalArray.map((item) => {
          if (item.type === "select") {
            return (
              <SearchableSelect
                key={item.name}
                control={control}
                name={"category_id"}
                options={optionsForCategories}
                frontError={t(
                  errors[item.name as keyof typeof errors]?.message || ""
                )}
              />
            );
          }
          return (
            <CustomInput
              key={item.name}
              register={register}
              name={item.name}
              label={t(item.name)}
              placeholder={t("")}
              type={item.type}
              // frontError={t(errors[item.name]?.message || "")}
              frontError={t(
                errors[item.name as keyof typeof errors]?.message || ""
              )}
            />
          );
        })}
        {extraFieldsBasedOnCategory.map((item: extraFieldType) => (
          <CustomInput
            key={item.name}
            register={register}
            name={item.name}
            label={t(item.label)}
            placeholder={t("")}
            type={item.type}
            frontError={t(
              errors[item.name as keyof typeof errors]?.message || ""
            )}
          />
        ))}

        <button
          disabled={!isObjectEmpty(errors)}
          className="bg-primary w-full block mt-10 py-3 rounded-lg text-white disabled:bg-tint disabled:text-gray-400"
        >
          {t("add")}
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
