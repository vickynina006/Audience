export default function GetStartedCard2() {
  return (
    <div className="flex flex-col  bg-bgblack px-10  gap-10  py-20 bg-right-glow ">
      <h1 className=" text-center font-semibold text-xl text-white">
        Lorem ipsum dolor.
      </h1>
      <div className="flex flex-col  gap-7 md:flex-wrap md:flex-row md:justify-center">
        <Box
          icon="01"
          title="Lorem ipsum ditbu"
          decription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        excepturi exercitationem aspernatu"
        />
        <Box
          icon="01"
          title="Lorem ipsum ditbu"
          decription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        excepturi exercitationem aspernatu"
        />
        <Box
          icon="01"
          title="Lorem ipsum ditbu"
          decription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        excepturi exercitationem aspernatu"
        />
      </div>
    </div>
  );
}
export function Box({ title, decription, icon }) {
  return (
    <div className="flex bg-darkash shadow-sm shadow-slate-900 text-slate-300 flex-col rounded-md py-10 px-10 gap-5 md:max-w-[15.7`rem] lg:max-w-64 ">
      <div className="flex">
        <span className="bg-bgGreen3 flex justify-center items-center rounded-full text-slate-300 font-semibold w-10 h-9">
          {icon}
        </span>
        <h1 className="my-auto text-slate-300 pl-4">{title}</h1>
      </div>
      <p className=" text-[0.75rem] text-slate-300">{decription}</p>
    </div>
  );
}
