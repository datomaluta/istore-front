import { Link } from "react-router-dom";
import { ProductCardPropsType } from "./types";
import { motion } from "framer-motion";

const ProductCard = ({ product }: ProductCardPropsType) => {
  return (
    <motion.div
      className="max-w-[17rem] rounded overflow-hidden border-greyForBorder dark:border-greyforText border
     dark:bg-neutral-800 bg-white shadow-md transition-all hover:dark:bg-neutral-700 hover:bg-neutral-100 group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link className=" px-2 py-2 block" to="#">
        <div className="w-full h-[14rem] overflow-hidden rounded border border-greyForBorder dark:border-none">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
              product?.image
            }`}
            alt=""
            className="rounded h-full object-cover "
          />
        </div>
        <p className="h-12 mt-2">{product?.brand}</p>
        <p className="font-bold text-lg">{product?.price}$</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
