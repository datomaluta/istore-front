import { ProductCardPropsType } from "./types";

const ProductCard = ({ product }: ProductCardPropsType) => {
  return (
    <div
      className="bg-red-60 max-w-[17rem] rounded overflow-hidden px-2 py-2 border-neutral-400 border
     dark:bg-neutral-800 bg-white shadow-xl"
    >
      <div className="w-full h-[14rem]">
        <img
          src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${product?.image}`}
          alt=""
          className="rounded h-full object-cover border border-neutral-400 dark:border-none"
        />
      </div>
      <p className="h-12 mt-2 text-neutral-800 dark:text-neutral-300">
        {product.brand}
      </p>
      <p className="font-bold text-lg text-neutral-800 dark:text-neutral-300">
        {product.price}$
      </p>
    </div>
  );
};

export default ProductCard;
