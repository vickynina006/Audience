import { useContext } from "react";
import { Signup1Context } from "../store/signup1Context";

export default function GenderOptions() {
  const { formData, handleChange } = useContext(Signup1Context);
  return (
    <div className="flex flex-col gap-2  py-3">
      {" "}
      <label htmlFor="gender" className="text-slate-300  text-xs font-bold">
        GENDER <span className="text-rose-500">*</span>
      </label>
      <select
        value={formData.gender}
        onChange={handleChange}
        required
        name="gender"
        id="gender"
        className=" bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-md px-1 py-[0.02rem] w-full"
      >
        <option value="" disabled className=" ">
          --Select Gender--
        </option>
        <option value="0">Male</option>
        <option value="1">Female</option>
      </select>
    </div>
  );
}

export function AgeOptions() {
  const { formData, handleChange } = useContext(Signup1Context);
  return (
    <div className="flex flex-col w-full gap-2  py-3">
      {" "}
      <label htmlFor="ageBracket" className="text-slate-300  text-xs font-bold">
        AGE <span className="text-rose-500">*</span>
      </label>
      <select
        value={formData.ageBracket}
        onChange={handleChange}
        required
        name="ageBracket"
        id="ageBracket"
        className=" bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-md px-1 py-[0.02rem] w-full"
      >
        <option value="" disabled className=" ">
          --Select Age--
        </option>
        <option value="0" className=" ">
          16-20years
        </option>
        <option value="1" className=" ">
          20-30years
        </option>
        <option value="2" className=" ">
          30-40years
        </option>
        <option value="3" className=" ">
          40-45years
        </option>
        <option value="4" className=" ">
          Above 45years
        </option>
      </select>
    </div>
  );
}

export function Inputs({
  text,
  type = "text",
  id = "email",
  required,
  ...props
}) {
  const { formData } = useContext(Signup1Context);

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
        value={formData[id]}
        // onChange={(e) => handleChange(id, e.target.value)}

        className="bg-[#1b1e1d] text-slate-300 rounded-md outline outline-1 outline-neutral-700 px-4 py-[0.02rem]"
      />
      {/* {errors[id] && <p className="text-red-400 text-xs">{errors[id]}</p>} */}

      <a className="text-bgGreen2 text-xs cursor-pointer hover:underline underline-offset-4">
        {text}{" "}
      </a>
    </div>
  );
}
