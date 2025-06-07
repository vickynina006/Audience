import { redirect, Form, useActionData } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import SignupPage1 from "../components/signupPage1";
import SignupPage2 from "../components/signupPage2";
// import { AnimatePresence, motion } from "framer-motion";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const totalSteps = 2;
  function next() {
    if (step < totalSteps) {
      setStep(step + 1);
      console.log(step);
    }
  }
  function back() {
    if (step === totalSteps) {
      setStep(step - 1);
    }
  }
  const data = useActionData();

  return (
    <section className="pb-20 w-full min-h-screen bg-[linear-gradient(to_bottom_left,rgba(1,200,116,0.9)_5%,rgba(11,200,116,0.87)_5%,rgba(5,6,6,0.9)_30%,rgba(5,6,6,0.99)_60%,rgba(5,6,6,1)_100%)] ">
      <header className="flex items-center justify-between  px-8 py-10 md:px-16 lg:pt-11 lg:px-24">
        <img
          src={logo}
          alt="Logo"
          className=" w-32 h-10 md:w-[10rem] md:h-14"
        />
      </header>

      <div className="bg-loginDarkash2 flex flex-col  w-[80%] mx-auto gap-5 p-6 rounded-lg  lg:gap-10  md:w-[50%] md:p-8 lg:w-[35%]">
        <h1 className="text-white text-2xl text-center md:text-3xl">
          Register
        </h1>
        <Form method="post" className="space-y-2">
          {/* {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )} */}
          {step === 1 && <SignupPage1 onClick={next} />}
          {step === 2 && <SignupPage2 onClick={back} />}

          <div className="flex justify-center py-4 gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bgGreen2 "></span>
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                step >= 2 ? "bg-bgGreen2" : "bg-slate-300"
              } `}
            ></span>
          </div>
          <p className="text-slate-300 text-sm text-end">Step {step}/2</p>
        </Form>
      </div>
    </section>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const signUpData = {
    userName: data.get("userName"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    phone: data.get("phone"),
    gender: data.get("gender"),
    password: data.get("password"),
    ageBracket: data.get("ageBracket"),
    countryId: data.get("countryId"),
    stateId: data.get("id"),
  };
  const response = await fetch(
    "https://taskfund.onrender.com/api/Auth/SignUp",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    }
  );
  // console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return redirect("/login");
}
