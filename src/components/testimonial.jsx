import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";

export default function Testimonial() {
  return (
    <section className="bg-gradient-to-b from-bgblack space-y-10 to-darkash w-full md:space-y-20 px-10 py-10 lg:px-20">
      <div className="flex text-xl text-slate-300 justify-center md:text-3xl">
        <h1 className="text-center">What Our Customers Are Saying</h1>
      </div>
      <div className="flex w-full  min-h-54 flex-shrink-0 gap-10 border-t-[1px] border-t-slate-500 overflow-hidden ">
        <div className="w-full  animate-slide flex lg:animate-none">
          {" "}
          <TestimonialDiv
            img={person1}
            title="John Doe"
            skill="/ Senior Markerter"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id accusantium delectus quos, perferendis molestiae maiores reiciendis repellendus exercitationem eum quas iure, asperiores labore atque! Distinctio similique iure ullam commodi!"
          />
          <TestimonialDiv
            img={person2}
            title="John Doe"
            skill="/ Senior Markerter"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id accusantium delectus quos, perferendis molestiae maiores reiciendis repellendus exercitationem eum quas iure, asperiores labore atque! Distinctio similique iure ullam commodi!"
          />
          <TestimonialDiv
            img={person1}
            title="John Doe"
            skill="/ Senior Markerter"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id accusantium delectus quos, perferendis molestiae maiores reiciendis repellendus exercitationem eum quas iure, asperiores labore atque! Distinctio similique iure ullam commodi!"
          />
        </div>
      </div>
    </section>
  );
}

export function TestimonialDiv({ img, title, skill, description }) {
  return (
    <div className="w-full py-10 flex-shrink-0 md:px-10 flex  lg:w-[50%]">
      <div className="w-[20%] ">
        <div className="w-14 h-14 bg-darkblue2  rounded-full overflow-hidden md:w-20 md:h-20">
          <img
            src={img}
            className="w-14 h-14 object-cover md:w-20 md:h-20"
            alt="photo of a person"
          />
        </div>
      </div>
      <div className="px-5 md:px-10  space-y-5 w-[80%]">
        <h1 className="text-slate-100">
          {title} <span className="text-gray-300 text-xs">{skill} </span>
        </h1>
        <p className="text-gray-300 text-sm ">{description}</p>
      </div>
    </div>
  );
}
