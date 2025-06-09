import Button from "./button";
import { Link, useLoaderData } from "react-router-dom";
import GenderOptions, { AgeOptions, Inputs } from "./selectOptions";
import { useContext, useEffect, useState } from "react";
import { Signup1Context } from "../store/signup1Context";

export default function SignupPage2({ onClick }) {
  // const [countryId, setCountryId] = useState(0);
  const { formData, handleChange, isValid2 } = useContext(Signup1Context);
  const [state, setState] = useState([]);

  const countries = useLoaderData();

  useEffect(() => {
    if (!formData.countryId) return;
    async function fetchStates() {
      const response = await fetch(
        `https://taskfund.onrender.com/Util/State/GetbyCountryId/${formData.countryId}`
      );

      const statedata = await response.json();
      // console.log(statedata);
      setState(statedata);
    }
    fetchStates();
  }, [formData.countryId]);

  return (
    <>
      <div className="flex w-full flex-col flex-wrap md:gap-[4%]   md:flex-row">
        <div className="w-full md:w-[48%]">
          <GenderOptions />
        </div>
        <div className="w-full md:w-[48%]">
          <AgeOptions />
        </div>
        <div className="w-full md:w-[48%]">
          <div className="py-2 flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-slate-300 text-xs font-bold"
            >
              COUNTRY<span className="text-rose-500"> *</span>
            </label>{" "}
            <select
              required
              name="countryId"
              id="country"
              className=" bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-sm px-1 w-full"
              value={formData.countryId}
              onChange={handleChange}
            >
              <option value="" disabled className="">
                --Select Country--
              </option>
              {countries.map((c) => (
                <option key={c.countryId} value={c.countryId} className="">
                  {c.phonecode && `( +${c.phonecode} )`} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full md:w-[48%]">
          <div className="py-2 flex flex-col gap-2">
            <label htmlFor="state" className="text-slate-300 text-xs font-bold">
              STATE <span className="text-rose-500 ">*</span>
            </label>{" "}
            <select
              onChange={handleChange}
              required
              name="stateId"
              value={formData.stateId}
              id="state"
              className="w-full bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-sm px-1"
            >
              <option disabled className="">
                --Select State--
              </option>
              {state.map((s) => (
                <option key={s.id} value={s.id} className="">
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Inputs id="referalCode" />
      <div className="flex items-center gap-2 text-sm text-slate-300 mt-4">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          // onChange={(e) =>
          //   setFormData((prev) => ({
          //     ...prev,
          //     termsAccepted: e.target.checked,
          //   }))
          // }
          onChange={handleChange}
        />
        <label htmlFor="terms">
          By clicking, I agree to the{" "}
          <a href="" className="text-bgGreen2 underline">
            Terms and Conditions
          </a>
        </label>
      </div>
      <div className="space-y-2">
        <div className="flex w-full gap-[8%]">
          <div className="w-[46%]">
            <Button
              onClick={onClick}
              title="Back"
              type="button"
              styles="py-0.5 px-7 rounded-md mt-4 w-full"
            />
          </div>
          <div className="w-[46%]">
            <Button
              animate={isValid2 ? { scale: [1, 0.97, 1] } : {}}
              transition={{ duration: 0.4 }}
              key={isValid2}
              title="Submit"
              type="submit"
              disabled={!isValid2}
              styles={`py-0.5 px-7 rounded-md mt-4 w-full ${
                !isValid2 ? "opacity-50 cursor-not-allowed" : ""
              } `}
            />
          </div>{" "}
        </div>

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
