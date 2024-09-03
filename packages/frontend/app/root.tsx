import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import appStylesHref from "./tailwind.css?url";
import { Theme, useThemeContext } from "./hooks/useTheme";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const setTheme = useThemeContext((s) => s.setTheme);
  const theme = useThemeContext((s) => s.theme);
  useEffect(() => {
    const theme = localStorage.getItem("theme") as Theme;
    if (theme) {
      setTheme(theme);
    } else {
      prefersDarkMode ? setTheme("dark") : setTheme("light");
    }
  }, [prefersDarkMode]);

  return (
    <html lang="en" className={`${theme}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-neutral-900 bg-[url('/noise.svg')] ">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
