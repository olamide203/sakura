import { Link } from "@remix-run/react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "~/components/ui/navigation-menu";
import useMediaQuery from "~/hooks/useMediaQuery";
import Hamburger from "./hamburger";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";

export default function Navbar() {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");
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
      className="max-w-[1600px] w-full fixed mx-auto inset-0 top-2 z-[1000] flex items-center justify-between px-4 lg:px-10 h-fit font-inter"
      whileHover={{ y: 0 }}
      animate={hidden ? "hidden" : "visible"}
    >
      <h2>logo</h2>
      {matches ? (
        <NavigationMenu className="w-full bg-neutral-400/20 text-neutral-900 font-medium py-4 rounded-full overflow-hidden px-10 backdrop-blur backdrop-filter shadow-lg">
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem className="hover:text-blue-500 relative p-2 rounded-full before:absolute before:content-[' '] before:bottom-0 before:w-0 before:h-1 before:bg-blue-500  before:left-0 before:rounded-full hover:before:w-full before:transition-all">
              <Link to={{ pathname: "/", hash: "#home" }}>Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-blue-500 relative p-2 rounded-full before:absolute before:content-[' '] before:bottom-0 before:w-0 before:h-1 before:bg-blue-500  before:left-0 before:rounded-full hover:before:w-full before:transition-all">
              <Link to={{ pathname: "/", hash: "#about" }}>About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-blue-500 relative p-2 rounded-full before:absolute before:content-[' '] before:bottom-0 before:w-0 before:h-1 before:bg-blue-500  before:left-0 before:rounded-full hover:before:w-full before:transition-all">
              <Link to={{ pathname: "/", hash: "#experience" }}>
                Experience
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-blue-500 relative p-2 rounded-full before:absolute before:content-[' '] before:bottom-0 before:w-0 before:h-1 before:bg-blue-500  before:left-0 before:rounded-full hover:before:w-full before:transition-all">
              <Link to={{ pathname: "/", hash: "#projects" }}>Projects</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Hamburger />
      )}
    </motion.div>
  );
}
