import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";
import { categories } from "../data/Categories";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { getCategoryAllProducts } from "../../services/categoryService";
import { Product } from "../types/product";
import { useQuery } from "@tanstack/react-query";
import Layout from "../components/sharedComponents/layout/Layout";
import Pagination from "../components/sharedComponents/pagination/Pagination";
import Loader from "../components/sharedComponents/Loader";

const SubCategory = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [price, setPrice] = useState(100);
  const { subCategory, page } = useParams();
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(page || 1);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  // useEffect(() => {
  //   if (page) setCurrentPage(page);
  // }, [page]);

  const { data: subCategoryQuery, isLoading } = useQuery({
    queryKey: ["subCategory", subCategory, currentPage],
    queryFn: () => getCategoryAllProducts(subCategory || "laptop", currentPage),
  });

  return (
    <Layout>
      <Header />
      <div className="pt-40 pb-12 px-4 flex gap-4 items-start lg:flex-col">
        <div className="bg-red-60 w-[25%]  rounded shrink-0 lg:w-full">
          <div className="border border-neutral-500 rounded">
            <p className="text-lg px-2 py-2 text-primary font-bold">
              {t("computers_subcategories")}
            </p>
            <ul className="flex flex-col">
              {categories
                .find(
                  (category) => category.fullName === pathname.split("/")[1]
                )
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
                      to={`/${pathname.split("/")[1]}/${subCat}/page/1`}
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

        <div className="w-full flex flex-col min-h-screen justify-between">
          <div
            className={`flex-grow grid gap-x-4 gap-y-8 grid-cols-3
         justify-items-center relative lg:w-full md:grid-cols-2 sm:grid-cols-1  ${
           isLoading && "min-h-[30rem]"
         }`}
          >
            {isLoading && <Loader />}
            {subCategoryQuery?.data?.data?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {subCategoryQuery?.data?.data && (
            <Pagination
              hrefSegment={`/computers/${subCategory}`}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={subCategoryQuery?.data?.last_page}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SubCategory;
