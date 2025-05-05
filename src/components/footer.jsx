import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-darkblue2 lg:gap-0 px-10 lg:px-20 py-20 lg:flex-row">
      <div className="w-full flex flex-col gap-8 md:gap-0 md:flex-row lg:[60%]">
        <div className=" flex flex-col items-center w-full gap-4 lg:w-[35%]">
          <img
            src={logo}
            alt="Logo"
            className=" w-32 h-10 md:w-[10rem] md:h-14"
          />
          <span className="flex gap-5">
            <FooterIcons icon="fa fa-phone" />
            <FooterIcons icon="fab fa-whatsapp" />
            <FooterIcons icon="fab fa-instagram" />
            <FooterIcons icon="fab fa-telegram" />
            <FooterIcons icon="fab fa-linkedin" />
          </span>
        </div>
        <div className=" flex flex-col w-full gap-8 lg:gap-0 md:w-[65%] md:flex-row">
          <FooterDiv
            description="More Info"
            title1="About"
            title2="support"
            title3="FAQ"
          />

          <FooterDiv
            description="Services"
            title1="About"
            title2="support"
            title3="FAQ"
          />
        </div>
      </div>
      <div className=" w-full space-y-5 lg:w-[40%]">
        <h1 className="text-slate-400 mb-2">
          Need more news feed so you are not left out?
        </h1>
        <p className="text-slate-300 text-xs">Join our Newsletter</p>
        <form action="" className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[70%] py-1.5 px-3 rounded-md"
          />
          <button className=" text-white w-[30%] bg-bgGreen3 rounded-md hover:bg-textgreen">
            Suscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
export function FooterDiv({
  description,
  title1,
  title2,
  title3,
  href1,
  href2,
  href3,
}) {
  return (
    <div className="flex lg:justify-center  lg:w-[50%]">
      <span className="flex flex-col  gap-5">
        <h1 className="text-slate-400">{description}</h1>
        <a
          className="text-sm text-slate-300 hover:text-slate-100 cursor-pointer"
          href={href1}
        >
          {title1}
        </a>
        <a
          className="text-sm text-slate-300 hover:text-slate-100 cursor-pointer"
          href={href2}
        >
          {title2}
        </a>
        <a
          className="text-sm text-slate-300 hover:text-slate-100 cursor-pointer"
          href={href3}
        >
          {title3}
        </a>
      </span>
    </div>
  );
}

export function FooterIcons({ href, icon }) {
  return (
    <a
      href={href}
      className="cursor-pointer w-7 h-7 flex items-center justify-center outline rounded-full outline-2 text-slate-400 outline-slate-400 hover:text-slate-100 hover:outline-slate-100"
    >
      <i className={`${icon} text-xs  `}></i>
    </a>
  );
}
