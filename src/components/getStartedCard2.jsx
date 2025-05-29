export default function GetStartedCard2() {
  return (
    <div
      id="services"
      className="flex flex-col items-center bg-bgblack px-10  gap-20 pt-36  pb-20 bg-left-glow "
    >
      <h1 className=" text-center font-semibold text-2xl md:text-3xl text-white">
        Who is This Strategy For?
      </h1>
      <div className="flex flex-col items-center gap-7 md:flex-wrap md:flex-row md:justify-center lgx:w-[70%]">
        <Box
          icon="01"
          // title="Lorem ipsum ditbu"
          decription="  Traffic managers who want to increase conversions in their ad campaigns"
        />
        <Box
          icon="02"
          // title="Lorem ipsum ditbu"
          decription=" Website Owners looking increase their site visibility"
        />
        <Box
          icon="03"
          // title="Lorem ipsum ditbu"
          decription=" Creatives looking to go Viral, Make waves, spark trends, and own the spotlight."
        />
        <Box
          icon="04"
          // title="Lorem ipsum ditbu"
          decription="Musicians looking to be seen/promote their album or singles"
        />
        <Box
          icon="05"
          // title="Lorem ipsum ditbu"
          decription="Vloggers/ persons looking to Trend on social media
"
        />
        <Box
          icon="06"
          // title="Lorem ipsum ditbu"
          decription="Product promoters looking to spark momentum and drive growth."
        />
      </div>
    </div>
  );
}
export function Box({ decription, icon }) {
  return (
    <div className="flex bg-darkash shadow-sm min-h-52 shadow-slate-900 text-slate-300 flex-col rounded-md py-10 px-10 gap-5 w-64 md:w-[15.7`rem] lg:w-64 ">
      <div className="flex justify-center">
        <span className="bg-bgGreen3 flex justify-center items-center rounded-full text-slate-300 font-semibold w-9 h-9">
          {icon}
        </span>
        {/* <h1 className="my-auto text-slate-300 pl-4">{title}</h1> */}
      </div>
      <p className=" text-[0.75rem] text-center text-slate-300">{decription}</p>
    </div>
  );
}
