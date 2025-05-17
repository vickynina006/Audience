export default function GenderOptions() {
  return (
    <div className="flex items-center  py-3">
      {" "}
      <label htmlFor="gender" className="text-slate-300 text-sm font-bold">
        GENDER
      </label>
      <select
        required
        name="gender"
        id="gender"
        className="bg-neutral-700 mx-3 text-slate-300 rounded-md px-1 py-0.5"
      >
        <option value="" disabled>
          --Select --
        </option>
        <option value="0">Male</option>
        <option value="1">Female</option>
      </select>
    </div>
  );
}

export function AgeOptions() {
  return (
    <div className="flex items-center py-3">
      {" "}
      <label htmlFor="ageBracket" className="text-slate-300 text-sm font-bold">
        AGE
      </label>
      <select
        required
        name="ageBracket"
        id="ageBracket"
        className="bg-neutral-700 mx-3 text-slate-300 rounded-md px-1 py-0.5"
      >
        <option value="" disabled>
          --Select--
        </option>
        <option value="0">16-20years</option>
        <option value="1">20-30years</option>
        <option value="2">30-40years</option>
        <option value="3">40-45years</option>
        <option value="4">Above 45years</option>
      </select>
    </div>
  );
}
