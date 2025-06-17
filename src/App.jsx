import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signUpPage";
import { loader as countryLoader } from "./components/signupPage2";
import Dashboard from "./pages/dashboard";
import { Signup1Provider } from "./store/signup1Context";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "signup",
    element: <SignUpPage />,
    // action: signUpAction,
    loader: countryLoader,
  },
  { path: "dashboard", element: <Dashboard /> },
]);
function App() {
  return (
    <Signup1Provider>
      <RouterProvider router={router} />
    </Signup1Provider>

    // <>
    //   <HomePage />
    //   <LoginPage />
    // </>
  );
}

export default App;
