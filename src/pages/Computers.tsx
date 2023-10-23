import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { categories } from "../data/Categories";
import { useTranslation } from "react-i18next";
import { getCategoryAllProducts } from "../../services/categoryService";
import { Product } from "../types/product";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/sharedComponents/Loader";
import { useEffect, useState } from "react";
import Pagination from "../components/sharedComponents/pagination/Pagination";
import Layout from "../components/sharedComponents/layout/Layout";

const Computers = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page || 1);

  useEffect(() => {
    if (page) setCurrentPage(page);
  }, [page]);

  const { isLoading, data: computersQuery } = useQuery({
    queryKey: ["computers", currentPage],
    queryFn: () => getCategoryAllProducts("computers", currentPage),
  });

  return (
    <Layout>
      <Header />

      <div className="pt-40 px-4 pb-12 flex gap-4 items-start lg:flex-col">
        <div className="bg-red-60 w-[25%] border border-greyForBorder dark:border-greyforText rounded shrink-0 lg:w-full">
          <p className="text-lg px-2 py-2 text-primary font-bold">
            {t("computers_subcategories")}
          </p>
          <ul className="flex flex-col">
            {categories
              .find((category) => category.fullName === pathname.split("/")[1])
              ?.subCategories?.map((subCat) => (
                <li
                  key={subCat}
                  className=" border-t border-greyForBorder dark:border-greyforText p-2 pl-4 
                  hover:text-primary hover:bg-neutral-800 group"
                >
                  <Link
                    className="w-full block group-hover:text-primary"
                    to={`/computers/${subCat}/page/1`}
                  >
                    {t(subCat)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className=" w-full min-h-screen flex flex-col justify-between">
          <div
            className={`bg-blue-5 grid gap-x-4 gap-y-8 grid-cols-3 
            justify-items-center lg:w-full md:grid-cols-2 sm:grid-cols-1 relative ${
              isLoading && "min-h-[30rem]"
            }`}
          >
            {isLoading && <Loader />}

            {computersQuery?.data?.data?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {computersQuery?.data?.data && (
            <Pagination
              hrefSegment={"/computers"}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={computersQuery?.data.last_page}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Computers;
