import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import NavbarProducts from "./Navbar/NavbarProducts";
import { ROUTES } from "../../../Constant/routeConstant";

import product1 from "../../../assets/img/product1.jpg";
import logoStore from "../../../assets/img/store.png";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <NavbarProducts />

      <div className="bg-[#EFEFEF] h-full">
        <div className="flex">
          <div className="px-[100px] py-[80px] md:block max-[430px]:hidden">
            <div className="w-[1200px] justify-center items-center rounded-[20px] overflow-hidden shadow-xl bg-white">
              <div className="flex flex-wrap">
                <div className="lg:w-2/4">
                  <div className="pl-[50px] py-[50px]">
                    <img
                      className="max-w-[525px] max-h-[450px] rounded-[10px]"
                      src={product1}
                    />
                  </div>
                  <div className="flex flex-wrap max-w-[510px] justify-center mt-[-70px] max-[430px]:hidden px-[30px] ml-[20px] py-[30px]">
                    <div className="lg:w-1/4 sm:w-1/2">
                      <div className="max-w-[100px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer">
                        <img
                          className="max-w-[100px]"
                          src={product1}
                          alt="Product"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2">
                      <div className="max-w-[100px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer">
                        <img
                          className="max-w-[100px]"
                          src={product1}
                          alt="Product"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2">
                      <div className="max-w-[100px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer">
                        <img
                          className="max-w-[100px]"
                          src={product1}
                          alt="Product"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/4">
                  {/* Judul */}
                  <div className="pt-[80px] pb-[40px]">
                    <div className="font-mzarea font-bold text-xl text-[50px] mb-2">
                      Caramel Macchiato
                    </div>
                    <div className="font-mzarea text-xl text-[30px] mb-2 mt-[25px] mx-[5px]">
                      Rp32.000
                    </div>
                  </div>
                  <hr className="w-[440px] mx-[5px] border-t-2 border-gray-200" />

                  {/* Deskripsi */}
                  <div className="pr-[150px] py-[20px]">
                    <div className="font-mzarea font-bold mx-[5px] text-xl text-[20px] mb-2">
                      Deskripsi:
                    </div>
                    <div className="font-mzarea text-xl text-[20px] mb-2 mt-[20px] mx-[5px]">
                      Kopi Susu dengan rasa caramel macchiato yang dapat
                      mengguggah hati para peminumnya
                    </div>
                  </div>

                  {/* Store */}
                  <hr className="w-[440px] mx-[5px] border-t-2 border-gray-200" />
                  <div className="pr-[150px] py-[20px]">
                    <div className="flex items-center cursor-pointer">
                      <div>
                        <img
                          src={logoStore}
                          className="inline w-[40px]"
                          alt=""
                        />
                        <span className="font-mzarea text-[20px] font-bold text-lg text-black px-2">
                          KAFFEE AREA
                        </span>
                        <span className="w-[40px] font-mzarea font-bold text-lg text-black">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            style={{ color: "#53A72C" }}
                          />
                        </span>
                        <br />
                        <label
                          htmlFor=""
                          className="font-mzarea text-[20px] text-xl text-black mx-[45px]"
                        >
                          Jakarta Selatan
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Pesan */}
                  <hr className="w-[440px] mx-[5px] border-t-2 border-gray-200" />
                  <div className="pr-[150px] py-[30px] ml-[130px] justify-center items-center">
                    <button
                      type="submit"
                      className="text-white w-[200px] font-semibold py-2 px-4 rounded-[30px] bg-[#4A4A4A]"
                    >
                      <span className="w-[40px] font-mzarea mr-[10px] font-bold text-lg text-black">
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ color: "#FFFFFF" }}
                        />
                      </span>
                      <span className="font-mzarea text-[20px] font-bold text-lg text-white px-2">
                        PESAN
                      </span>
                    </button>
                  </div>
                </div>

                <div className="lg:w-4/4">
                  <div className="px-[50px] py-[50px]">
                    <hr className="w-full border-t-2 border-gray-200" />
                    <div className="font-bold text-l mb-2 mt-8 uppercase">
                      Produk Lainnya
                    </div>
                    <div className="grid justify-center items-center lg:grid-cols-4 md:grid-cols-4 xl:gap-4 lg:gap-4 md:gap-5 py-3 max-[425px]:hidden">
                      <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
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
                      <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
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
                      <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
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
                      <div className="xl:w-[250px] lg:w-[250px] md:w-[250px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer md:mb-[30px]">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
