export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    PRODUCT: {
      LIST: "/products",
      DETAIL: "/products/detail/",
    },
    LOGIN: "/login",
  },
  AUTH: {
    ADMIN: {
      DASHBOARD: "/administrator",
    },
    BUYER: {
      PRODUCT: {
        LIST: "/products",
        DETAIL: "/products/detail/",
      },
    },
  },
};

export default ROUTES;
