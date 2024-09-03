import { useThemeContext } from "~/hooks/useTheme";
import { Sun } from "@phosphor-icons/react/Sun";
import { Moon } from "@phosphor-icons/react/Moon";

const ThemeSwitch = () => {
  const { toggle, theme } = useThemeContext((s) => s);
  const handleClick = () => {
    toggle();
    // persist new theme to local storage
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={handleClick}
      className="relative aspect-square h-[48px] border rounded-lg border-black dark:border-white grid items-center justify-center z-20 bg-white dark:bg-neutral-900"
    >
      {theme == "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export { ThemeSwitch };
