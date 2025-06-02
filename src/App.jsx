import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage, { action as signUpAction } from "./pages/signUpPage";
import { loader as countryLoader } from "./components/signupPage2";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "signup",
    element: <SignUpPage />,
    action: signUpAction,
    loader: countryLoader,
  },
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
