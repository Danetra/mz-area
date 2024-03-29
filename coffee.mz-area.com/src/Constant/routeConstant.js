export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    PRODUCT: {
      LIST: "/products",
      DETAIL: "/products/detail",
      CARTS: "/products/carts",
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
        DETAIL: "/products/detail",
      },
    },
  },
};

export default ROUTES;
