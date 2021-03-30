import { useEffect, useState, ReactNode } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { lime, red } from "@material-ui/core/colors";
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
  Hidden,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum";
import BuildIcon from "@material-ui/icons/Build";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { DarkModeProvider, useDarkMode } from "../context/themeContext";
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

function MyAppWithTheme(props: AppProps) {
  const darkMode = useDarkMode();
  const paletteType = darkMode ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      // primary: deepPurple,
      secondary: paletteType === "dark" ? lime : red,
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
      type: paletteType,
      background: {
        default: paletteType === "dark" ? "#161625" : "#fafafa",
        paper: paletteType === "dark" ? "#161625" : "#fff",
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: paletteType === "dark" ? "#091c34" : "#51e845",
          color: paletteType === "light" ? "rgba(0, 0, 0, 0.87)" : "#fafafa",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MyApp {...props} />
    </ThemeProvider>
  );
}

export default function MyAppWithDarkModeAndTheme(props: AppProps) {
  return (
    <DarkModeProvider>
      <MyAppWithTheme {...props} />
    </DarkModeProvider>
  );
}

// function MyAppWithDarkMode(props: AppProps) {
//   return (
//     <DarkModeProvider>
//       <MyApp {...props} />
//     </DarkModeProvider>
//   );
// }

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
      navbarRightButtons: {
        marginRight: theme.spacing(4),
      },
      chevronIcon: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    })
  );
  const classes = useStyles();

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
      <IconButton
        className={classes.chevronIcon}
        onClick={() => {
          setDrawerOpen(false);
        }}
      >
        <ChevronRightIcon />
      </IconButton>
      <Divider />
      <List>
        <Link href="/#home" passHref>
          <ListItem button component="a" href="/#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/#skills" passHref>
          <ListItem button component="a" href="/#skills">
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="My Toolbelt" />
          </ListItem>
        </Link>
        <Link href="/projects" passHref>
          <ListItem button component="a" href="/projects">
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
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
          <div className={classes.navbarRight}>
            <Hidden mdDown>
              <Box mr={2}>
                <Link href="/#skills" passHref>
                  <Button
                    className={classes.navbarRightButtons}
                    component="a"
                    href="/#skills"
                    color="inherit"
                  >
                    Tools and skills
                  </Button>
                </Link>
                <Link href="/projects" passHref>
                  <Button
                    className={classes.navbarRightButtons}
                    component="a"
                    href="/projects"
                    color="inherit"
                  >
                    projects
                  </Button>
                </Link>
                <Link href="/#contact" passHref>
                  <Button
                    className={classes.navbarRightButtons}
                    component="a"
                    href="/#contact"
                    color="inherit"
                  >
                    Contact me
                  </Button>
                </Link>
              </Box>
            </Hidden>
            <DarkModeIcon />
            <Hidden mdUp>
              <IconButton color="inherit" onClick={handleMenuButton}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          open={drawerOpen}
          anchor="right"
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          {renderDrawer()}
        </Drawer>
      </Hidden>
      <Component {...pageProps} />
      <ScrollTop>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
