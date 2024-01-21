import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import NavbarProducts from "./Navbar/NavbarProducts";

import product1 from "../../../assets/img/product1.jpg";
import logoStore from "../../../assets/img/store.png";

const List = () => {
  return (
    <div className="bg-[#EFEFEF] h-full">
      <NavbarProducts />
      <div className="flex">
        <div className="filter px-[50px] py-[50px] md:block max-[430px]:hidden">
          <div className="w-[350px] rounded-[20px] overflow-hidden shadow-xl bg-white">
            <div className="px-5">
              <div className="font-bold text-l mb-2 mt-8 uppercase">
                Category
              </div>
              <div className="px-10">
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-blac uppercase"
                  >
                    All
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Coffee
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Non Coffee
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Brew
                  </label>
                </div>

                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Water
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Tea
                  </label>
                </div>

                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    className="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Non Coffee
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" type="checkbox" />
                  <label
                    htmlFor="all"
                    class="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    Tea
                  </label>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div className="px-8">
              <div className="font-bold text-l mb-2 mt-8 uppercase">Price</div>
              <div>
                <div className="checkbox mb-2">
                  <input
                    className="w-full cursor-pointer bg-transparent "
                    type="range"
                    min={20000}
                    max={50000}
                  />
                </div>
              </div>
              <hr className="mt-6" />
            </div>
            <div className="px-8">
              <div className="font-bold text-l mb-2 mt-8 uppercase">Year</div>
              <div className="px-10">
                <div className="checkbox mb-2">
                  <input id="all" value={`all`} type="checkbox" />
                  <label
                    htmlFor="all"
                    class="ms-2 text-sm font-medium text-black dark:text-blac uppercase"
                  >
                    All
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" value={`2023`} type="checkbox" />
                  <label
                    htmlFor="all"
                    class="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    2023
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" value={`2022`} type="checkbox" />
                  <label
                    htmlFor="all"
                    class="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    2022
                  </label>
                </div>
                <div className="checkbox mb-2">
                  <input id="all" value={`2021`} type="checkbox" />
                  <label
                    htmlFor="all"
                    class="ms-2 text-sm font-medium text-black dark:text-black uppercase"
                  >
                    2021
                  </label>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-wrap lg:mt-8 md:mt-8 max-[430px]:hidden">
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
          <div className="lg:w-1/3 sm:w-1/2 md:p-[50px] sm:p-[100px] mt-[-30px] ml-[-30px]">
            <div className="w-full h-30 md:w-full md:h-30 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
              <img className="w-full h-25" src={product1} alt="Product" />
              <div className="px-6 py-2 mt-2">
                <div className="font-mzarea text-xl mb-2">
                  Caramel Macchiato
                </div>
                <div className="font-mzarea font-bold text-xl mb-2">
                  Rp32.000
                </div>
              </div>
              <div className="px-5 pb-2">
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
        </div>

        <div className="lg:hidden grid justify-center items-center max-[430px]:grid-cols-2 max-[430px]:gap-1 py-8 ">
          <div className="max-[430px]:w-[200px] h-100 max-[430px]:rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px] max-[430px]:mb-[30px] max-[430px]:mx-[6px]">
            <img
              className="max-w-[200px]"
              src={product1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2 mt-2">
              <div className="font-mzarea text-xl mb-2">Caramel Macchiato</div>
              <div className="font-mzarea font-bold text-xl mb-2">Rp32.000</div>
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
          <div className="max-[430px]:w-[200px] h-100 max-[430px]:rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px] max-[430px]:mb-[30px] max-[430px]:mx-[6px]">
            <img
              className="max-w-[200px]"
              src={product1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2 mt-2">
              <div className="font-mzarea text-xl mb-2">Caramel Macchiato</div>
              <div className="font-mzarea font-bold text-xl mb-2">Rp32.000</div>
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
          <div className="max-[430px]:w-[200px] h-100 max-[430px]:rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px] max-[430px]:mb-[30px] max-[430px]:mx-[6px]">
            <img
              className="max-w-[200px]"
              src={product1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2 mt-2">
              <div className="font-mzarea text-xl mb-2">Caramel Macchiato</div>
              <div className="font-mzarea font-bold text-xl mb-2">Rp32.000</div>
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
          <div className="max-[430px]:w-[200px] h-100 max-[430px]:rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px] max-[430px]:mb-[30px] max-[430px]:mx-[6px]">
            <img
              className="max-w-[200px]"
              src={product1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2 mt-2">
              <div className="font-mzarea text-xl mb-2">Caramel Macchiato</div>
              <div className="font-mzarea font-bold text-xl mb-2">Rp32.000</div>
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
      </div>
    </div>
  );
};

export default List;
