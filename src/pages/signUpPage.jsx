import {
  Link,
  redirect,
  Form,
  useFormAction,
  useActionData,
} from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/button";
import { Inputs } from "./loginPage";

export default function SignUpPage() {
  const data = useActionData();
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
            Register
          </h1>
          <Form className="space-y-2">
            {/* {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )} */}
            <Inputs id="username" />
            <Inputs id="firstname" />
            <Inputs id="lastname" />
            <Inputs />
            <Inputs id="phone" />
            <div className="flex items-center py-3">
              {" "}
              <label
                htmlFor="gender"
                className="text-slate-300 text-sm font-bold"
              >
                GENDER
              </label>
              <select
                name="gender"
                id="gender"
                className="bg-neutral-700 mx-3 text-slate-300 rounded-md px-1 py-0.5"
              >
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">Others</option>
              </select>
            </div>
            <Inputs id="password" />
            <div className="space-y-2">
              <Button
                title="Register"
                styles="py-1.5 px-7 mt-8 w-full flex justify-center mx-auto "
              />
              <span className="flex gap-1 text-sm">
                <p className=" text-slate-300">Have an account already?</p>
                <Link
                  to="../login"
                  className="text-bgGreen2 hover:underline cursor-pointer underline-offset-4"
                >
                  Log in
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  signUpData = {
    username: data.get("username"),
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    email: data.get("email"),
    phone: data.get("phone"),
    gender: data.get("gender"),
    password: data.get("password"),
  };
  const response = await fetch(
    "https://taskfund.onrender.com/api/Auth/SignUp",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    }
  );
  if (response.status === 500) {
    return response;
  }
  return redirect("/");
}
