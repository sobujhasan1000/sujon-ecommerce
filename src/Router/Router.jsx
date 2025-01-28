import { createBrowserRouter } from "react-router";
import Main from "../LayOut/Main";
import Home from "../componants/Home/Home";
import LogingPage from "./../page/LogingPage";
import CheckOutPage from "../page/CheckOutPage";
import RegistrationPage from "../page/RegistationPage";
import CustomerOrder from "../page/CustomerOrder";
import DelevaryProducts from "../page/DelevaryProducts";
import MyOrders from "../page/MyOrders";
import ProductPost from "../page/ProductPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogingPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/checkOutPage",
        element: <CheckOutPage />,
      },
      {
        path: "/myorders",
        element: <MyOrders />,
      },
      {
        path: "/customerOrder",
        element: <CustomerOrder />,
      },
      {
        path: "/allDelevary",
        element: <DelevaryProducts />,
      },
      {
        path: "/postProduct",
        element: <ProductPost />,
      },
    ],
  },
]);
export default router;
