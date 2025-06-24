import heroimage from "../assets/heroimage.png";
import heroimg from "../assets/heroImg.png";
import Button from "./button";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse pt-20 mdx:flex-row lg:pl-14 lgx:pl-20 ">
      <div className="flex flex-col w-full my-auto pr-6 pl-6 pb-10 space-y-7 pt-20 lg:pt-10 lg:w-[50%] lg-pr-36">
        <h1 className=" text-center text-white text-3xl font-semibold leading-10 md:leading-normal md:text-4xl lg:text-start">
          <span className=" text-textgreen text-[2rem] md:text-[2.6rem]">
            Guaranteed Leads
          </span>{" "}
          <br /> {""}
          to Boost <br className="md:hidden lg:flex" /> Your Business at Scale!
        </h1>
        <p className="text-center text-slate-300 text-[1.1rem] md:text-2xl lg:text-start">
          Generate real opportunities and increase the revenue and growth of
          your business exponentially with your new campaign.
        </p>
        <div className="flex justify-center  gap-5 mdx:gap-10 mdx:justify-start">
          <Button
            title="Capture More Leads
"
          />
          {/* <Button title="Advertise" bg="bg-none" /> */}
        </div>
      </div>
      <div className="w-[50%] py-20 px-16 lgx:px-20 lgx:py-16 hidden mdx:flex">
        <div className="relative border-r-4 border-b-4 border-bgGreen3 ">
          <img
            src={heroimage}
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="absolute -right-5 -bottom-5 w-10 h-10 border-r-4 border-b-4 border-bgGreen3"></div>
        </div>
      </div>
      <div className="w-full mt-12 flex mdx:hidden">
        <img src={heroimg} alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
