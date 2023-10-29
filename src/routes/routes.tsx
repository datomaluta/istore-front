import CheckAuthAndAdmin from "../components/auth/checkAuthAndAdmin/CheckAuthAndAdmin";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Computers from "../pages/Computers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import SubCategory from "../pages/SubCategory";
import AddProduct from "../pages/admin/addProduct/AddProduct";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminSubCategory from "../pages/admin/subCategory/AdminSubCategory";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/computers/page/:page", component: <Computers /> },
  { path: "/computers/:subCategory/page/:page", component: <SubCategory /> },
  { path: "/product/:category/:id", component: <ProductDetails /> },

  {
    path: "/admin/dashboard",
    component: (
      <CheckAuthAndAdmin admin={true}>
        <Dashboard />
      </CheckAuthAndAdmin>
    ),
  },
  { path: "/profile", component: <Profile /> },

  {
    path: "/admin/:category/:subCategory/page/:page",
    component: <AdminSubCategory />,
  },

  { path: "/admin/product/add/:subCategory", component: <AddProduct /> },
  { path: "/admin/product/:id/edit", component: <AddProduct /> },
  { path: "/cart", component: <Cart /> },
  { path: "/search/page/:page", component: <Search /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
];
