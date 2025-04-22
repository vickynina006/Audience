export default function Button({
  href,
  title,
  bg = "bg-gradient-to-r from-bgGreen2 from-[30%] to-bgGreen3 to[70%] ",
}) {
  return (
    <a href={href}>
      <button
        className={`text-lg rounded-sm outline outline-1 outline-slate-400 text-white px-7 py-2 ${bg} hover:text-[#c5eee4] hover:outline-[#c5eee4]`}
      >
        {title}
      </button>
    </a>
  );
}
