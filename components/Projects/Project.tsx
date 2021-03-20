import { Grid, Box } from "@material-ui/core";

type AppProps = {
  index: number;
};

function Project({ index }: AppProps) {
  return (
    <Grid container>
      <Box clone order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
        <Grid item md={6} xs={12}>
          text here
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
        <Grid item md={6} xs={12}>
          image here
        </Grid>
      </Box>
    </Grid>
  );
}

export default Project;
