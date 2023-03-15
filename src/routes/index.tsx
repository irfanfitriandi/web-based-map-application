import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

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
      element: <Navigate to="/active-layer/point" />,
    },
    {
      path: "/active-layer/point",
      element: <ActiveLayerPage />,
    },
    {
      path: "/active-layer/polygon",
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
