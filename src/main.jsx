import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/Mainlayout";
import "./assets/styles/main.css";
import { routerNavigation } from "./const/router";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LayoutContextProvider } from "./provider/LayoutContextProvider";
import { Loader } from "./components/Loader";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigation.map(({ path, element }) => ({
      path: path,
      element: <Suspense fallback={<Loader />}>{element}</Suspense>,
    })),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LayoutContextProvider>
      <RouterProvider router={router} />
    </LayoutContextProvider>
  </Provider>
);
