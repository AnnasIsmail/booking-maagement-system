import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./layout";
import { BookingPage, LandingPage, NotFound } from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/booking", element: <BookingPage /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
