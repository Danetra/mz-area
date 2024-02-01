import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../Constant/routeConstant";
import { ToastContainer } from "react-toastify";
import Login from "./public/Login/Login";
import Home from "./public/Products/Home";
import List from "./public/Products/List";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./public/Products/Detail";
import Cart from "./public/Products/Cart";

const Main = () => {
  return (
    <div className="w-[100vw] h-full max-w-[100vw] max-h-[100vh] overflow-auto">
      <ToastContainer />
      <Routes>
        <Route element={<Home />} path={ROUTES.PUBLIC.HOME} exact />
        <Route element={<List />} path={ROUTES.PUBLIC.PRODUCT.LIST} exact />
        <Route element={<Detail />} path={ROUTES.PUBLIC.PRODUCT.DETAIL} exact />
        <Route element={<Cart />} path={ROUTES.PUBLIC.PRODUCT.CARTS} exact />
        <Route element={<Login />} path={ROUTES.PUBLIC.LOGIN} exact />
      </Routes>
    </div>
  );
};

export default Main;
