import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

function Skills() {
  return (
    <Box mt={5}>
      <Grid container>
        <Grid xs={12} md={6} item>
          some svg here
        </Grid>
        <Grid xs={12} md={6} item>
          <Typography variant="h2">My Tech Stack</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
