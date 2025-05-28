import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage, {
  action as signUpAction,
  loader as countryLoader,
} from "./pages/signUpPage";
import Dashboard from "./pages/dashboard";
import MoviePage, { pictureLoader } from "./pages/moviePage";

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
  { path: "movie", element: <MoviePage />, loader: pictureLoader },
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
