import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/button";
import { Inputs } from "../components/selectOptions";

export default function LoginPage() {
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
        <form className="space-y-2 ">
          <Inputs />
          <Inputs id="password" text="Forgot your password?" />
          <div className="space-y-2">
            <Button
              title="Log In"
              styles="py-[0.18rem] px-7 text-sm mt-8 w-full rounded-md flex justify-center mx-auto "
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
