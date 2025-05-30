import Button from "./button";

export default function GetStartedCard1() {
  return (
    <div className="bg-bgblack  px-10 lg:px-44  py-20 bg-right-glow">
      <div className="relative space-y-12 pb-16 py-5 w-full">
        <div className="absolute right-0 top-0 w-6 h-6 border-t-2 border-r-2 border-textgreen"></div>
        <div className="absolute right-0 bottom-0 w-6  h-6 border-b-2 border-r-2 border-textgreen"></div>
        <div className="absolute left-0 -top-12 w-6 h-6 border-t-2 border-l-2 border-textgreen"></div>
        <div className="absolute left-0 bottom-0 w-6 h-6 border-l-2 border-b-2 border-textgreen"></div>
        <div className="flex flex-col  lg:flex-row">
          <div className="w-full flex justify-center items-center text-white text-xl px-16 pb-10  lg:w-[43%]">
            <h1 className="text-center">
              Steps to{" "}
              <span className="text-textgreen ">
                Capture High Standard Leads!
              </span>
            </h1>
          </div>
          <div className="w-full  lg:w-[57%] ">
            <div>
              <Rows
                numberb="1"
                description="Qualified Traffic: Direct your ads to the right audience.
"
              />
              <Rows
                numberb="2"
                description="Active Content:Generate engaging and relevant content for your audience."
              />
              <Rows
                numberb="3"
                description="Convert more Leads:Optimize your pages and landing pages for conversions"
              />
              <Rows
                numberb="4"
                description="Share - if you have access to exclusive strategies to optimize your paid traffic campaigns to convert more leads"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button title="I Want to Capture Leads Now" />
        </div>
      </div>
    </div>
  );
}

export function Rows({ numberb, description }) {
  return (
    <div className="flex">
      <div className="text-bgGreen2 p-2 font-semibold text-lg flex justify-center items-center w-[15%]">
        <h1>
          0<span className="text-bgGreen3">{numberb}</span>
        </h1>
      </div>
      <div className=" px-5 py-3 w-[85%] border-l-[1px] text-slate-300 border-slate-300">
        {description}
      </div>
    </div>
  );
}
