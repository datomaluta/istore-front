import Header from "../components/header/Header";
import Layout from "../components/sharedComponents/layout/Layout";
import BasketIcon from "../components/icons/BasketIcon";
import { generalArray } from "../data/StaticAddProductFormArray";
import Loader from "../components/sharedComponents/Loader";
import { motion } from "framer-motion";
import NotFoundComponent from "../components/sharedComponents/notFoundComponent/NotFoundComponent";
import useProductDetails from "../hooks/productDetailsHooks/useProductdetails";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addProductToCart } from "../store/cartSlice/CartSlice";

const ProductDetails = () => {
  const {
    productDetailsResponse,
    isLoading,
    isError,
    t,
    extraFieldsBasedOnCategory,
    category,
  } = useProductDetails();

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  console.log(products);

  let count = 0;

  return (
    <Layout>
      <Header />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <NotFoundComponent />
      ) : (
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="py-40"
        >
          <div className="flex gap-8 px-8 lg:px-3  lg:flex-col">
            <div className="w-[33%] lg:w-[300px] sm:w-full sm:mx-auto flex-shrink-0 border-4 border-primary p-3 rounded">
              <img
                className="w-full h-full object-cover rounded"
                src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                  productDetailsResponse?.data?.image
                }`}
                alt="this is image"
              />
            </div>
            <div className="mx-auto flex flex-col justify-between flex-1  w-full">
              <div className="border-b border-adminBgLightDark pb-12">
                <h1 className="text-2xl sm:text-xl mb-4 font-sans font-bold">
                  {productDetailsResponse?.data?.label}
                </h1>
                <h3 className="text-red-500 text-3xl sm:text-2xl font-sans font-bold">
                  $ {productDetailsResponse?.data?.price}
                </h3>
                <p className="mt-4 mb-6">
                  {t("stock")}: {productDetailsResponse?.data?.stock}
                </p>
                <div className="flex gap-2 items-center">
                  <button
                    disabled={quantity === 1}
                    onClick={() => setQuantity((currState) => currState - 1)}
                    className="text-white bg-primary text-3xl w-10 rounded flex justify-center items-center h-10
                     disabled:bg-gray-400 disabled:cursor-not-allowed active:translate-y-1 active:bg-blue-700
                     active:shadow-lg transition-all"
                  >
                    -
                  </button>
                  <div
                    className="bg-transparent border-2 border-primary rounded w-10 h-10 text-center flex items-center justify-center"
                    defaultValue="1"
                  >
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity((currState) => currState + 1)}
                    className="text-white bg-primary text-2xl w-10 rounded flex justify-center items-center h-10 active:translate-y-1 active:bg-blue-700
                    active:shadow-lg transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addProductToCart({
                      quantity,
                      product: productDetailsResponse?.data,
                    })
                  )
                }
                className="text-white bg-primary w-full py-3 rounded mt-10 flex items-center gap-2 justify-center "
              >
                <BasketIcon />
                {t("add_to_cart")}
              </button>
            </div>
          </div>

          <div className="px-8 md:px-3 mt-12 ">
            <h1 className="text-lg border-b-2 pb-2 px-2 border-primary w-max mb-6">
              {t("detail_info")}
            </h1>
            <table className="w-full font-sans">
              <tbody>
                {generalArray.map((item, index) => {
                  count++;
                  if (item.name === "image" || item.name === "category_id") {
                    count--;
                    return;
                  }
                  return (
                    <tr
                      key={index}
                      className={`${
                        count % 2 === 0 ? "" : "dark:bg-darkbg bg-gray-200"
                      }`}
                    >
                      <td className="p-4  w-1/2">{t(item.name)}</td>
                      <td className="p-4">
                        {productDetailsResponse?.data[item.name]}
                      </td>
                    </tr>
                  );
                })}
                {extraFieldsBasedOnCategory?.map((item, index) => {
                  count++;
                  return (
                    <tr
                      key={index + Math.random()}
                      className={`${
                        count % 2 === 0 ? "" : "dark:bg-darkbg bg-gray-200"
                      }`}
                    >
                      <td className="p-4  w-1/2">{item.label}</td>
                      <td className="p-4">
                        {productDetailsResponse?.data[category]
                          ? productDetailsResponse?.data[category][item.name]
                          : ""}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </Layout>
  );
};

export default ProductDetails;
