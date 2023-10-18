import { Link } from "react-router-dom";
import { ProductCardPropsType, categoryType } from "./types";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../../../services/categoryService";
import { useState } from "react";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { truncateText } from "../../../helpers/TextTrimmer";

const ProductCard = ({ product }: ProductCardPropsType) => {
  const [productCategory, setProductCategory] = useState<categoryType>();
  const { isLoading } = useQuery({
    queryKey: ["category_info"],
    queryFn: () => getCategoryById(product?.category_id),
    onSuccess: (data) => {
      setProductCategory(data?.data);
    },
  });

  return (
    <motion.div
      className="w-full rounded overflow-hidden border-greyForBorder dark:border-greyforText border
     dark:bg-neutral-800  bg-white h-[380px] shadow-md transition-all hover:dark:bg-neutral-700 hover:bg-neutral-100 group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {isLoading ? (
        <div className="h-full  flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <Link
          className="px-2 pt-2 pb-4 block h-full"
          to={`/product/${productCategory?.name}/${product?.id}`}
        >
          <div className="w-full h-[70%]  overflow-hidden rounded border border-greyForBorder dark:border-none">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                product?.image
              }`}
              alt=""
              className="rounded w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="h-12 mt-4">{truncateText(product?.label, 50)}</p>
            <p className="font-bold text-lg text-right">{product?.price}$</p>
          </div>
        </Link>
      )}
    </motion.div>
  );
};

export default ProductCard;
