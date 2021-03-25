import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DarkModeContext = createContext<boolean>(true);
export const DispatchDarkModeContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("darkMode", true);
  return (
    <DarkModeContext.Provider value={theme}>
      <DispatchDarkModeContext.Provider value={useCallback(setTheme, [theme])}>
        {children}
      </DispatchDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
