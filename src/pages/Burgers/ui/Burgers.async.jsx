import { lazy } from "react";

const BurgersAsync = lazy(() => import("./Burgers"));

export { BurgersAsync };
