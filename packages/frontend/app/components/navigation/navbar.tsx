import { useState } from "react";
import SideNav from "./sidenav";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import Logo from "./logo";
import { AspectRatio } from "../ui/aspect-ratio";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > (previous || 0));
  });
  return (
    <motion.div
      variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
      transition={{ duration: 0.35, ease: easeInOut }}
      className="max-w-[1600px] w-full fixed mx-auto inset-0 top-0 z-20 flex items-center justify-between px-4 lg:px-10 h-20 font-inter py-2 bg-white dark:bg-neutral-900 bg-[url('/noise.svg')]"
      whileHover={{ y: 0 }}
      animate={hidden ? "hidden" : "visible"}
    >
      <div className="w-24 h-full">
        <AspectRatio ratio={255.701 / 106.4}>
          <Logo />
        </AspectRatio>
      </div>
      <div className="flex gap-6">
        <ThemeSwitch />
        <SideNav />
      </div>
    </motion.div>
  );
}
