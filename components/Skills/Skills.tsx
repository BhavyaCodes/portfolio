import { Box, Grid, Typography, Container, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Icon from "./Icon";

import githubDots from "assets/github-dots.svg";

import git from "assets/icons/git.svg";
import github from "assets/icons/github.svg";
import javascript from "assets/icons/javascript.svg";
import materialui from "assets/icons/materialui.svg";
import mongodb from "assets/icons/mongodb.svg";
import nextjs from "assets/icons/nextjs.svg";
import nodejs from "assets/icons/nodejs.svg";
import postgresql from "assets/icons/postgresql.svg";
import react from "assets/icons/react.svg";
import redux from "assets/icons/redux.svg";
import sass from "assets/icons/sass.svg";
import typescript from "assets/icons/typescript.svg";
import expressjs from "assets/icons/expressjs.png";
import bootstrap from "assets/icons/bootstrap.svg";

type iconsArray = {
  title: string;
  logo: any;
  invert?: boolean;
  spin?: boolean;
};

const iconsArray: iconsArray[] = [
  {
    title: "git",
    logo: git,
  },
  {
    title: "github",
    logo: github,
    invert: true,
  },
  {
    title: "javascript",
    logo: javascript,
  },
  {
    title: "materialui",
    logo: materialui,
  },
  {
    title: "mongodb",
    logo: mongodb,
  },
  {
    title: "nextjs",
    logo: nextjs,
    invert: true,
  },
  {
    title: "nodejs",
    logo: nodejs,
  },
  {
    title: "postgresql",
    logo: postgresql,
  },
  {
    title: "react",
    logo: react,
    spin: true,
  },
  {
    title: "redux",
    logo: redux,
  },
  {
    title: "sass",
    logo: sass,
  },
  {
    title: "typescript",
    logo: typescript,
  },
  {
    title: "expressjs",
    logo: expressjs,
  },
  {
    title: "bootstrap",
    logo: bootstrap,
  },
];

function Skills() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      gridItem: {
        marginBottom: theme.spacing(3),
      },
      title: {
        marginTop: theme.spacing(3),
      },
      gridContainer: {
        marginTop: theme.spacing(4),
      },
      illustrationContainer: {
        display: "flex",
        alignContent: "center",
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },
      },
      illustration: {
        width: "80%",
      },
    })
  );
  const classes = useStyles();

  const renderIcons = () => {
    return iconsArray.map((obj) => (
      <Grid key={obj.title} item className={classes.gridItem} xs={2}>
        <Icon
          title={obj.title}
          logo={obj.logo}
          spin={obj.spin}
          invert={obj.invert}
        />
      </Grid>
    ));
  };

  return (
    <>
      <Toolbar id="skills" />
      <Container>
        <Grid container>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid xs={12} md={6} item className={classes.illustrationContainer}>
              <img
                src={githubDots}
                alt="github activity illustration"
                className={classes.illustration}
              />
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, md: 2 }}>
            <Grid xs={12} md={6} item>
              <Typography
                className={classes.title}
                align="center"
                variant="h2"
                gutterBottom
              >
                My Tech Stack
              </Typography>
              <div>
                <Grid container className={classes.gridContainer}>
                  {renderIcons()}
                </Grid>
              </div>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Skills;
