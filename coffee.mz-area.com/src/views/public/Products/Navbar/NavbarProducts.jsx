import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faChevronDown,
  faShoppingCart,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../Constant/routeConstant";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const NavbarProducts = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();

  const [dropDownOpen, setDropDown] = useState(false);

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decode = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decode.exp < currentTime;
    } catch (error) {
      console.log(error);
      toast.error("System Error");
    }
  };

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const expired = isTokenExpired(token);

  if (expired) {
    toast.error("You're Logout. Please Login First");
  }

  const handleDropdownClick = () => {
    setDropDown(!dropDownOpen); // Mengubah state isDropdownOpen menjadi kebalikannya
  };

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
        {expired ? (
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
        ) : (
          <>
            <div onClick={handleDropdownClick}>
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ color: "#FFFFFF" }}
              />
              <span className="font-mzarea text-[16px] items-center justify-center font-bold text-sm text-white px-3">
                {user.name}
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-[10px]"
                style={{ color: "#FFFFFF" }}
              />
            </div>
            {dropDownOpen && (
              <div className="absolute bg-white mt-[150px] py-2 w-48 shadow-xl rounded-md z-10 right-5">
                <div
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => {
                    navigate(ROUTES.PUBLIC.PRODUCT.CARTS);
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Carts
                </div>
                <div
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate(ROUTES.PUBLIC.PRODUCT.LIST);
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                  Logout
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarProducts;
