import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginLogo from "../../../assets/img/coffee.jpeg";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../../service/authService";
import { toast } from "react-toastify";
import ROUTES from "../../../Constant/routeConstant";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginAction({ data: formData });
      console.log(response, "test response");
      if (response.status === true) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        toast.success(response.data.message);
        navigate(ROUTES.PUBLIC.HOME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-row items-center justify-center">
      <div className="lg:w-[100%] h-full w-0 ">
        <img
          src={LoginLogo}
          alt="login-logo"
          className="object-cover h-[100vh] w-full"
        />
      </div>
      <div className="lg:w-[50%] w-[80%] h-full flex flex-col items-center justify-center lg:pl-[-30px]">
        <div className="flex flex-col item-center justify-center mb-[50px] lg:pl-6">
          <p className="font-mzarea text-[#0A0A0A] text-[40px] font-bold ">
            LOG IN
          </p>
        </div>
        <form className="lg:pl-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[24px] items-center justify-center lg:w-[400px]">
            <div className="w-full mx-3 flex flex-row items-center justify-start bg-white border border-slate-300 rounded-md text-[gray]">
              <div>{<FontAwesomeIcon icon={faUser} className="mx-3" />}</div>
              <input
                type="email"
                className="font-mzarea font-bold bg-none outline-none border-none h-[40px] ml-3 w-full"
                placeholder="EMAIL"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mx-3 flex flex-row items-center justify-start bg-white border border-slate-300 rounded-md text-[gray]">
              <div>{<FontAwesomeIcon icon={faKey} className="mx-3" />}</div>
              <input
                type="password"
                className="font-mzarea font-bold bg-none outline-none border-none h-[40px] ml-3 w-full"
                placeholder="PASSWORD"
                name="password"
                onChange={handleChange}
              />
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
