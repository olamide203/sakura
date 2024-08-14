import { NavLink } from "@remix-run/react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "~/components/ui/navigation-menu";
import useMediaQuery from "~/hooks/useMediaQuery";
import SideNav from "./sidenav";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import navLinks from "~/data/navigation";
import Logo from "./logo";
import { AspectRatio } from "../ui/aspect-ratio";

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
      className="max-w-[1600px] w-full fixed mx-auto inset-0 top-0 z-[1000] grid grid-cols-[1fr_auto] items-center justify-between px-4 lg:px-10 h-20 font-inter py-2"
      whileHover={{ y: 0 }}
      animate={hidden ? "hidden" : "visible"}
    >
      <div className="w-24 h-full">
        <AspectRatio ratio={255.701 / 106.4}>
          <Logo />
        </AspectRatio>
      </div>
      {matches ? (
        <NavigationMenu className="w-full bg-gradient-to-br from-neutral-900/10 to-neutral-900/5  font-medium p-4 rounded-full overflow-hidden shadow-lg backdrop-blur">
          <NavigationMenuList className="gap-2">
            {navLinks.map((link) => (
              <NavigationMenuItem
                key={link.id}
                className={
                  "capitalize px-6 py-2 rounded-full  hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:backdrop-blur text-neutral-900 cursor-pointer hover:backdrop-filter "
                }
              >
                <NavLink to={link.to}>{link.text}</NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <SideNav />
      )}
    </motion.div>
  );
}
