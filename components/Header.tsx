import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import bg from "../assets/tornado-bg.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundImage: `url(${bg})`,
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
