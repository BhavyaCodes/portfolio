import { useContext, memo } from "react";
import {
  DarkModeContext,
  DispatchDarkModeContext,
} from "../context/themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "@material-ui/core";

const DarkModeIcon = () => {
  const darkMode = useContext(DarkModeContext);
  const setDarkMode = useContext(DispatchDarkModeContext);
  const theme = useTheme();

  const toggleDarkMode = () => {
    if (setDarkMode) {
      setDarkMode((prevMode) => !prevMode);
    }
  };

  return (
    <DarkModeSwitch
      style={{ marginRight: theme.spacing(2) }}
      checked={!darkMode}
      onChange={toggleDarkMode}
      size={30}
      sunColor="yellow"
    />
  );
};

export default memo(DarkModeIcon);
