import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const MainPage = lazy(() => import("../pages/Main"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

function App() {
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
      path: "/active-layer/point",
      element: <MainPage />,
    },
    {
      path: "/active-layer/polygon",
      element: <MainPage />,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
