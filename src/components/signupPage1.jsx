import { Inputs } from "./selectOptions";
import Button from "./button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Signup1Context } from "../store/signup1Context";

export default function SignupPage1({ onClick }) {
  const { isValid } = useContext(Signup1Context);
  return (
    <>
      <div className="flex w-full flex-col flex-wrap md:gap-[4%]   md:flex-row">
        <div className="w-full md:w-[48%]">
          <Inputs id="userName" />
        </div>
        <div className="w-full md:w-[48%]">
          <Inputs id="firstName" />
        </div>
        <div className="w-full md:w-[48%]">
          <Inputs id="lastName" />
        </div>
        <div className="w-full md:w-[48%]">
          <Inputs type="email" />
        </div>
        <div className="w-full md:w-[48%]">
          <Inputs id="phone" type="tel" />
        </div>
        <div className="w-full md:w-[48%]">
          <Inputs id="password" />
        </div>
      </div>
      <div className="space-y-2">
        <Button
          title="Next"
          onClick={onClick}
          disabled={!isValid}
          styles={`py-0.5 px-7 rounded-md mt-8 w-full flex justify-center mx-auto ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          } `}
        />
        <span className="flex gap-1 text-sm">
          <p className=" text-slate-300">Have an account already?</p>
          <Link
            to="/login"
            className="text-bgGreen2 hover:underline cursor-pointer underline-offset-4"
          >
            Log in
          </Link>
        </span>
      </div>
    </>
  );
}
