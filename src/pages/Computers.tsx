import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { categories } from "../data/Categories";
import { useTranslation } from "react-i18next";
import { getCategoryAllProducts } from "../../services/categoryService";
import { Product } from "../types/product";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/sharedComponents/Loader";
import { useEffect, useState } from "react";

const Computers = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [itsTime, setItsTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItsTime(true);
    }, 2000);
  }, []);

  const computersQuery = useQuery({
    queryKey: ["computers"],
    queryFn: () => getCategoryAllProducts("computers"),
    enabled: itsTime,
  });

  return (
    <>
      <Header />

      <div className="pt-40 px-4 flex gap-4 items-start lg:flex-col">
        <div className="bg-red-60 w-[25%] border border-greyForBorder dark:border-greyforText rounded shrink-0 lg:w-full">
          <p className="text-lg px-2 py-2 text-primary font-bold">
            Subcategories
          </p>
          <ul className="flex flex-col">
            {categories
              .find((category) => category.href === pathname)
              ?.subCategories?.map((subCat) => (
                <li
                  key={subCat}
                  className=" border-t border-greyForBorder dark:border-greyforText p-2 pl-4 
                  hover:text-primary hover:bg-neutral-800 group"
                >
                  <Link
                    className="w-full block group-hover:text-primary"
                    to={`/computers/${subCat}`}
                  >
                    {t(subCat)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div
          className="bg-blue-5 flex-grow grid gap-x-2 gap-y-8 grid-cols-3
         justify-items-center lg:w-full md:grid-cols-2 sm:grid-cols-1 relative  min-h-[30rem]"
        >
          {computersQuery.isLoading && <Loader />}

          {computersQuery?.data?.data?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Computers;
