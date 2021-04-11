import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { scroller } from "react-scroll";
import {
  Toolbar,
  Grid,
  Container,
  IconButton,
  Hidden,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        backgroundPosition: "right",
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
        [theme.breakpoints.down("sm")]: {
          paddingTop: theme.spacing(10),
        },
      },
      downArrow: {
        position: "relative",
        bottom: theme.spacing(2),
      },
    })
  );
  const classes = useStyles();
  return (
    <header className={classes.root} id="home">
      <Toolbar />
      <Container className={classes.container}>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridItem}>
            <HeaderText />
          </Grid>
          <Hidden smDown>
            <Grid item md={6} xs={12} className={classes.gridItem}>
              <img
                className={classes.headerImg}
                src="/assets/programmer2.svg"
                alt="programmer illustration"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      <div className={classes.downArrowContainer}>
        <IconButton
          aria-label="scroll down"
          className={classes.downArrow}
          onClick={() => {
            scroller.scrollTo("skills", {
              smooth: "easeInOutQuad",
            });
          }}
        >
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
