import { createBrowserRouter } from "react-router-dom";
import { HomePage, NewLeftovers } from "../pages";
import { MainLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/new-leftovers",
        element: <NewLeftovers />,
      },
    ],
  },
]);
