import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "~/components/ui/navigation-menu";
import useMediaQuery from "~/hooks/useMediaQuery";
import Hamburger from "./hamburger";

export default function Navbar() {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");
  return (
    <header className="fixed z-[1000] w-full">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20 px-4 lg:px-10">
        <h1 className="font-cursive text-xl ">Logo</h1>
        {matches ? (
          <NavigationMenu className="w-full">
            <NavigationMenuList className="gap-10">
              <NavigationMenuItem className="">
                <Link to={{ pathname: "/", hash: "#home" }}>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={{ pathname: "/", hash: "#about" }}>About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={{ pathname: "/", hash: "#experience" }}>
                  Experience
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={{ pathname: "/", hash: "#projects" }}>Projects</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Hamburger />
        )}
      </div>
    </header>
  );
}
