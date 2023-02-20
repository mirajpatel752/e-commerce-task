import { lazy } from "react";

const RoutesPaths = [
  {
    path: "/",
    component: lazy(() => import("../../Pages/ShopsDefault/index")),
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/shopsdetails-all",
    component: lazy(() => import("../../Pages/shopAdetailsAll/index")),
    meta: {
      authRoute: true,
    },
  },
];

export { RoutesPaths };
