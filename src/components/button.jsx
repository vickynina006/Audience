import { motion } from "framer-motion";
const MotionButton = motion.button;

export default function Button({
  href,
  title,
  spinner,
  bg = "bg-gradient-to-r from-bgGreen2 from-[30%] to-bgGreen3 to[70%] ",
  styles = "px-7 py-2 rounded-sm text-lg",
  ...props
}) {
  return (
    <a href={href}>
      <MotionButton
        {...props}
        className={`outline outline-1 flex items-center justify-center  outline-slate-400 text-white ${styles} ${bg} hover:text-[#c5eee4] hover:outline-[#c5eee4]`}
      >
        {title}
        {spinner}
      </MotionButton>
    </a>
  );
}
