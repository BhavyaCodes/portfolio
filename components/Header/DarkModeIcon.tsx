import { useDarkMode, useToggleDarkMode } from "context/themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme, Tooltip } from "@material-ui/core";

const DarkModeIcon = () => {
  const darkMode = useDarkMode();
  const setDarkMode = useToggleDarkMode();
  const theme = useTheme();

  const toggleDarkMode = () => {
    if (setDarkMode) {
      setDarkMode();
    }
  };

  return (
    <Tooltip title="Toggle Dark Mode" aria-label="toggle dark mode">
      <div>
        <DarkModeSwitch
          style={{ marginRight: theme.spacing(2) }}
          checked={!darkMode}
          onChange={toggleDarkMode}
          size={30}
          sunColor="yellow"
          moonColor="black"
        />
      </div>
    </Tooltip>
  );
};

export default DarkModeIcon;
