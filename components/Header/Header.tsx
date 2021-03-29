import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Toolbar, Grid, Container, IconButton, Link } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import programmer from "public/assets/programmer2.svg";
import { useDarkMode } from "context/themeContext";
import lightHeader from "public/assets/backgrounds/blob-scene-light.svg";
import darkHeader from "public/assets/backgrounds/blob-scene-dark.svg";
import HeaderText from "./HeaderText";

function Header() {
  const darkMode = useDarkMode();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: "100vh",
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
    <div className={classes.root} id="home">
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
        <Link href="#skills">
          <IconButton aria-label="scroll down" className={classes.downArrow}>
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
