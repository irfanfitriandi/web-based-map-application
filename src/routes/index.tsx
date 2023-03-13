import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainPage = lazy(() => import("../pages/Main"));
const ActiveLayerPage = lazy(() => import("../pages/ActiveLayer"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/active-layer",
      element: <ActiveLayerPage />,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
