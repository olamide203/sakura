import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "~/components/ui/navigation-menu";
import Hamburger from "./hamburger";

export default function Navbar() {
  return (
    <header className="fixed z-[1000] w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20">
        <h1 className="font-cursive text-xl ">Logo</h1>
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
        <Hamburger />
      </div>
    </header>
  );
}
