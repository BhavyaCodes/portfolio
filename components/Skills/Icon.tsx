import { useContext, useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { DarkModeContext } from "context/themeContext";

function Icon({
  title,
  logo,
  invert,
  spin,
}: {
  title: string;
  logo: any;
  invert?: boolean;
  spin?: boolean;
}) {
  const [invertState, setInvertState] = useState(false);
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      logo: {
        width: "60%",
        flexGrow: 1,
        filter: `invert(${invertState ? "100%" : "0%"})`,
        animation: `${spin ? "$App-logo-spin infinite 20s linear" : ""}`,
      },
      "@keyframes App-logo-spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    })
  );

  const classes = useStyles();
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode !== undefined) {
      if (darkMode && invert) {
        return setInvertState(true);
      }
      setInvertState(false);
    }
  }, [darkMode]);

  return (
    <Box className={classes.root}>
      <Typography align="center" variant="caption" gutterBottom>
        {title}
      </Typography>
      <img className={classes.logo} src={logo} />
    </Box>
  );
}

export default Icon;
