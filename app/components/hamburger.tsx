import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

export default function Hamburger() {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        className="relative bg-transparent h-16 aspect-square rounded-full hover:bg-primary/10
        cursor-pointer"
        animate={active ? "open" : "closed"}
        initial={false}
        onClick={() => setActive((prev) => !prev)}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              top: ["35%", "50%", "50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: {
              top: ["50%", "50%", "35%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
          className="bg-foreground h-1 w-10 absolute rounded"
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="bg-foreground h-1 w-10 absolute rounded"
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              bottom: ["35%", "50%", "50%"],
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              bottom: ["50%", "50%", "35%"],
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="bg-foreground h-1 w-10 absolute rounded"
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}
