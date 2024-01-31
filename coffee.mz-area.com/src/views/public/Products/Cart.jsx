import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import NavbarProducts from "./Navbar/NavbarProducts";
import { ROUTES } from "../../../Constant/routeConstant";

import product1 from "../../../assets/img/product1.jpg";
import product2 from "../../../assets/img/product2.jpg";
import logoStore from "../../../assets/img/store.png";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <NavbarProducts />

      <div className="bg-[#EFEFEF] h-full">
        <div className="flex">
          <div className="px-[50px] md:block max-[430px]:hidden">
            <div className="font-bold text-l mb-2 mt-8 uppercase">
              Produk Lainnya
            </div>

            <div className="lg:w-2/4">
              <div className="flex flex-wrap mb-[20px]">
                <div className="w-[1600px] justify-center items-center rounded-[20px] overflow-hidden shadow-xl bg-white mb-3">
                  <div className="px-[30px] py-[20px]">
                    <input
                      id="all"
                      type="checkbox"
                      className="w-[20px] h-[20px]"
                    />
                    <div className="font-mzarea ml-[50px] mt-[-25px] text-[15px] text-sm font-bold text-black uppercase">
                      Pilih Semua
                    </div>
                  </div>
                </div>
              </div>

              {/* Produk Pemesanan */}
              <div className="flex flex-wrap mb-[20px]">
                <div className="w-[1600px] justify-center items-center rounded-[20px] overflow-hidden shadow-xl bg-white mb-3">
                  <div id="store">
                    <div className="px-[30px] py-[20px]">
                      <input
                        id="all"
                        type="checkbox"
                        className="w-[20px] h-[20px]"
                      />
                      <img
                        src={logoStore}
                        className="inline w-[25px] mx-[20px] mt-[-15px]"
                        alt=""
                      />
                      <div className="font-mzarea ml-[70px] mt-[-28px] text-[15px] text-sm font-bold text-black uppercase">
                        Kaffee Area
                      </div>
                    </div>
                  </div>
                  <div id="product">
                    <div className="px-[30px] py-[20px] flex flex-wrap">
                      <input
                        id="all"
                        type="checkbox"
                        className="w-[20px] h-[20px]"
                      />
                      <div className="max-w-[100px] mx-[20px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer mt-[-5px]">
                        <img
                          className="max-w-[100px]"
                          src={product1}
                          alt="Product"
                        />
                      </div>
                      <div className="flex">
                        <div className="w-1/2 mt-[10px]">
                          <div className="font-mzarea text-[15px] text-lg font-bold text-black uppercase">
                            Caramel Macchiato
                          </div>
                          <div className="font-mzarea text-[15px] text-[#979797] text-lg font-regular text-black uppercase">
                            Coffee - Iced
                          </div>
                        </div>
                        <div className="w-1/2 items-right mt-[10px] justify-end">
                          <div className="font-mzarea text-[15px] text-lg font-bold text-black">
                            Rp32.000
                          </div>
                          <div className="font-mzarea text-[15px] text-[#979797] text-lg font-regular text-black"></div>
                        </div>
                      </div>
                    </div>

                    <div className="px-[30px] py-[20px] flex flex-wrap">
                      <input
                        id="all"
                        type="checkbox"
                        className="w-[20px] h-[20px]"
                      />
                      <div className="max-w-[100px] mx-[20px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer mt-[-5px]">
                        <img
                          className="max-w-[100px]"
                          src={product2}
                          alt="Product"
                        />
                      </div>
                      <div className="mt-[10px]">
                        <div className="font-mzarea text-[15px] text-lg font-bold text-black uppercase">
                          Blue Flagora
                        </div>
                        <div className="font-mzarea text-[15px] text-[#979797] text-lg font-regular text-black uppercase">
                          Fresh Mochies
                        </div>
                      </div>
                      <div className="items-right ml-[330px] mt-[10px]">
                        <div className="font-mzarea text-[15px] text-lg font-bold text-black">
                          Rp38.000
                        </div>
                        <div className="font-mzarea text-[15px] text-[#979797] text-lg font-regular text-black"></div>
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

export default Cart;
