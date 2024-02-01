import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";
import NavbarProducts from "./Navbar/NavbarProducts";
import Filter from "./Filter/Filter";
import { listProduct } from "../../../service/productService";
import { ROUTES } from "../../../Constant/routeConstant";

import product1 from "../../../assets/img/product1.jpg";
import logoStore from "../../../assets/img/store.png";

const List = () => {
  const { state } = useState();
  const navigate = useNavigate();
  const [data, setData] = useState({
    docs: [],
  });

  const listProducts = async (data) => {
    try {
      const response = await listProduct({
        data: data,
      });
      if (response.status === true) {
        setData(response.data.data);
      }
    } catch (error) {
      toast.error("Terjadi Kesalahan Pada Sistem");
    }
  };

  useEffect(() => {
    listProducts({ page: 1, limit: 10, paginate: true });
  }, []);

  return (
    <div className="bg-[#EFEFEF] h-full">
      <NavbarProducts />
      <div className="flex">
        <Filter />

        <div className="flex lg:flex-wrap lg:mt-8 md:mt-8 max-[430px]:hidden ml-[10px]">
          {data.docs.map((product, index) => {
            console.log(product, "test product");
            return (
              <div className="lg:w-1/3 sm:w-1/2 md:p-[20px] sm:p-[100px]">
                <div
                  className="w-full h-30 md:w-full rounded-[20px] overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => {
                    navigate(
                      `${ROUTES.PUBLIC.PRODUCT.DETAIL}/?slug=${product.slug}`,
                    );
                  }}
                >
                  {product.images.map((img) => {
                    return (
                      <img
                        className="w-full w-[300px] h-[250px]"
                        src={img.url}
                        alt="Product"
                      />
                    );
                  })}
                  <div className="px-6 py-2 mt-2">
                    <div className="font-mzarea text-xl mb-2">
                      {product.name}
                    </div>
                    <div className="font-mzarea font-bold text-xl mb-2">
                      Rp{product.price.toLocaleString("id-ID")}
                    </div>
                  </div>
                  <div className="px-5 pb-2">
                    <div className="flex items-center cursor-pointer">
                      <div>
                        <img src={logoStore} className="inline" alt="" />
                        <span className="font-mzarea text-[16px] font-bold text-sm text-black px-2">
                          {product.store.name.toUpperCase()}
                        </span>
                        {product.store.official === 1 && (
                          <span className="font-mzarea text-[16px] font-bold text-sm text-black">
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              style={{ color: "#53A72C" }}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden grid justify-center items-center max-[430px]:grid-cols-2 max-[430px]:gap-1 py-8 px-4">
          {data.docs.map((product, index) => {
            return (
              <div className="max-[430px]:w-[170px] h-100 max-[430px]:rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px] max-[430px]:mb-[30px] max-[430px]:mx-[10px]">
                {product.images.map((img) => {
                  return (
                    <img
                      className="w-[170px] h-[150px]"
                      src={img.url}
                      alt="Sunset in the mountains"
                    />
                  );
                })}
                <div className="px-6 py-2 mt-2">
                  <div className="font-mzarea text-md mb-2">{product.name}</div>
                  <div className="font-mzarea font-bold text-md mb-2">
                    Rp{product.price.toLocaleString("id-ID")}
                  </div>
                </div>
                <div className="px-4 pb-2 ">
                  <div className="flex items-center cursor-pointer">
                    <div>
                      <img src={logoStore} className="inline w-[30px]" alt="" />
                      <span className="font-mzarea font-bold text-[10px] text-black px-2">
                        KAFFEE AREA
                      </span>
                      <span className="font-mzarea font-bold text-[15px] text-black mt-[15px]">
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#53A72C" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
