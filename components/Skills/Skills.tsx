import { useState, useRef, useEffect, useMemo } from "react";
import { useTrail, animated as a } from "react-spring";
import { useIntersection } from "react-use";

import { Box, Grid, Typography, Container, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Icon from "./Icon";

import githubDots from "public/assets/github-dots.svg";

const git = "/assets/icons/git.svg";
const github = "/assets/icons/github.svg";
const javascript = "/assets/icons/javascript.svg";
const materialui = "/assets/icons/materialui.svg";
const mongodb = "/assets/icons/mongodb.svg";
const nextjs = "/assets/icons/nextjs.svg";
const nodejs = "/assets/icons/nodejs.svg";
const postgresql = "/assets/icons/postgresql.svg";
const react = "/assets/icons/react.png";
const redux = "/assets/icons/redux.svg";
const sass = "/assets/icons/sass.svg";
const typescript = "/assets/icons/typescript.svg";
const expressjs = "/assets/icons/expressjs.png";
const bootstrap = "/assets/icons/bootstrap.svg";
const bash = "/assets/icons/bash.svg";
const s3 = "/assets/icons/s3.svg";
const socketio = "/assets/icons/socketio.svg";
const vercel = "/assets/icons/vercel.svg";

type iconsArray = {
  title: string;
  logo: any;
  invert?: boolean;
  spin?: boolean;
};

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
      margin: "auto",
    },
    illustration: {
      width: "80%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  })
);

function Skills() {
  const iconsArray: iconsArray[] = useMemo(
    () => [
      {
        title: "TypeScript",
        logo: typescript,
      },
      {
        title: "node.js",
        logo: nodejs,
      },
      {
        title: "react.js",
        logo: react,
        spin: true,
      },
      {
        title: "next.js",
        logo: nextjs,
        invert: true,
      },
      {
        title: "mongoDB",
        logo: mongodb,
      },
      {
        title: "git",
        logo: git,
      },
      {
        title: "GitHub",
        logo: github,
        invert: true,
      },
      {
        title: "JavaScript",
        logo: javascript,
      },
      {
        title: "aws S3",
        logo: s3,
      },
      {
        title: "Material-UI",
        logo: materialui,
      },
      {
        title: "Postgres",
        logo: postgresql,
      },
      {
        title: "Redux",
        logo: redux,
      },
      {
        title: "Sass",
        logo: sass,
      },
      {
        title: "express.js",
        logo: expressjs,
      },
      {
        title: "Bootstrap",
        logo: bootstrap,
      },
      {
        title: "bash shell",
        logo: bash,
      },
      {
        title: "socket.io",
        logo: socketio,
      },
      {
        title: "vercel",
        logo: vercel,
        invert: true,
      },
    ],
    []
  );

  const classes = useStyles();
  const intersectionRef = useRef(null);
  const intersectionEnter = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const intersectionExit = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const [toggle, setToggle] = useState(false);

  const trail = useTrail(iconsArray.length, {
    config: { mass: 1, tension: 375, friction: 25 },
    trail: 400 / iconsArray.length,
    transform: toggle ? "scale(1)" : "scale(0)",
    from: { transform: "scale(0)" },
    reset: !toggle,
  });

  useEffect(() => {
    if (intersectionEnter?.isIntersecting) {
      setToggle(true);
    }
  }, [intersectionEnter]);

  useEffect(() => {
    if (!intersectionExit?.isIntersecting) {
      setToggle(false);
    }
  }, [intersectionExit]);

  const renderIcons = () => {
    return trail.map(({ transform }, index) => (
      <Grid
        key={iconsArray[index].title}
        item
        className={classes.gridItem}
        md={2}
        xs={3}
      >
        <a.div
          key={index}
          style={{
            transform,
          }}
        >
          <a.div>
            <Icon
              title={iconsArray[index].title}
              logo={iconsArray[index].logo}
              spin={iconsArray[index].spin}
              invert={iconsArray[index].invert}
            ></Icon>
          </a.div>
        </a.div>
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
              <div
              // ref={intersectionExitRef}
              >
                <Grid
                  container
                  className={classes.gridContainer}
                  ref={intersectionRef}
                >
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
