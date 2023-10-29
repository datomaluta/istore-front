import { useDispatch } from "react-redux";
import { truncateText } from "../../../helpers/TextTrimmer";
import { Product } from "../../../types/product";
import SaleIcon from "../../icons/SaleIcon";
import { addProductToCart } from "../../../store/cartSlice/CartSlice";
import BasketIcon from "../../icons/BasketIcon";
import { Tooltip } from "@material-tailwind/react";

const DiscountSlide = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="mr-2 ml-2 sm:mr-0 sm:ml-0 px-2 py-2 h-[26rem] sm:h-[22rem]  flex flex-col  rounded bg-white overflow-hidden
     dark:bg-neutral-800 border border-neutral-300 dark:border-none  relative mb-4 font-sans"
    >
      <span className="absolute pl-24 w-56 h-8 bg-red-500 text-white -right-8 -top-5 rotate-[37deg] flex justify-center items-center gap-1">
        <SaleIcon />
        Sale
      </span>
      <div className="w-full shrink-0 h-[70%]   overflow-hidden mx-auto">
        <img
          className="h-full w-full rounded object-cover"
          src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${product?.image}`}
          alt="productimg"
        />
      </div>
      <h1 className="h-12  mt-3 sm:text-sm">
        {truncateText(product?.label, 50)}
      </h1>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex gap-2">
          <p className="font-bold text-lg sm:text-base">{product?.price}$</p>
          <p className="text-lg sm:text-base text-neutral-300 relative">
            {+product?.price + 1000}$
            <span className="absolute top-3 sm:top-[0.55rem] left-0 w-12 h-[0.1rem] bg-red-500"></span>
          </p>
        </div>

        <Tooltip
          content={"კალათაში დამატება"}
          placement="top"
          className="bg-primary p-2"
        >
          <button
            onClick={() => {
              dispatch(addProductToCart({ quantity: 1, product: product }));
            }}
            className="bg-primary h-8 w-8 rounded flex justify-center items-center"
            type="button"
          >
            <BasketIcon className="h-5" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default DiscountSlide;
