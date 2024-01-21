import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../Constant/routeConstant";
import { ToastContainer } from "react-toastify";
import Login from "./public/Login/Login";
import Home from "./public/Products/Home";
import List from "./public/Products/List";
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
        <Route element={<Cart />} path={ROUTES.PUBLIC.PRODUCT.CART} exact />
        <Route element={<Login />} path={ROUTES.PUBLIC.LOGIN} exact />
        {/* <Route
          element={<PrivateRoute children={<Dashboard />} />}
          path={ROUTES.ADMIN.DASHBOARD}
          exact
        />
        <Route
          element={<PrivateRoute children={<Berita />} />}
          path={ROUTES.ADMIN.NEWS.LIST}
          exact
        />
        <Route
          element={<PrivateRoute children={<TambahBerita />} />}
          path={ROUTES.ADMIN.NEWS.ADD}
          exact
        /> */}
      </Routes>
    </div>
  );
};

export default Main;
