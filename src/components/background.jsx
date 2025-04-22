import Header from "./header";
import HeroSection from "./heroSection";

export default function Background() {
  return (
    <section className="w-full bg-[url('/bg2.jpeg')] bg-cover bg-center bg-no-repeat ">
      <div className=" w-full h-full bg-[linear-gradient(to_bottom_left,rgba(118,185,119,0.9)_5%,rgba(118,185,119,0.87)_5%,rgba(5,6,6,0.9)_30%,rgba(5,6,6,0.99)_60%,rgba(5,6,6,1)_100%)] ">
        <Header />
        <HeroSection />
      </div>
    </section>
  );
}
