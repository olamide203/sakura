import { motion, MotionConfig } from "framer-motion";

interface HamburgerProps {
  active: boolean;
  onActiveChange: () => void;
}

export const HAMBURGER_VARIANTS = {
  top: {
    open: {
      top: ["32%", "50%", "50%"],
      rotate: ["0deg", "0deg", "45deg"],
    },
    close: {
      top: ["50%", "50%", "32%"],
      rotate: ["45deg", "0deg", "0deg"],
    },
    initial: {
      left: "50%",
      top: "32%",
      x: "-50%",
      y: "-50%",
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    close: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
    initial: {
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
    },
  },
  bottom: {
    open: {
      bottom: ["32%", "50%", "50%"],
      rotate: ["0deg", "0deg", "-45deg"],
    },
    close: {
      bottom: ["50%", "50%", "32%"],
      rotate: ["-45deg", "0deg", "0deg"],
    },
    initial: {
      left: "50%",
      bottom: "32%",
      x: "-50%",
      y: "50%",
    },
  },
};

const Hamburger = ({ active, onActiveChange }: HamburgerProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        className={`relative h-[48px] aspect-square cursor-pointer ${
          active && "bg-white/20 hover:rounded-bl-lg rounded-tr-lg"
        }`}
        onClick={onActiveChange}
        tabIndex={1}
      >
        <motion.span
          style={HAMBURGER_VARIANTS.top.initial}
          className="top h-[2px] w-8 absolute rounded bg-white"
        />
        <motion.span
          style={HAMBURGER_VARIANTS.middle.initial}
          className="middle h-[2px] w-8 absolute rounded bg-white"
        />
        <motion.span
          style={HAMBURGER_VARIANTS.bottom.initial}
          className="bottom h-[2px] w-8 absolute rounded bg-white"
        />
      </motion.button>
    </MotionConfig>
  );
};

export default Hamburger;
