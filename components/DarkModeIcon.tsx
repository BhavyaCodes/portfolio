import { useContext } from "react";
import {
  DarkModeContext,
  DispatchDarkModeContext,
} from "../context/themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeIcon = () => {
  // const [isDarkMode, setDarkMode] = React.useState(false);
  const darkMode = useContext(DarkModeContext);
  const setDarkMode = useContext(DispatchDarkModeContext);

  const toggleDarkMode = () => {
    if (setDarkMode) {
      setDarkMode((prevMode) => !prevMode);
    }
  };
  // const toggleDarkMode = (checked: boolean) => {
  //   setDarkMode(checked);
  // };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default DarkModeIcon;
