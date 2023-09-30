import { useLocation } from "react-router-dom";
import AddProductForm from "../../../components/admin/addProductComponents/AddProductForm";
import AdminLayout from "../../../components/admin/adminLayout/AdminLayout";

const AddProduct = () => {
  const { pathname } = useLocation();
  return (
    <AdminLayout>
      <AddProductForm edit={pathname.includes("edit")} />
    </AdminLayout>
  );
};
export default AddProduct;
