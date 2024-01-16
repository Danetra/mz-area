import { Navigate } from "react-router-dom";
import { ROUTES } from "../Constant/routeConstant";
import MasterLayout from "../layouts/MasterLayout";

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token && token.length > 0) {
    return <MasterLayout>{children}</MasterLayout>;
  } else {
    return <Navigate to={ROUTES.LOGIN} />;
  }
};

export default PrivateRoutes;
