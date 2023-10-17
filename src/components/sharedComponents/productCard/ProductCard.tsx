import { Link } from "react-router-dom";
import { ProductCardPropsType } from "./types";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../../../services/categoryService";
import { useState } from "react";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const ProductCard = ({ product }: ProductCardPropsType) => {
  const [productCategory, setProductCategory] = useState({});
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
     dark:bg-neutral-800 bg-white shadow-md transition-all hover:dark:bg-neutral-700 hover:bg-neutral-100 group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Link
          className=" px-2 py-2 block"
          to={`/product/${productCategory?.name}/${product?.id}`}
        >
          <div className="w-full max-h-[22.5rem] overflow-hidden rounded border border-greyForBorder dark:border-none">
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
          <p className="h-12 mt-2">{product?.brand}</p>
          <p className="font-bold text-lg">{product?.price}$</p>
        </Link>
      )}
    </motion.div>
  );
};

export default ProductCard;
