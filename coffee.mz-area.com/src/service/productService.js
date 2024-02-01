import { getData, getSingleData } from "../config/mainApi";
import { SERVER_URL } from "../config/baseApi";

export const listProduct = async ({ data }) => {
  let result = { status: false, data: {}, message: "" };
  try {
    let response = await getData(`${SERVER_URL}/api/v1/products`, data, data);
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
export const detailProductBySlug = async (slug) => {
  let result = { status: false, data: {}, message: "" };
  try {
    let response = await getSingleData(
      `${SERVER_URL}/api/v1/products/detail/?slug=${slug}`,
    );
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
