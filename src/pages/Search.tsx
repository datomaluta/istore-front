import { useMutation } from "@tanstack/react-query";
import Header from "../components/header/Header";
import Layout from "../components/sharedComponents/layout/Layout";
import Pagination from "../components/sharedComponents/pagination/Pagination";
import { searchProducts } from "../../services/product";
import { useEffect, useState } from "react";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";
import { Product } from "../types/product";
import Loader from "../components/sharedComponents/Loader";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get("query");
  const [mutateData, setMutateData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Query parameter changed:", searchParam);
  }, [searchParam]);

  const { mutate: searchMutate, isLoading } = useMutation({
    mutationFn: searchProducts,
    onSuccess: (data) => {
      setMutateData(data.data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (searchParam) {
      searchMutate({ data: { search_query: searchParam }, page: currentPage });
    }
  }, [searchParam, searchMutate, currentPage]);

  return (
    <Layout>
      <Header />
      <div className="pt-40 pb-12 px-4">
        <div className="w-full flex flex-col min-h-screen justify-between">
          {mutateData?.data.length === 0 && (
            <p className="text-center">პროდუქტები ვერ მოიძებნა</p>
          )}
          <div
            className={`flex-grow grid gap-x-4 gap-y-8 grid-cols-4
         justify-items-center relative lg:w-full xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  ${
           true && "min-h-[30rem]"
         }`}
          >
            {isLoading && <Loader />}
            {mutateData?.data?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {mutateData?.data?.length && (
            <Pagination
              hrefSegment={`/search`}
              forSearch={searchParam}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={mutateData?.last_page}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
