import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/admin/adminLayout/AdminLayout";
import { useQuery } from "@tanstack/react-query";
import { getCategoryAllProducts } from "../../../../services/categoryService";
import { useEffect, useState } from "react";
import { truncateText } from "../../../helpers/TextTrimmer";
import EditIcon from "../../../components/icons/EditIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import Pagination from "../../../components/sharedComponents/pagination/Pagination";
import { Product } from "../../../types/product";

const AdminComputers = () => {
  const { subCategory, page } = useParams();
  const [currentPage, setCurrentPage] = useState(page || 1);
  const navigate = useNavigate();

  const { data: productsQuery } = useQuery({
    queryKey: ["subCategory", currentPage],
    queryFn: () => getCategoryAllProducts(subCategory || "pc", currentPage),
    // onSuccess: (data) => {
    //   dispatch(saveAuthorizedUser(data.data));
    // },
    // onError: () => {
    //   dispatch(saveAuthorizedUser(false));
    // },
  });

  useEffect(() => {
    navigate(`/admin/computers/${subCategory}/${currentPage}`);
  }, [currentPage, navigate, subCategory]);

  return (
    <AdminLayout>
      <div className="w-full max-w-screen-lg mx-auto p-4 md:px-2 shadow-lg">
        <table className="min-w-full dark:bg-adminBgLightDark bg-white border-collapse border  rounded overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-6 md:px-2 py-3  bg-adminBgDark text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 v py-3  bg-adminBgDark text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 md:px-2 py-3 md:hidden  bg-adminBgDark text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 md:px-2 py-3  bg-adminBgDark text-left text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {productsQuery?.data?.data.map((product: Product) => (
              <tr key={product.id} className="text-sm">
                <td className="px-6 md:px-2 py-4 whitespace-no-wrap border-b border-gray-300">
                  <img
                    src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                      product?.image
                    }`}
                    alt="Image Alt Text"
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-6 md:px-2 md:text-xs py-4 whitespace-no-wrap border-b border-gray-300">
                  {truncateText(product.label, 40)}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 md:hidden">
                  {product.stock}
                </td>
                <td className="px-6 md:px-2 py-4 whitespace-no-wrap border-b border-gray-300">
                  <div className="flex gap-3 justify-end">
                    <button className="border p-1 rounded-full border-green-500">
                      <EditIcon />
                    </button>
                    <button className="border p-1 rounded-full border-red-500">
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          total={productsQuery?.data.last_page}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminComputers;
