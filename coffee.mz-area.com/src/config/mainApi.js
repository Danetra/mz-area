import axios from "axios";

const timeout = 3600;

const login = (url, data, params) => {
  const method = "POST";

  return axios({ url, method, data, params, timeout });
};

const getData = (url, data, params) => {
  const method = "GET";
  return axios({ url, method, params });
};

const getSingleData = (url) => {
  const method = "GET";
  return axios({ url, method });
};

export { login, getData, getSingleData };
