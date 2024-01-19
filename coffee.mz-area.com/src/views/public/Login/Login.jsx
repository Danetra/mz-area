import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginLogo from "../../../assets/img/coffee.jpeg";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full bg-white flex flex-row items-center justify-center">
      <div className="lg:w-[100%] h-full w-0 ">
        <img
          src={LoginLogo}
          alt="login-logo"
          className="object-cover h-[100vh] w-full h-full"
        />
      </div>
      <div className="lg:w-[50%] w-[80%] h-full flex flex-col items-center justify-center lg:pl-[-30px]">
        <div className="flex flex-col item-center justify-center mb-[50px] lg:pl-6">
          <p className="font-mzarea text-[#0A0A0A] text-[40px] font-bold ">
            LOG IN
          </p>
        </div>
        <form className="lg:pl-6">
          <div className="flex flex-col gap-[24px] items-center justify-center lg:w-[400px]">
            <div className="w-full mx-3 flex flex-row items-center justify-start bg-white border border-slate-300 rounded-md text-[gray]">
              <div>{<FontAwesomeIcon icon={faUser} className="mx-3" />}</div>
              <input
                type="email"
                className="font-mzarea font-bold bg-none outline-none border-none h-[40px] ml-3 w-full"
                placeholder="EMAIL"
                name="email"
                // onChange={handleChange}
              />
            </div>

            <div className="w-full mx-3 flex flex-row items-center justify-start bg-white border border-slate-300 rounded-md text-[gray]">
              <div>{<FontAwesomeIcon icon={faKey} className="mx-3" />}</div>
              <input
                type="password"
                className="font-mzarea font-bold bg-none outline-none border-none h-[40px] ml-3 w-full"
                placeholder="PASSWORD"
                name="password"
                // onChange={handleChange}
              />

              {/* <div>
                <p className="font-poppins text-[#A80000] text-[14px] font-light ">
                  Belum Memiliki Akun?
                </p>
              </div> */}
            </div>
          </div>
          <button
            type="submit"
            className="text-white w-full mt-[45px] font-semibold py-2 px-4 rounded-[15px] bg-[#4A4A4A]"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
