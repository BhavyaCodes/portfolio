import { Grid, Box, Typography } from "@material-ui/core";
import Linkify from "react-linkify";

type AppProps = {
  index: number;
  title: string;
  description: string;
};

function Project({ index, title, description }: AppProps) {
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
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
          <Grid item md={6} xs={12}>
            image here
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Project;
