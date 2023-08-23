import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { categories } from "../data/Categories";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getCategoryAllProducts } from "../../services/categoryService";
import { Product } from "../types/product";
import ProductCard from "../components/sharedComponents/productCard/ProductCard";

const Computers = () => {
  const id = 1;
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const testRequest = async () => {
      const response = await getCategoryAllProducts("computers");
      console.log(response);
      setProducts(response.data);
    };
    testRequest().catch((e) => console.log(e));

    // console.log(response);
  }, []);

  console.log(products);

  return (
    <>
      <Header />
      <div className="pt-40 px-4 flex gap-4 items-start lg:flex-col">
        <div className="bg-red-60 w-[25%] border border-neutral-500 rounded shrink-0 lg:w-full">
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
         justify-items-center lg:w-full md:grid-cols-2 sm:grid-cols-1 "
        >
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </>
  );
};

export default Computers;
