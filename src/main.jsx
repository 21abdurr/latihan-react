import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex items-center justify-center min-h-screen text-5xl uppercase font-bold text-slate-600">
        Halaman Utama
      </div>
    ),
    // element: "Hello World",
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    // element: "Hello World",
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
