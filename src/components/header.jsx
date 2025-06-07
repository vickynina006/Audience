import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import NavModal from "./navModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  const spanStyle =
    "w-6 h-[3px] bg-slate-200 rounded-sm transition duration-500 ease-in-out";

  return (
    <header className="flex items-center justify-between  px-8 pt-10 pb-10 md:px-16 lg:pt-11 lg:pb-4  lgx:px-24">
      <img src={logo} alt="Logo" className=" w-32 h-10 md:w-[10rem] md:h-14" />
      <nav>
        <ul className="hidden items-center gap-5 text-[1.05rem] text-slate-100 lg:gap-7 mdx:flex">
          <NavMenu title="Home" to="/" />
          {/* <NavMenu title="About" href="" /> */}
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
        <ul className="flex gap-10 items-center text-[1.05rem] text-slate-100">
          <div className="hidden  md:flex mdx:hidden">
            {" "}
            <NavMenu
              title="Advertise"
              to="advertise"
              style="px-4 py-2 outline outline-1 "
            />
          </div>
          <div
            onClick={handleClick}
            className="flex flex-col justify-center gap-1 cursor-pointer px-[0.4rem] py-[0.5rem] z-50   hover:text-[#c5eee4]  mdx:hidden "
          >
            <span
              className={`${spanStyle} ${isOpen && "rotate-45 translate-y-2"}`}
            ></span>
            <span className={`${spanStyle} ${isOpen && "opacity-0"}`}></span>
            <span
              className={`${spanStyle} ${
                isOpen && "-rotate-45 -translate-y-1.5"
              }`}
            ></span>
          </div>
        </ul>
        {isOpen && <NavModal />}
      </nav>
    </header>
  );
}

export function NavMenu({ to, title, style }) {
  return (
    <li>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          ` hover:text-[#c5eee4] ${style} ${
            isActive ? "underline underline-offset-4" : "text-slate-100"
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export function NavMenu2({ href, title }) {
  return (
    <li>
      <a href={href} className="text-slate-100 hover:text-[#c5eee4]">
        {title}
      </a>
    </li>
  );
}
