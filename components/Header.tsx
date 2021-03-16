import { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import {
  DarkModeContext,
  DispatchDarkModeContext,
} from "../context/themeContext";
import lightHeader from "../assets/light-header.svg";
import darkHeader from "../assets/dark-header.svg";

function Header() {
  const darkMode = useContext(DarkModeContext);
  const setDarkMode = useContext(DispatchDarkModeContext);

  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      root: {
        height: "100vh",
        backgroundImage: `url(${darkMode ? darkHeader : lightHeader})`,
        backgroundSize: "cover",
      },
    })
  );

  const handleThemeChange = () => {
    if (setDarkMode) {
      setDarkMode((prevState) => {
        return !prevState;
      });
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      header
      <button onClick={handleThemeChange}>Change Theme</button>
    </div>
  );
}

export default Header;
