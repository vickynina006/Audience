import { NavMenu, NavMenu2 } from "./header";

export default function NavModal() {
  return (
    <nav className="fixed flex justify-center pt-32 px-10 w-full items-center top-0 right-0 z-10 md:px-20  mdx:hidden ">
      <ul className=" w-full text-[1.05rem] py-12 font-semibold justify-center bg-white items-center gap-5 outline  outline-1 outline-blacky rounded-3xl flex flex-col">
        <NavMenu2 title="About" href="#footer" />
        <NavMenu2 title="Services" href="#services" />
        <NavMenu2 title="Contact" href="#footer" />
        <NavMenu
          title="Advertise"
          to="advertise"
          style="px-4 py-2 outline outline-1 "
        />
        <NavMenu title="Login/Sign up" to="login" />
      </ul>
    </nav>
  );
}
