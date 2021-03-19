import { Grid, Typography, Container, Toolbar } from "@material-ui/core";
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
      },
      illustration: {
        width: "80%",
      },
    })
  );
  const classes = useStyles();
  return (
    <>
      <Toolbar id="skills" />
      <Container>
        <Grid container>
          <Grid xs={12} md={6} item className={classes.illustrationContainer}>
            <img
              src={githubDots}
              alt="github activity illustration"
              className={classes.illustration}
            />
          </Grid>
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
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="git" logo={git} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon invert={true} title="github" logo={github} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="javascript" logo={javascript} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="materialui" logo={materialui} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="mongodb" logo={mongodb} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon invert={true} title="nextjs" logo={nextjs} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="nodejs" logo={nodejs} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="postgresql" logo={postgresql} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon spin={true} title="react" logo={react} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="redux" logo={redux} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="sass" logo={sass} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="typescript" logo={typescript} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="expressjs" logo={expressjs} />
                </Grid>
                <Grid item className={classes.gridItem} xs={2}>
                  <Icon title="bootstrap" logo={bootstrap} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Skills;
