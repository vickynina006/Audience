export default function GenderOptions() {
  return (
    <div className="flex flex-col gap-2  py-3">
      {" "}
      <label htmlFor="gender" className="text-slate-300 text-sm font-bold">
        GENDER
      </label>
      <select
        required
        name="gender"
        id="gender"
        className=" bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-md px-1 py-0.5 w-full"
      >
        <option value="" className="text-center">
          --Select Gender--
        </option>
        <option value="0" className="text-center">
          Male
        </option>
        <option value="1" className="text-center">
          Female
        </option>
      </select>
    </div>
  );
}

export function AgeOptions() {
  return (
    <div className="flex flex-col w-full gap-2 py-3">
      {" "}
      <label htmlFor="ageBracket" className="text-slate-300 text-sm font-bold">
        AGE
      </label>
      <select
        required
        name="ageBracket"
        id="ageBracket"
        className=" bg-[#1b1e1d] outline outline-1 outline-neutral-700 text-slate-300 rounded-md px-1 py-0.5 w-full"
      >
        <option value="" className="text-center">
          --Select Age--
        </option>
        <option value="0" className="text-center">
          16-20years
        </option>
        <option value="1" className="text-center">
          20-30years
        </option>
        <option value="2" className="text-center">
          30-40years
        </option>
        <option value="3" className="text-center">
          40-45years
        </option>
        <option value="4" className="text-center">
          Above 45years
        </option>
      </select>
    </div>
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
        className="bg-[#1b1e1d] text-slate-300 rounded-md outline outline-1 outline-neutral-700 px-4 py-0.5"
      />
      <a className="text-bgGreen2 text-sm cursor-pointer hover:underline underline-offset-4">
        {text}{" "}
      </a>
    </div>
  );
}
