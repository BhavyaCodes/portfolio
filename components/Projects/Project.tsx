import Linkify from "react-linkify";

import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TechChips from "components/Projects/TechChips";

type AppProps = {
  index: number;
  title: string;
  description: string;
  image?: string;
  stack?: { label: string; logo: string; invert?: boolean }[];
};

function Project({ index, title, description, image, stack }: AppProps) {
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      image: {
        width: "100%",
      },
    })
  );
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Grid container>
        <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
          <Grid item md={6} xs={12}>
            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a
                  target="_blank"
                  href={decoratedHref}
                  key={key}
                  rel="noopener noreferrer"
                >
                  {decoratedText}
                </a>
              )}
            >
              {description}
            </Linkify>
            <TechChips stack={stack} />
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
