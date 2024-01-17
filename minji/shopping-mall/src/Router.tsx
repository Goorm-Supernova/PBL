import { createBrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProducPage";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "product/:pId",
        element: <ProductPage />,
      },
    ],
  },
]);
