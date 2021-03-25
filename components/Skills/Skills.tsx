import { useState, useRef, useEffect, useMemo, memo } from "react";
import { useTrail, animated as a } from "react-spring";
import { useIntersection } from "react-use";

import { Box, Grid, Typography, Container, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useDarkMode } from "context/themeContext";

import Icon from "./Icon";

import githubDots from "public/assets/github-dots.svg";

import git from "public/assets/icons/git.svg";
import github from "public/assets/icons/github.svg";
import javascript from "public/assets/icons/javascript.svg";
import materialui from "public/assets/icons/materialui.svg";
import mongodb from "public/assets/icons/mongodb.svg";
import nextjs from "public/assets/icons/nextjs.svg";
import nodejs from "public/assets/icons/nodejs.svg";
import postgresql from "public/assets/icons/postgresql.svg";
import react from "public/assets/icons/react.png";
import redux from "public/assets/icons/redux.svg";
import sass from "public/assets/icons/sass.svg";
import typescript from "public/assets/icons/typescript.svg";
import expressjs from "public/assets/icons/expressjs.png";
import bootstrap from "public/assets/icons/bootstrap.svg";
import bash from "public/assets/icons/bash.svg";
import s3 from "public/assets/icons/s3.png";
import socketio from "public/assets/icons/socketio.svg";
import vercel from "public/assets/icons/vercel.svg";

type iconsArray = {
  title: string;
  logo: any;
  invert?: boolean;
  spin?: boolean;
};

function Skills() {
  const darkMode = useDarkMode();
  const iconsArray: iconsArray[] = useMemo(() => {
    return [
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
        invert: darkMode,
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
        invert: darkMode,
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
        invert: darkMode,
      },
    ];
  }, [darkMode]);
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

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const [toggle, setToggle] = useState(false);

  const trail = useTrail(iconsArray.length, {
    config: { mass: 1, tension: 375, friction: 25 },
    trail: 400 / iconsArray.length,
    transform: toggle ? "scale(1)" : "scale(0)",
    from: { transform: "scale(0)" },
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setToggle(true);
    }
  }, [intersection]);

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
              <div>
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

export default memo(Skills, () => true);
