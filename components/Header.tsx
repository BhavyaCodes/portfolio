import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import lightHeader from "../assets/light-header.svg";
import darkHeader from "../assets/dark-header.svg";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundImage: `url(${darkHeader})`,
      backgroundSize: "cover",
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      header
    </div>
  );
}

export default Header;
