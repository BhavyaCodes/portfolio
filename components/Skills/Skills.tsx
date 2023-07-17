import { useState, useRef, useEffect, useMemo } from "react";
import { useTrail, animated as a } from "react-spring";
import { useIntersection } from "react-use";

import { Box, Grid, Typography, Container, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Icon from "./Icon";

import githubDots from "public/assets/github-dots.svg";
import logos from "lib/logos";

type iconsArray = {
  label: string;
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
      height: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  })
);

function Skills() {
  const iconsArray: iconsArray[] = useMemo(
    () => [
      logos.typescript,
      logos.nodejs,
      logos.react,
      logos.nextjs,
      logos.mongodb,
      logos.postgresql,
      logos.trpc,
      logos.nestjs,
      // logos.graphql,
      // logos.apollo,
      // logos.git,
      // logos.github,
      // logos.s3,
      // logos.redux,
      // logos.sass,
      // logos.expressjs,
      // logos.bootstrap,
      // logos.bash,
      // logos.socketio,
      // logos.vercel,
      logos.cypress,
      logos.reactQuery,
      logos.materialui,
      logos.javascript,
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

  return (
    <>
      <Toolbar id="skills" />
      <Container component="section">
        <Grid container>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid xs={12} md={6} item className={classes.illustrationContainer}>
              <img
                width={1144}
                height={617}
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
                  {trail.map(({ transform }, index) => (
                    <Grid
                      key={iconsArray[index].label}
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
                            label={iconsArray[index].label}
                            logo={iconsArray[index].logo}
                            spin={iconsArray[index].spin}
                            invert={iconsArray[index].invert}
                          ></Icon>
                        </a.div>
                      </a.div>
                    </Grid>
                  ))}
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
