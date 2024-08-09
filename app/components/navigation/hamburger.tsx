import { motion, MotionConfig } from "framer-motion";

interface HamburgerProps {
  active: boolean;
  onActiveChange: () => void;
}

export const HAMBURGER_VARIANTS = {
  top: {
    open: {
      top: ["35%", "50%", "50%"],
      rotate: ["0deg", "0deg", "45deg"],
    },
    close: {
      top: ["50%", "50%", "35%"],
      rotate: ["45deg", "0deg", "0deg"],
    },
    initial: {
      left: "50%",
      top: "35%",
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
      bottom: ["35%", "50%", "50%"],
      rotate: ["0deg", "0deg", "-45deg"],
    },
    close: {
      bottom: ["50%", "50%", "35%"],
      rotate: ["-45deg", "0deg", "0deg"],
    },
    initial: {
      left: "50%",
      bottom: "35%",
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
        className={`relative h-16 aspect-square cursor-pointer ${
          active && "bg-white/20 hover:rounded-bl-lg hover:rounded-tr-lg"
        }`}
        onClick={onActiveChange}
        tabIndex={1}
      >
        <motion.span
          style={HAMBURGER_VARIANTS.top.initial}
          className="top h-1 w-10 absolute rounded bg-white"
        />
        <motion.span
          style={HAMBURGER_VARIANTS.middle.initial}
          className="middle h-1 w-10 absolute rounded bg-white"
        />
        <motion.span
          style={HAMBURGER_VARIANTS.bottom.initial}
          className="bottom h-1 w-10 absolute rounded bg-white"
        />
      </motion.button>
    </MotionConfig>
  );
};

export default Hamburger;
