import { createBrowserRouter } from "react-router";
import Main from "../LayOut/Main";
import Home from "../componants/Home/Home";
import LogingPage from "./../page/LogingPage";
import CheckOutPage from "../page/CheckOutPage";
import RegistrationPage from "../page/RegistationPage";

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
    ],
  },
]);
export default router;
