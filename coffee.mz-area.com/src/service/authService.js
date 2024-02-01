import { login } from "../config/mainApi";
import { SERVER_URL } from "../config/baseApi";

export const loginAction = async ({ data }) => {
  let result = { status: false, data: {}, message: "" };
  try {
    let response = await login(`${SERVER_URL}/api/v1/login`, data, data);
    if (response.status === 200) {
      result = {
        status: true,
        data: response.data,
      };
    } else {
      result = {
        status: false,
        message: response.message,
      };
    }
  } catch (error) {
    console.log(error);
    result.message = error.response.data.error.message;
  }
  return result;
};
