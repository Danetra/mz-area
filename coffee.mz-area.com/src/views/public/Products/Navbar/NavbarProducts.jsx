import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../Constant/routeConstant";

const NavbarProducts = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#4A4A4A] p-6 max-[430px]:my-[20px] max-[430px]:h-[60px] max-[430px]:rounded-[30px] max-[430px]:mx-[10px]">
      <div className="flex items-center flex-shrink-0 text-white mr-6 max-[430px]:mt-[-10px]">
        <span className="font-mzarea font-semibold text-xl tracking-tight">
          MZ-Area
        </span>
      </div>

      <div className="block lg:hidden max-[430px]:mt-[-10px]">
        <FontAwesomeIcon
          icon={faBars}
          className="flex items-center px-1 py-2 hover:text-white hover:border-white"
          style={{ color: "#FFFFFF" }}
        />
      </div>

      <div className="w-full block flex lg:flex lg:items-center lg:w-auto cursor-pointer max-[430px]:hidden">
        <div>
          <FontAwesomeIcon icon={faCircleUser} style={{ color: "#FFFFFF" }} />
          <span
            className="font-mzarea text-[16px] items-center justify-center font-bold text-sm text-white px-3"
            onClick={() => {
              navigate(ROUTES.PUBLIC.LOGIN);
            }}
          >
            LOG IN
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProducts;
