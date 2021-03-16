import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const DarkModeContext = createContext<boolean>(true);
export const DispatchDarkModeContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <DarkModeContext.Provider value={theme}>
      <DispatchDarkModeContext.Provider value={setTheme}>
        {children}
      </DispatchDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
