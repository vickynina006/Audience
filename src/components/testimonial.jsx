import logo from "../assets/logo.png";

export default function Testimonial() {
  return (
    <section className="bg-gradient-to-b from-bgblack  to-darkash w-full space-y-20 px-10 py-10 lg:px-20">
      <div className="flex text-3xl text-slate-300 justify-center">
        <h1>What Our Customers Are Saying</h1>
      </div>
      <div className="flex gap-10 border-t-[1px] border-t-slate-500 overflow-hidden">
        <TestimonialDiv
          title="John Doe"
          skill="/ Senior Markerter"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id accusantium delectus quos, perferendis molestiae maiores reiciendis repellendus exercitationem eum quas iure, asperiores labore atque! Distinctio similique iure ullam commodi!"
        />
        <TestimonialDiv
          title="John Doe"
          skill="/ Senior Markerter"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id accusantium delectus quos, perferendis molestiae maiores reiciendis repellendus exercitationem eum quas iure, asperiores labore atque! Distinctio similique iure ullam commodi!"
        />
      </div>
    </section>
  );
}

export function TestimonialDiv({ img, title, skill, description }) {
  return (
    <div className="w-full p-10 flex lg:w-[50%]">
      <div className="w-[30%]">
        <div className="w-20 h-20 bg-darkblue2 rounded-full overflow-hidden">
          <img
            src={img}
            className="w-20 h-20 object-contain"
            alt="photo of a person"
          />
        </div>
      </div>
      <div className="px-10 space-y-5">
        <h1 className="text-slate-100">
          {title} <span className="text-gray-300 text-xs">{skill} </span>
        </h1>
        <p className="text-gray-300 text-sm ">{description}</p>
      </div>
    </div>
  );
}
