import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage, { action as signUpAction } from "./pages/signUpPage";
import Dashboard from "./pages/dashboard";
import { action } from "./pages/signUpPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage />, action: signUpAction },
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
