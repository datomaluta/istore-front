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
import {
  getAllCategories,
  getCategoryById,
} from "../../../../services/categoryService";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  productAddValidationSchema,
  producEditValidationSchema,
  pcValidationSchema,
  laptopAndAllInOneValidationSchema,
} from "../../../../schemas/productSchema";
import {
  ProductType,
  PropsType,
  extraFieldType,
  extraFieldsArrayType,
} from "./types";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProductById,
} from "../../../../services/product";
import { customAxiosError } from "../../auth/signUp/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../sharedComponents/alert/Alert";
import { isObjectEmpty } from "../../../helpers/isObjectEmpty";
import * as yup from "yup";

const AddProductForm = ({ edit }: PropsType) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [extraFieldsBasedOnCategory, setExtraFieldsBasedOnCategory] =
    useState<extraFieldsArrayType>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

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
  const getCreateOrEditValidationSchema = () => {
    if (edit) {
      return producEditValidationSchema.fields;
    } else {
      return productAddValidationSchema.fields;
    }
  };
  const combinedSchema = yup.object().shape({
    ...getCreateOrEditValidationSchema(), // Include the fields from the general schema
    ...getValidationSchema(selectedCategory).fields, // Include the fields from the category-specific schema
  });

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
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

  const editProductMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      setSuccessMessage("პროდუქტი წარმატებით განახლდა");
      setTimeout(() => {
        setSuccessMessage("");
        // navigate(`/admin/computers/pc/page/1`);
      }, 1500);

      // queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error: customAxiosError) => {
      console.log(error);
    },
  });

  const formData = new FormData();

  const submitHandler = (data: any) => {
    if (edit) {
      console.log("edit mode");

      const requestData = {
        ...data,
        image: data.image ? data.image[0] : "",
        category_id: data.category_id.value,
      };
      console.log(requestData);
      formData.append("_method", "PUT");
      generalArray.forEach((item) => {
        if (item.name === "image") {
          if (!requestData.image || requestData?.image?.length === 0) return;
        }
        formData.append(item.name, requestData[item.name]);
      });

      extraFieldsBasedOnCategory.forEach((item) => {
        formData.append(item.name, requestData[item.name]);
      });

      editProductMutation.mutate({ data: formData, id: id });
    } else {
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
    }
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

  const { data: productData, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: () => getProductById(id),
    enabled: edit,
    onSuccess: (data) => {
      // dispatch(saveAuthorizedUser(data.data));
      // console.log(data);
    },
    onError: () => {
      // dispatch(saveAuthorizedUser(false));
    },
  });

  const { data: categoryData } = useQuery({
    queryKey: ["categoryData"],
    queryFn: () => getCategoryById(productData?.data.category_id),
    enabled: !!productData,
  });

  useEffect(() => {
    if (edit && productData?.data && categoryData) {
      generalArray.forEach((item: any) => {
        if (item.name === "category_id") {
          setValue("category_id", {
            value: productData.data.category_id,
            label: categoryData.data.name,
          });
        } else if (item.name === "image") {
          return;
        } else {
          setValue(item.name, productData.data[item.name]);
        }
      });
      extraFieldsBasedOnCategory.forEach((item: any) => {
        setValue(item.name, productData.data[category.label][item.name]);
      });
    }
  }, [
    edit,
    setValue,
    productData,
    categoryData,
    category?.label,
    extraFieldsBasedOnCategory,
  ]);

  // console.log(productData?.data);
  // console.log(categoryData?.data);

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
