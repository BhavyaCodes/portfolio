import { useState, createContext, ReactNode, Dispatch } from "react";

export const ThemeContext = createContext<string | null>("dark");
export const DispatchThemeContext = createContext<Dispatch<
  "dark" | "light" | null
> | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <DispatchThemeContext.Provider value={setTheme}>
        {children}
      </DispatchThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
