import { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Toolbar, Grid, Container, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import programmer from "assets/programmer2.svg";
import { DarkModeContext } from "context/themeContext";
import lightHeader from "assets/light-header2.svg";
import darkHeader from "assets/dark-header.svg";
import HeaderText from "./HeaderText2";

function Header() {
  const darkMode = useContext(DarkModeContext);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: "100vh",
        backgroundImage: `url(${darkMode ? darkHeader : lightHeader})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      },
      container: {
        flexGrow: 1,
        display: "flex",
      },
      headerImg: {
        maxWidth: "90%",
      },
      gridItem: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      },
      downArrowContainer: {
        textAlign: "center",
      },
      downArrow: {
        position: "relative",
        bottom: theme.spacing(2),
      },
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.container}>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridItem}>
            <HeaderText />
          </Grid>
          <Grid item md={6} xs={12} className={classes.gridItem}>
            <img className={classes.headerImg} src={programmer} />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.downArrowContainer}>
        <IconButton aria-label="scroll down" className={classes.downArrow}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
