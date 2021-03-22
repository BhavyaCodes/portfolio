import { useMemo, useContext, memo } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TechChips from "components/Projects/TechChips";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import { DarkModeContext } from "context/themeContext";

import { ProjectType } from "./Projects";
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
  const darkMode = useContext(DarkModeContext);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      textSide: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(1),
      },
      imageContainer: {
        width: "100%",
        position: "relative",
        padding: theme.spacing(1),
      },
      chip: {
        borderRadius: "100px",
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

  return (
    <>
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Grid container>
        <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
          <Grid item md={6} xs={12} className={classes.textSide}>
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
                  Link
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
                  Live link
                </Button>
              )}
            </Box>
            <TechChips
              stack={useMemo(() => {
                return stack;
              }, [darkMode])}
            />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
          <Grid item md={6} xs={12}>
            {images && (
              <Box className={classes.imageContainer}>
                <Image
                  src={images.main}
                  width={1903}
                  height={894}
                  quality={100}
                  layout="responsive"
                />
                <Box style={{ textAlign: "center" }}>
                  {images?.webm && (
                    <video
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      poster="/assets/Spinner-3.gif"
                      muted
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
            )}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default memo(Project);
