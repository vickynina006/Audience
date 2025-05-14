import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/button";

export default function LoginPage() {
  return (
    <section className="w-full bg-[url('/bg2.jpeg')] bg-cover bg-center bg-no-repeat ">
      <div className="pb-20 w-full h-full bg-[linear-gradient(to_bottom_left,rgba(118,185,119,0.9)_5%,rgba(118,185,119,0.87)_5%,rgba(5,6,6,0.9)_30%,rgba(5,6,6,0.99)_60%,rgba(5,6,6,1)_100%)] ">
        <header className="flex items-center justify-between  px-8 py-10 md:px-16 lg:py-14 lg:px-24">
          <img
            src={logo}
            alt="Logo"
            className=" w-32 h-10 md:w-[10rem] md:h-14"
          />
        </header>
        <div className="bg-loginDarkash2 flex flex-col gap-5 p-6 rounded-lg  mx-10 md:mx-20 md:p-14 lg:mx-72">
          <h1 className="text-white text-2xl text-center md:text-3xl">
            Welcome Back!
          </h1>
          <form className="space-y-2">
            <Inputs />
            <Inputs id="password" text="Forgot your password?" />
            <div className="space-y-2">
              <Button
                title="Log In"
                styles="py-1.5 px-7 mt-8 w-full flex justify-center mx-auto "
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
      </div>
    </section>
  );
}

export function Inputs({ text, id = "email", required = "required" }) {
  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor={id} className="text-slate-300 text-sm font-bold">
        {id.toUpperCase()}
      </label>
      <input
        type={id}
        id={id}
        name={id}
        required={required}
        className="bg-[#1b1e1d] text-slate-300 rounded-md outline outline-1 outline-neutral-700 px-4 py-2"
      />
      <a className="text-bgGreen2 text-sm cursor-pointer hover:underline underline-offset-4">
        {text}{" "}
      </a>
    </div>
  );
}
