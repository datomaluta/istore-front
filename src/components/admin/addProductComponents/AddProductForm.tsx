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
import { productAddValidationSchema } from "../../../../schemas/productSchema";
import { ProductType } from "./types";
import { addProduct } from "../../../../services/product";
import { customAxiosError } from "../../auth/signUp/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../sharedComponents/alert/Alert";
import { isObjectEmpty } from "../../../helpers/isObjectEmpty";

const AddProductForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productAddValidationSchema),
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
    onSuccess: (data) => {
      setSuccessMessage("პროდუქტი წარმატებით დაემატა");
      setTimeout(() => {
        setSuccessMessage("");
        navigate(`/admin/computers/pc/page/1`);
      }, 1500);

      // queryClient.invalidateQueries(["userInfo"]);
      console.log(data);
    },
    onError: (error: customAxiosError) => {
      console.log(error);
    },
  });

  const formData = new FormData();

  const submitHandler = (data: any) => {
    console.log(data);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);
    formData.append("category_id", data.category_id.value);
    formData.append("label", data.label);
    formData.append("stock", data.stock);
    formData.append("cpu", data.cpu);
    formData.append("ram", data.ram);
    formData.append("ssd", data.ssd);
    formData.append("hdd", data.hdd);
    formData.append("gpu", data.gpu);
    formData.append("motherboard", data.motherboard);
    addProductMutation.mutate(formData);
  };

  const category: { label: string; value: number } = useWatch({
    control: control,
    name: "category_id",
  }) as { label: string; value: number };

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
              label={t(item.label)}
              placeholder={t("")}
              type={item.type}
              // frontError={t(errors[item.name]?.message || "")}
              frontError={t(
                errors[item.name as keyof typeof errors]?.message || ""
              )}
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
              frontError={t(
                errors[item.name as keyof typeof errors]?.message || ""
              )}
              // backErrorStatusCode={backErrorStatusCode}
            />
          ))}
        {(category?.label === "laptop" || category?.label === "all_in_one") &&
          laptopAndAllInOneArray.map((item) => (
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
              // backErrorStatusCode={backErrorStatusCode}
            />
          ))}
        <button
          disabled={isObjectEmpty(errors)}
          className="bg-primary w-full block mt-10 py-3 rounded-lg text-white disabled:bg-tint disabled:text-gray-400"
        >
          დამატება
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
