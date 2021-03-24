import { useContext, useEffect, useState, ReactNode } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";

import { createMuiTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum";
import { DarkModeProvider, DarkModeContext } from "../context/themeContext";
import DarkModeIcon from "../components/DarkModeIcon";
import "Layout.css";
interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    })
  );
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function MyAppWithTheme(props: AppProps) {
  return (
    <DarkModeProvider>
      <MyApp {...props} />;
    </DarkModeProvider>
  );
}

export function MyApp({ Component, pageProps }: AppProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      navbarRight: {
        marginLeft: "auto",
        marginRight: theme.spacing(0),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      drawer: {
        width: "240px",
      },
    })
  );
  const classes = useStyles();
  const darkMode = useContext(DarkModeContext);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      // primary: {
      //   main: "#556cd6",
      // },
      // secondary: {
      //   main: "#19857b",
      // },
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
      type: paletteType,
    },
  });
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const handleMenuButton = () => {
    setDrawerOpen(true);
  };

  const renderDrawer: () => ReactNode = () => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={() => {
        setDrawerOpen(false);
      }}
      onKeyDown={() => {
        setDrawerOpen(false);
      }}
    >
      <List>
        <Link href="/#home" passHref>
          <ListItem button component="a" href="/#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/#projects" passHref>
          <ListItem button component="a" href="/#projects">
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link href="/#contact" passHref>
          <ListItem button component="a" href="/#contact">
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <Head>
        <title>Bhavya's portfolio</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to see button</Typography>
            <div className={classes.navbarRight}>
              <DarkModeIcon />
              <IconButton color="inherit" onClick={handleMenuButton}>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          open={drawerOpen}
          anchor="right"
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          {renderDrawer()}
        </Drawer>
        <Component {...pageProps} />
        <ScrollTop>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
