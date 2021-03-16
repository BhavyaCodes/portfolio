import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  return <div className={classes.root}>header</div>;
}

export default Header;
