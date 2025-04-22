import heroimage from "../assets/heroimage.png";
import heroimg from "../assets/heroImg.png";
import Button from "./button";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse    mdx:flex-row lg:pl-20 ">
      <div className="flex flex-col w-full my-auto pr-6 pl-6 space-y-10 pt-20 lg:pt-0 lg:w-[50%] lg-pr-36">
        <h1 className=" text-center text-white text-2xl font-semibold leading-normal md:text-3xl lg:text-start">
          Lorem ipsum dolor sit amet consectetur,{" "}
          <span className=" text-textgreen ">
            Explicabo voluptatem, debitis inventore minus
          </span>{" "}
          {""}debitis veritatis, dolores consectetur nulla consectetu
        </h1>
        <p className="text-center text-slate-300 text-[1.1rem] md:text-2xl lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          officia quo. Explicabo voluptatem, debitis inventore minus excepturis
          dolores consectetur nulla
        </p>
        <div className="flex justify-center gap-5 mdx:gap-10 mdx:justify-start">
          <Button title="Get Started" />
          <Button title="Advertise" bg="bg-none" />
        </div>
      </div>
      <div className="w-[50%] hidden mdx:flex">
        <img src={heroimage} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full mt-20 flex mdx:hidden">
        <img src={heroimg} alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
