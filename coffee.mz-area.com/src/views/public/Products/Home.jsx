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
        <div className="swiper" id="swiper-homepage">
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

        <section id="highlight" className="mt-[100px] max-[425px]:mt-[40px]">
          <h3
            className="font-mzarea xl:px-[175px] lg:px-[10px] md:px-[110px] text-right cursor-pointer"
            onClick={() => {
              navigate(ROUTES.PUBLIC.PRODUCT.LIST);
            }}
          >
            See All
          </h3>
          <div className="grid justify-center items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xl:gap-4 lg:gap-4 md:gap-5 sm:gap-5 xl:px-[150px] lg:px-[10px] md:px-[100px] py-8 lg:ml-[0px] md:ml-[30px] max-[425px]:hidden">
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
              <img
                className="max-w-[250px]"
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

          {/* <div className="grid justify-center items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xl:gap-4 lg:gap-4 md:gap-5 sm:gap-5 xl:px-[150px] lg:px-[10px] md:px-[100px] py-8 lg:ml-[0px] md:ml-[30px]">
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px] min-[320px]:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px] min-[320px]:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px] min-[320px]:mb-[30px]">
              <img
                className="max-w-[250px]"
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
            <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px] min-[320px]:mb-[30px]">
              <img
                className="max-w-[250px]"
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
          </div> */}
        </section>

        <section id="kategori" className="mt-[100px]">
          <div className="bg-[#FFFFFF]">
            <h1 className="font-mzarea font-bold text-[40px] px-[80px] py-10 text-center cursor-pointer">
              KATEGORI
            </h1>

            <div className="grid justify-center items-center md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:gap-5 sm:gap-5 lg:px-[150px] md:px-[100px] py-8 md:ml-[30px]">
              <div className="lg:w-[250px] md:w-[250px] h-100 rounded overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
                <img
                  className="max-w-[250px]"
                  src={product1}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-2 mt-2">
                  <div className="font-mzarea font-bold text-xl mb-2 text-center">
                    COFFEE
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
