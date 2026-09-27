import { memo } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TechChips from "components/Projects/TechChips";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { lime } from "@material-ui/core/colors";
import StarsIcon from "@material-ui/icons/Stars";

import { useDarkMode } from "context/themeContext";

import { ProjectType } from "lib/projects";
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
  special,
}: AppProps) {
  const theme = useTheme();
  const odd = index % 2 === 1 ? true : false;
  const darkMode = useDarkMode();
  const colorLight = "#dfffdc";
  const colorDark = "#070422";
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& strong": {
          // color: darkMode ? "#77f372" : "#0d9d74",
          color: darkMode ? lime.A200 : "#311b92", //theme.palette.secondary.main,
        },
        "& p": {
          marginBottom: theme.spacing(2),
        },
        backgroundColor: odd ? (darkMode ? colorDark : colorLight) : "inherit",
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
      figure: {
        margin: 0,
        marginBottom: theme.spacing(2),
      },
      chipContainer: {
        [theme.breakpoints.down("xs")]: {
          display: "flex",
          justifyContent: "space-around",
        },
        marginBottom: theme.spacing(1),
      },
      chip: {
        borderRadius: "100px",
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
          width: "50%",
        },
      },
      btnSpecial: {
        background: "linear-gradient(to right, #40e0d0 , #ff8c00, #ff0080 )",
        borderRadius: "50px",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        color: "#fff",
        // display: "inline-block",
        marginBottom: theme.spacing(2),
      },
    })
  );
  const classes = useStyles();

  const renderDescription = () => {
    const useStyles = makeStyles((_theme: Theme) =>
      createStyles({
        text: {
          "& a": {
            color: "inherit",
          },
        },
      })
    );
    const classes = useStyles();

    return (
      <div itemProp="abstract">
        {description.map((para, index) => (
          <Typography key={index} className={classes.text} gutterBottom>
            <ReactMarkdown
              renderers={{
                paragraph: "span",
                link: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {para}
            </ReactMarkdown>
          </Typography>
        ))}
      </div>
    );
  };

  const renderProject = () => (
    <article
      itemType="https://schema.org/SoftwareSourceCode"
      itemScope
      className={classes.root}
    >
      <Container className={classes.container}>
        <Typography variant="h2" align="center" gutterBottom itemProp="name">
          {title}
        </Typography>
        <Grid container>
          <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
            <Grid item md={6} xs={12} className={classes.textSide}>
              <Box className={classes.body}>
                <Box>
                  {special && (
                    <Button
                      className={classes.btnSpecial}
                      startIcon={<StarsIcon />}
                      href={special.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size={
                        useMediaQuery(theme.breakpoints.down("sm"))
                          ? "small"
                          : "medium"
                      }
                    >
                      {special.text}
                    </Button>
                  )}
                  {renderDescription()}
                </Box>
                <Box className={classes.chipContainer}>
                  {links.github && (
                    <Button
                      itemScope
                      itemProp="codeRepository"
                      className={classes.chip}
                      variant="contained"
                      color="secondary"
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
                      color="secondary"
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      size="small"
                      itemProp="url"
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
                  <Box component="figure" className={classes.figure}>
                    <Image
                      itemProp="image"
                      src={images.main.link}
                      width={images.main.width}
                      height={images.main.height}
                      quality={75}
                      priority
                      sizes="(max-width: 960px) 90vw, 40vw"
                      layout="responsive"
                      alt="project image"
                      aria-label={`image of project titled - ${title}`}
                    />
                  </Box>
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
                        objectFit: "contain",
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
    </article>
  );
  if (odd) {
    return (
      <Wave color={darkMode ? colorDark : colorLight}>{renderProject()}</Wave>
    );
  }
  return renderProject();
}

export default memo(Project, () => true);
