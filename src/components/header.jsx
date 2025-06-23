import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import NavModal from "./navModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  useEffect(() => {
    function handleScroll() {
      // if(window.scrollY > 10){
      //   setScrolled(true)
      // }
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const spanStyle =
    "w-6 h-[3px] bg-slate-200 rounded-sm transition-all duration-300 ease-in-out";

  return (
    <header
      className={`flex items-center  justify-between fixed top-0 left-0 right-0 px-8 md:px-16 lgx:px-24 ${
        scrolled ? "bg-bgGreen2/10 py-5 backdrop-blur-md" : "py-10"
      } `}
    >
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
            styles="px-4 py-2 outline outline-1 "
          />
          <NavMenu title="Login/Sign up" to="login" />
        </ul>
        <ul className="flex gap-10 items-center text-[1.2rem] text-slate-100">
          <div className="hidden  md:flex mdx:hidden">
            {" "}
            <NavMenu
              title="Advertise"
              to="advertise"
              styles="px-4 py-2 outline outline-1 "
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

        <NavModal translate={isOpen ? "translate-x-0" : "-translate-x-full"} />
      </nav>
    </header>
  );
}

export function NavMenu({ to, title, styles, textcl = "text-slate-100" }) {
  return (
    <li>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          ` hover:text-[#c5eee4] ${styles} ${
            isActive ? "underline underline-offset-4" : textcl
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export function NavMenu2({ href, title, style = "text-slate-100" }) {
  return (
    <li>
      <a href={href} className={`${style} hover:text-[#c5eee4]`}>
        {title}
      </a>
    </li>
  );
}
