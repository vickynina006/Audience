import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="flex ">
      <div className=" h-screen flex-col gap-10 p-10 bg-bgblack w-[25%] hidden md:flex">
        <div className="flex items-center gap-7 pb-10 pt-5 ">
          <span className="w-16 h-16 rounded-full outline outline-slate-100 outline-1 bg-bgGreen2"></span>
          <h1 className="text-xl text-slate-300">John Doe</h1>
        </div>
        <ul className="flex flex-col gap-8 text-gray-300">
          <Dashboardlink to="../dashboard" title="Dashboard" />
          <Dashboardlink to="/" title="Home" />
          <Dashboardlink to="pricing" title="Pricing" />
          <Dashboardlink to="suscription" title="Suscription" />
          <Dashboardlink to="task" title="Tasks" />
          <Dashboardlink to="payout" title="Payouts" />
          <Dashboardlink to="logout" title="Logout" />
        </ul>
      </div>
      <div className="w-full  flex-col bg-gray-200   md:w-[75%]"></div>
    </section>
  );
}
export function Dashboardlink({ to, title, style }) {
  return (
    <li>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          ` hover:text-[#c5eee4]  ${style} ${
            isActive ? "underline underline-offset-4" : "text-slate-100"
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
}
