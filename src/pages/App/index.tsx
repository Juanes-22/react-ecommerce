import { useRoutes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../context";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../components/Navbar";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
