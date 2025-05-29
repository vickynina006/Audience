import {
  Link,
  redirect,
  Form,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/button";
// import { Inputs } from "./loginPage";
import GenderOptions, { AgeOptions, Inputs } from "../components/selectOptions";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [countryId, setCountryId] = useState("");
  const [state, setState] = useState([]);
  const data = useActionData();
  const countries = useLoaderData();

  useEffect(() => {
    if (!countryId) return;
    async function fetchStates() {
      const response = await fetch(
        `https://taskfund.onrender.com/Util/State/GetbyCountryId/${countryId}`
      );

      const statedata = await response.json();
      console.log(statedata);
      setState(statedata);
    }
    fetchStates();
  }, [countryId]);

  return (
    <section className="pb-20 w-full min-h-screen bg-[linear-gradient(to_bottom_left,rgba(1,200,116,0.9)_5%,rgba(11,200,116,0.87)_5%,rgba(5,6,6,0.9)_30%,rgba(5,6,6,0.99)_60%,rgba(5,6,6,1)_100%)] ">
      <header className="flex items-center justify-between  px-8 py-10 md:px-16 lg:py-16 lg:px-24">
        <img
          src={logo}
          alt="Logo"
          className=" w-32 h-10 md:w-[10rem] md:h-14"
        />
      </header>
      <div className="bg-loginDarkash2 flex flex-col  w-[80%] mx-auto gap-5 p-6 rounded-lg   md:w-[50%] md:p-10 lg:w-[35%]">
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
          <Inputs id="userName" />
          <Inputs id="firstName" />
          <Inputs id="lastName" />
          <Inputs />
          <Inputs id="phone" />

          <div className="py-2 flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-slate-300 text-sm font-bold"
            >
              COUNTRY
            </label>{" "}
            <select
              required
              name="countryId"
              id="country"
              className=" rounded-sm px-1 w-full"
              value={countryId}
              onChange={(event) => setCountryId(event.target.value)}
            >
              <option value="" disabled className="text-center">
                --Select Country--
              </option>
              {countries.map((c) => (
                <option
                  key={c.countryId}
                  value={c.countryId}
                  className="text-center"
                >
                  {c.phonecode && `( +${c.phonecode} )`} {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="py-2 flex flex-col gap-2">
            <label htmlFor="state" className="text-slate-300 text-sm font-bold">
              STATE
            </label>{" "}
            <select
              required
              name="id"
              id="state"
              className="w-full  rounded-sm px-1"
            >
              <option value="" disabled>
                --select state--
              </option>
              {state.map((s) => (
                <option key={s.id} value={s.id} className="text-center">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <GenderOptions />
          <AgeOptions />
          <Inputs id="referalCode" required="" />
          <Inputs id="password" />
          <div className="space-y-2">
            <Button
              title="Register"
              styles="py-0.5 px-7 rounded-md mt-8 w-full flex justify-center mx-auto "
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
    id: data.get("id"),
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

export async function loader() {
  const response = await fetch(
    "https://taskfund.onrender.com/Util/Country/GetAll",
    { headers: { "Content-Type": "application/json" } }
  );
  if (!response.ok) {
    throw new Error("could not fetch countries");
  }
  const resdata = await response.json();

  return resdata;
}
