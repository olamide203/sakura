import { createContext, useRef, useContext } from "react";
import { createStore, useStore } from "zustand";

export type Theme = "light" | "dark";

interface ThemeProps {
  theme: Theme;
}

export interface ThemeState extends ThemeProps {
  toggle: () => void;
  setTheme: (theme: Theme) => void;
}

type ThemeStore = ReturnType<typeof createThemeStore>;

const createThemeStore = (initialProps?: Partial<ThemeProps>) => {
  const defaultProps: ThemeProps = {
    theme: "light",
  };
  return createStore<ThemeState>()((set) => ({
    ...defaultProps,
    ...initialProps,
    toggle: () =>
      set((state) => ({ theme: state.theme == "light" ? "dark" : "light" })),
    setTheme: (theme: Theme) => set(() => ({ theme })),
  }));
};

export const ThemeContext = createContext<ThemeStore | null>(null);

// Provider wrapper
type ThemeProviderProps = React.PropsWithChildren<ThemeProps>;

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const storeRef = useRef<ThemeStore>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore({ theme });
  }
  return (
    <ThemeContext.Provider value={storeRef.current}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext<T>(selector: (state: ThemeState) => T): T {
  const store = useContext(ThemeContext);
  if (!store) {
    throw new Error("Missing ThemeContext.provider in the tree");
  }
  return useStore(store, selector);
}
