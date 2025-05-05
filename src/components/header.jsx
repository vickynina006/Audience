import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between  px-8 py-10 md:px-16 lg:py-14 lg:px-24">
      <img src={logo} alt="Logo" className=" w-32 h-10 md:w-[10rem] md:h-14" />
      <nav>
        <ul className="hidden items-center gap-5 text-[1.05rem] text-slate-100 lg:gap-7 mdx:flex">
          <NavMenu title="Home" href="/" />
          <NavMenu title="About" href="about" />
          <NavMenu title="Services" href="services" />
          <NavMenu title="Contact" href="contact" />
          <NavMenu
            title="Advertise"
            href="advertise"
            style="px-4 py-2 outline outline-1 "
          />
          <NavMenu title="Login/Sign up" href="login" />
        </ul>
      </nav>
    </header>
  );
}

export function NavMenu({ href, title, style }) {
  return (
    <li>
      <NavLink
        to={href}
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
