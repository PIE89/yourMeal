import { lazy } from "react";

const PizzaAsync = lazy(() => import("./Pizza"));

export { PizzaAsync };
