import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, AnimationSequence, stagger } from "framer-motion";
import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "~/components/ui/navigation-menu";
import Hamburger, {
  HAMBURGER_VARIANTS,
} from "~/components/navigation/hamburger";
import navLinks from "~/data/navigation";

const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();
  const isInitial = useRef(true);
  useEffect(() => {
    const runAnimation = async () => {
      try {
        if (isOpen) {
          const sequence: AnimationSequence = [
            ["ul", SIDENAV_VARIANTS.open, { duration: 0.6, type: "spring" }],
            ["li", LISTITEM_VARIANTS.open, { delay: stagger(0.1), at: "+0.1" }],

            ["span.top", HAMBURGER_VARIANTS.top.open, { duration: 0.7, at: 0 }],
            [
              "span.middle",
              HAMBURGER_VARIANTS.middle.open,
              { duration: 0.7, at: 0 },
            ],
            [
              "span.bottom",
              HAMBURGER_VARIANTS.bottom.open,
              { duration: 0.7, at: 0 },
            ],
          ];
          await animate(sequence);
        } else {
          const stage1: AnimationSequence = [
            ["li", LISTITEM_VARIANTS.close, { at: 0 }],
            [
              "ul",
              SIDENAV_VARIANTS.close,
              {
                duration: 0.6,
                at: 0.5,
                type: "spring",
                bounce: 1,
                stiffness: 150,
              },
            ],

            [
              "span.top",
              isInitial.current
                ? HAMBURGER_VARIANTS.top.initial
                : HAMBURGER_VARIANTS.top.close,
              { at: 0, duration: 0.7 },
            ],
            [
              "span.middle",
              isInitial.current
                ? HAMBURGER_VARIANTS.middle.initial
                : HAMBURGER_VARIANTS.middle.close,
              { at: 0, duration: 0.7 },
            ],
            [
              "span.bottom",
              isInitial.current
                ? HAMBURGER_VARIANTS.bottom.initial
                : HAMBURGER_VARIANTS.bottom.close,
              { at: 0, duration: 0.7 },
            ],
          ];
          await animate(stage1);
        }
        if (isInitial.current) {
          isInitial.current = false;
        }
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    runAnimation();
  }, [isOpen, isInitial, animate]);

  return scope;
};

const SIDENAV_VARIANTS = {
  open: {
    height: "100%",
    width: "260px",
    paddingTop: "64px",
    paddingBottom: "64px",
  },
  close: {
    height: "64px",
    width: "64px",
    paddingTop: 0,
    paddingBottom: 0,
  },

  initial: {
    height: "64px",
    width: "64px",
  },
};

const LISTITEM_VARIANTS = {
  open: {
    opacity: 1,
    y: "0%",
  },
  close: {
    opacity: 0,
    y: "-10%",
  },
};

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen((prev) => !prev);

  const scope = useMenuAnimation(open);
  return (
    <div className="relative" ref={scope}>
      <Hamburger active={open} onActiveChange={toggleNav} />
      <NavigationMenu className="absolute top-0 right-0 -z-10 rounded-lg overflow-hidden ">
        <NavigationMenuList
          asChild
          className="flex-col items-start justify-start pl-2"
        >
          <motion.ul
            style={SIDENAV_VARIANTS.initial}
            className={`overflow-hidden bg-[#F4A261]`}
          >
            {navLinks.map((link) => (
              <NavigationMenuItem asChild key={link.id}>
                <motion.li
                  style={LISTITEM_VARIANTS.close}
                  whileHover={{
                    color: "#FFFFFF",
                  }}
                  className="w-full capitalize text-3xl font-bold font-display text-white/75 p-2"
                >
                  <Link to={link.to} onClick={toggleNav}>
                    {link.text}
                  </Link>
                </motion.li>
              </NavigationMenuItem>
            ))}
          </motion.ul>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default SideNav;
