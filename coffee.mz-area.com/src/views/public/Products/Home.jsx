import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import NavbarProducts from "./Navbar/NavbarProducts";
import { ROUTES } from "../../../Constant/routeConstant";

import "swiper/css";
import "swiper/swiper-bundle.css";
import banner1 from "../../../assets/img/banner1.jpg";
import product1 from "../../../assets/img/product1.jpg";
import logoStore from "../../../assets/img/store.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#EFEFEF]">
      <NavbarProducts />

      <div id="content">
        <div className="swiper">
          <Swiper
            pagination={{
              type: "fraction",
              color: "white",
            }}
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination"></div>
        </div>

        <section id="highlight" className="mt-[100px]">
          <h3
            className="font-mzarea px-[80px] text-right cursor-pointer"
            onClick={() => {
              navigate(ROUTES.PUBLIC.PRODUCT.LIST);
            }}
          >
            See All
          </h3>
          <div className="grid justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[80px] py-8">
            <div className="w-50 h-100 md:w-65 md:h-100 rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={product1}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2 ">
                <div className="flex items-center cursor-pointer">
                  <div>
                    <img src={logoStore} className="inline" alt="" />
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black px-2">
                      KAFFEE AREA
                    </span>
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#53A72C" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 h-100 md:w-65 md:h-100 rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={product1}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2 ">
                <div className="flex items-center cursor-pointer">
                  <div>
                    <img src={logoStore} className="inline" alt="" />
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black px-2">
                      KAFFEE AREA
                    </span>
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#53A72C" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 h-100 md:w-65 md:h-100 rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={product1}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2 ">
                <div className="flex items-center cursor-pointer">
                  <div>
                    <img src={logoStore} className="inline" alt="" />
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black px-2">
                      KAFFEE AREA
                    </span>
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#53A72C" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 h-100 md:w-65 md:h-100 rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full"
                src={product1}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2 ">
                <div className="flex items-center cursor-pointer">
                  <div>
                    <img src={logoStore} className="inline" alt="" />
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black px-2">
                      KAFFEE AREA
                    </span>
                    <span className="font-mzarea text-[16px] font-bold text-sm text-black">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#53A72C" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="highlight" className="mt-[100px]">
          <div className="bg-[#FFFFFF]">
            <h1 className="font-mzarea font-bold text-[40px] px-[80px] py-10 text-center cursor-pointer">
              KATEGORI
            </h1>
            <div className="grid justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[80px] py-8 mx-auto">
              <div className="w-50 h-100 md:w-65 md:h-100 rounded overflow-hidden shadow-lg cursor-pointer">
                <img
                  className="w-full"
                  src={product1}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-5 mt-2">
                  <div className="font-mzarea items-center font-bold text-xl mb-2">
                    <p className="text-center">HOT COFFEE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
