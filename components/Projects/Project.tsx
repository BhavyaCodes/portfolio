import { useMemo, useContext } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TechChips from "components/Projects/TechChips";

import { DarkModeContext } from "context/themeContext";

type AppProps = {
  index: number;
  title: string;
  description: string[];
  image?: string;
  stack?: { label: string; logo: string; invert?: boolean }[];
};

function Project({ index, title, description, image, stack }: AppProps) {
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
      // image: {
      //   width: "100% !important",
      // },
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
            <TechChips
              stack={useMemo(() => {
                return stack;
              }, [darkMode])}
            />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
          <Grid item md={6} xs={12}>
            {/* <img className={classes.image} src={image} /> */}
            {image && (
              <Box className={classes.imageContainer}>
                <Image
                  src={image}
                  width={1903}
                  height={894}
                  quality={100}
                  layout="responsive"
                />
              </Box>
            )}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Project;

// {image && (
//   <Image
//     className={classes.image}
//     src={image}
//     objectFit="contain"
//     layout="fill"
//   />
// )}
