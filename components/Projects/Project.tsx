import { useMemo, useContext } from "react";
import ReactMarkdown from "react-markdown";

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
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      image: {
        width: "100%",
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
          <Grid item md={6} xs={12}>
            {renderDescription()}
            <TechChips
              stack={useMemo(() => {
                return stack;
              }, [darkMode])}
            />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
          <Grid item md={6} xs={12}>
            <img className={classes.image} src={image} />
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Project;
