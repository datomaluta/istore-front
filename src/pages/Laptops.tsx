import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";
import { categories } from "../data/Categories";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChangeEvent } from "react";

const Laptops = () => {
  let id = 1;
  const { t } = useTranslation();
  const location = useLocation();
  const [price, setPrice] = useState(100);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setPrice(+e.target.value);
  };
  console.log(location.pathname.split("/")[2]);
  return (
    <>
      <Header />
      <div className="pt-40 px-4 flex gap-4 items-start lg:flex-col">
        <div className="bg-red-60 w-[25%]  rounded shrink-0 lg:w-full">
          <div className="border border-neutral-500 rounded">
            <p className="text-lg px-2 py-2 text-primary font-bold">
              Subcategories
            </p>
            <ul className="flex flex-col">
              {categories
                .find((category) => category.id === id)
                ?.subCategories?.map((subCat) => (
                  <li
                    key={subCat}
                    className=" border-t border-neutral-500 p-2 pl-4 text-neutral-900  dark:text-neutral-200 
                  hover:text-primary hover:bg-neutral-800 group"
                  >
                    <Link
                      className={`w-full block group-hover:text-primary ${
                        location.pathname.split("/")[2] === subCat
                          ? "text-primary"
                          : ""
                      }`}
                      to={`/computers/${subCat}`}
                    >
                      {t(subCat)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col mt-10 sm:mt-4 md:mb-4">
            <label htmlFor="">Price</label>
            <input
              className=""
              type="range"
              onInput={changeHandler}
              defaultValue={100}
            />
            <p>{price}.00$</p>
          </div>
        </div>

        <div
          className="bg-blue-5 flex-grow grid gap-x-2 gap-y-8 grid-cols-3
         justify-items-center lg:w-full md:grid-cols-2 sm:grid-cols-1 "
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Laptops;
