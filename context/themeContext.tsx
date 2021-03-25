import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeContext = createContext<boolean>(true);
const ToggleDarkModeContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("darkMode", true);
  return (
    <DarkModeContext.Provider value={theme}>
      <ToggleDarkModeContext.Provider value={setTheme}>
        {children}
      </ToggleDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};

export function useDarkMode() {
  const darkMode = useContext(DarkModeContext);
  if (typeof darkMode === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return darkMode;
}

export function useToggleDarkMode() {
  const toggleDarkMode = useContext(ToggleDarkModeContext);
  if (typeof toggleDarkMode === "undefined") {
    throw new Error("useCountUpdater must be used within a CountProvider");
  }
  const toggle = useCallback(() => toggleDarkMode!((bool) => !bool), [
    toggleDarkMode,
  ]);
  return toggle;
}
