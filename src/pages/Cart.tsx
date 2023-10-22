import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import DeleteIcon from "../components/icons/DeleteIcon";
import Layout from "../components/sharedComponents/layout/Layout";
import { RootState } from "../store/store";
import { truncateText } from "../helpers/TextTrimmer";
import {
  addProductToCart,
  removeEntireProductFromCart,
  removeProductFromCart,
} from "../store/cartSlice/CartSlice";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  console.log(products);
  return (
    <Layout>
      <Header />

      <div className="pt-40 px-4 sm:px-2 pb-12 flex gap-4 lg:flex-col ">
        {/* this is products column */}
        <div className="w-[70%] lg:w-full flex flex-col gap-4 lg:pb-[240px]">
          {products?.map((item) => (
            <div
              key={item.product.id}
              className="flex  md:gap-4 justify-between items-center md:items-start bg-gray-200 dark:bg-adminBgLightDark p-4 lg:px-2 rounded-lg"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="h-12  w-12  object-cover rounded-full"
                  src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                    item.product.image
                  }`}
                  alt="laptop"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-xs">
                    {truncateText(item.product.label, 40)}
                  </p>
                  <p className=" font-bold">$ {item.product.price}</p>
                </div>
              </div>
              <div className="flex gap-4 md:flex-col items-end justify-between">
                <div className="flex gap-2 items-center">
                  <button
                    // disabled={quantity === 1}
                    onClick={() =>
                      dispatch(removeProductFromCart(item.product))
                    }
                    className="text-white bg-primary text-3xl w-7 rounded flex justify-center items-center h-7
                     disabled:bg-gray-400 disabled:cursor-not-allowed active:translate-y-1 active:bg-blue-700
                     active:shadow-lg transition-all"
                  >
                    -
                  </button>
                  <div
                    className="bg-transparent border-2 border-primary rounded w-7 h-7 text-center flex items-center justify-center"
                    defaultValue="1"
                  >
                    {item.quantity}
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        addProductToCart({ quantity: 1, product: item.product })
                      )
                    }
                    className="text-white bg-primary text-2xl w-7 rounded flex justify-center items-center h-7 active:translate-y-1 active:bg-blue-700
                    active:shadow-lg transition-all"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    dispatch(removeEntireProductFromCart(item.product))
                  }
                  className="border-2 border-red-500 rounded-full p-1"
                >
                  <DeleteIcon className="h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* this is price colu,m */}
        <div className=" w-[30%] lg:w-full lg:fixed lg:bottom-0 lg:left-0 lg:p-4 lg:bg-darkbg lg:bg-opacity-80 lg:backdrop-blur-3xl">
          <div className="bg-gray-200 dark:bg-adminBgLightDark2 p-3 rounded-lg rounded-b-none flex flex-col gap-5 lg:border-b lg:border-gray-500 ">
            <div className="flex justify-between">
              <p>ღირებულება</p>
              <p>$5797</p>
            </div>
            <div className="flex justify-between ">
              <p>მიწოდების ღირებულება</p>
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between mt-1 lg:mt-0 bg-gray-200 dark:bg-adminBgLightDark2 p-3 rounded-lg rounded-t-none lg:rounded-none">
            <p>გადასახდელი თანხა</p>
            <p>$5797</p>
          </div>
          <button className="bg-primary w-full mt-4 lg:mt-0 text-white p-3 rounded-lg lg:rounded-t-none">
            გადახდა
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
