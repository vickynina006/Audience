import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signUpPage";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "dashboard", element: <Dashboard /> },
]);
function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //   <HomePage />
    //   <LoginPage />
    // </>
  );
}

export default App;
