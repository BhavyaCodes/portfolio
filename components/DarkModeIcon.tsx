import { useContext } from "react";
import {
  DarkModeContext,
  DispatchDarkModeContext,
} from "../context/themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeIcon = () => {
  const darkMode = useContext(DarkModeContext);
  const setDarkMode = useContext(DispatchDarkModeContext);

  const toggleDarkMode = () => {
    if (setDarkMode) {
      setDarkMode((prevMode) => !prevMode);
    }
  };

  return (
    <DarkModeSwitch
      style={{}}
      checked={!darkMode}
      onChange={toggleDarkMode}
      size={30}
      sunColor="yellow"
    />
  );
};

export default DarkModeIcon;
