import { NavMenu, NavMenu2 } from "./header";
import logo from "../assets/logo.png";

export default function NavModal({ translate }) {
  return (
    <nav
      className={`fixed flex flex-col min-h-screen  gap-14 bg-darkblue2 pt-10 px-8 w-full transition-all duration-300 ease-in-out transform ${translate} top-0 right-0 z-10 md:px-20  mdx:hidden `}
    >
      <img src={logo} alt="Logo" className=" w-32 h-10 md:w-[10rem] md:h-14" />
      <ul className="flex flex-col w-full text-[1.3rem] py-12 font-semibold justify-center items-center gap-10  rounded-2xl ">
        <NavMenu2 title="About" href="#footer" style="text-slate-300" />
        <NavMenu2 title="Services" href="#services" style="text-slate-300" />
        <NavMenu2 title="Contact" href="#footer" style="text-slate-300" />
        <NavMenu
          title="Advertise"
          to="advertise"
          styles="px-4 py-2 outline outline-1 "
          textcl="text-slate-300"
        />
        <NavMenu title="Login/Sign up" to="login" textcl="text-slate-300" />
      </ul>
    </nav>
  );
}
