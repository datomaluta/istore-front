import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/product";
import {
  laptopAndAllInOneArray,
  pcArray,
} from "../../data/StaticAddProductFormArray";

type extraFieldType = { name: string; label: string; type: string };

type extraFieldsArrayType = Array<extraFieldType>;

const useProductDetails = () => {
  const { t } = useTranslation();
  const { id, category = 1 } = useParams();
  const [extraFieldsBasedOnCategory, setExtraFieldsBasedOnCategory] =
    useState<extraFieldsArrayType>([]);

  const {
    data: productDetailsResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", category, id],
    queryFn: async () => await getProductById(id),
  });

  useEffect(() => {
    switch (category) {
      case "pc":
        setExtraFieldsBasedOnCategory(pcArray);
        break;
      case "laptop":
        setExtraFieldsBasedOnCategory(laptopAndAllInOneArray);
        break;
      case "all_in_one":
        setExtraFieldsBasedOnCategory(laptopAndAllInOneArray);
        break;
    }
  }, [category]);

  return {
    productDetailsResponse,
    isLoading,
    isError,
    t,
    extraFieldsBasedOnCategory,
    category,
  };
};
export default useProductDetails;
