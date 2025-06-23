import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/button";
import { useState } from "react";
import Spinner from "../components/spinner";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleclick() {
    setIsLoading(true);
  }

  function handleLoginChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const { userName, password } = loginData;
    try {
      const response = await fetch(
        `https://taskfund.onrender.com/api/Auth/SignIn?userName=${encodeURIComponent(
          userName
        )}&password=${encodeURIComponent(password)}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        }
      );
      const resdata = await response.json();

      if (!response.ok) {
        console.error("backend error:", resdata);
        const errorMsg =
          resdata.message || resdata.error || "something went wrong";
        throw new Error(errorMsg);
      }

      const token = resdata.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message || "network error, please try again");
      setIsLoading(false);
    }
  }

  return (
    <section className="pb-20 w-full min-h-screen bg-[linear-gradient(to_bottom_left,rgba(1,200,116,0.9)_5%,rgba(11,200,116,0.9)_5%,rgba(5,6,6,0.9)_30%,rgba(5,6,6,0.99)_60%,rgba(5,6,6,1)_100%)] ">
      <header className="flex items-center pb-10 px-8 py-10 md:px-16 lg:py-14 lg:px-24">
        <img
          src={logo}
          alt="Logo"
          className=" w-32 h-10 md:w-[10rem] md:h-14"
        />
      </header>
      <div className="bg-loginDarkash2 flex flex-col  w-[80%] mx-auto gap-5 p-6 rounded-lg   md:w-[50%] md:p-10 lg:w-[30%]">
        <h1 className="text-white text-2xl text-center mb-3 md:text-3xl">
          Welcome Back!
        </h1>

        <form onSubmit={handleLoginSubmit} className="space-y-2 ">
          {/* {error &&
            error.map((err, i) => (
              <p key={i} className="text-red-500 my-4">
                {err}
              </p>
            ))} */}
          <p className="text-red-500 my-4">{error}</p>

          <Input
            id="userName"
            onChange={handleLoginChange}
            value={loginData.userName}
          />
          <Input
            value={loginData.password}
            id="password"
            text="Forgot your password?"
            onChange={handleLoginChange}
          />
          <div className="space-y-2">
            <Button
              title={isLoading ? "Logging In..." : "Log In"}
              styles={`py-[0.18rem] px-7 text-sm mt-8 w-full rounded-md flex justify-center mx-auto ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleclick}
              disabled={isLoading}
              spinner={isLoading && <Spinner />}
            />
            <span className="flex gap-1 text-sm">
              <p className=" text-slate-300">Need an account?</p>
              <Link
                to="/signup"
                className="text-bgGreen2 hover:underline cursor-pointer underline-offset-4"
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
export function Input({
  text,
  type = "text",
  id = "email",
  required,
  ...props
}) {
  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor={id} className="text-slate-300 text-xs font-bold">
        {id.toUpperCase()} <span className="text-rose-500">*</span>
      </label>

      <input
        type={type}
        {...props}
        id={id}
        name={id}
        required={required}
        className="bg-[#1b1e1d] text-slate-300 rounded-md outline outline-1 outline-neutral-700 px-4 py-[0.02rem]"
      />

      <a className="text-bgGreen2 text-xs cursor-pointer hover:underline underline-offset-4">
        {text}{" "}
      </a>
    </div>
  );
}
