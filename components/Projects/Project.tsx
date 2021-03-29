import { memo } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TechChips from "components/Projects/TechChips";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import { useDarkMode } from "context/themeContext";

import { ProjectType } from "./Projects";
import Wave from "./Wave";
interface AppProps extends ProjectType {
  index: number;
}

function Project({
  index,
  title,
  description,
  images,
  stack,
  links,
}: AppProps) {
  const odd = index % 2 === 1 ? true : false;
  const darkMode = useDarkMode();
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& strong": {
          color: darkMode ? "#77f372" : "#0d9d74",
        },
        "& p": {
          marginBottom: theme.spacing(2),
        },
        backgroundColor: odd ? (darkMode ? "#070422" : "#ddf6ff") : "inherit",
        display: "block",
      },
      wave: {
        display: "block",
        width: "100%",
      },
      container: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(-2),
      },
      textSide: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(1),
      },
      body: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      imageContainer: {
        width: "100%",
        position: "relative",
        padding: theme.spacing(1),
      },
      chip: {
        borderRadius: "100px",
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
      },
    })
  );
  const classes = useStyles();

  const renderDescription = () => {
    return description.map((para, index) => (
      <Typography key={index} gutterBottom>
        <ReactMarkdown renderers={{ paragraph: "span" }} linkTarget="_blank">
          {para}
        </ReactMarkdown>
      </Typography>
    ));
  };

  const renderProject = () => (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" align="center">
          {title}
        </Typography>
        <Grid container>
          <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
            <Grid item md={6} xs={12} className={classes.textSide}>
              <Box className={classes.body}>
                <Box>{renderDescription()}</Box>
                <Box>
                  {links.github && (
                    <Button
                      className={classes.chip}
                      variant="contained"
                      color="primary"
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<GitHubIcon />}
                      size="small"
                    >
                      Source code
                    </Button>
                  )}
                  {links.live && (
                    <Button
                      className={classes.chip}
                      variant="contained"
                      color="primary"
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      size="small"
                    >
                      Live project
                    </Button>
                  )}
                </Box>
              </Box>
              <TechChips stack={stack} />
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
            <Grid item md={6} xs={12}>
              <Box className={classes.imageContainer}>
                {images.main && (
                  <Image
                    src={images.main.link}
                    width={images.main.width}
                    height={images.main.height}
                    quality={75}
                    priority
                    sizes="(max-width: 960px) 90vw, 40vw"
                    layout="responsive"
                  />
                )}
                <Box style={{ textAlign: "center" }}>
                  {images.webm && (
                    <video
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      poster={images.poster || "/assets/Spinner-3.gif"}
                      muted
                      controls
                      style={{
                        objectFit: "scale-down",
                        maxWidth: "100%",
                        marginLeft: "auto",
                        minHeight: "200px",
                      }}
                    >
                      <source src={images.webm} type="video/webm" />
                      <source src={images.mp4} type="video/mp4" />
                    </video>
                  )}
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
  if (odd) {
    return (
      <Wave color={darkMode ? "#070422" : "#ddf6ff"}>{renderProject()}</Wave>
    );
  }
  return renderProject();
}

export default memo(Project, () => true);
