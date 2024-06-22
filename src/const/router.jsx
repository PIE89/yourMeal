import { Burgers } from "@/pages/Burgers";
import { Combo } from "@/pages/Combo";
import { Dessert } from "@/pages/Dessert";
import { HotDogs } from "@/pages/HotDogs";
import { Kebab } from "@/pages/Kebab";
import { MainPage } from "@/pages/MainPage";
import { NotFound } from "@/pages/NotFound";
import { Pizza } from "@/pages/Pizza";
import { Sauce } from "@/pages/Sauce";
import { Snacks } from "@/pages/Snacks";
import { Wok } from "@/pages/Wok";

const routerNavigation = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/burgers",
    element: <Burgers />,
  },
  {
    path: "/snacks",
    element: <Snacks />,
  },
  {
    path: "/hot-dogs",
    element: <HotDogs />,
  },
  {
    path: "/combo",
    element: <Combo />,
  },
  {
    path: "/kebab",
    element: <Kebab />,
  },
  {
    path: "/pizza",
    element: <Pizza />,
  },
  {
    path: "/wok",
    element: <Wok />,
  },
  {
    path: "/dessert",
    element: <Dessert />,
  },
  {
    path: "/sauce",
    element: <Sauce />,
  },
];

export { routerNavigation };
