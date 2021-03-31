import {
  Typography,
  Toolbar,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

function Title({ text }: { text: string }) {
  const theme = useTheme();
  return (
    <>
      <Toolbar id="projects" />
      <Container>
        <Typography
          variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h1" : "h2"}
          component="h2"
          align="center"
          style={{
            fontWeight: useMediaQuery(theme.breakpoints.up("sm"))
              ? theme.typography.fontWeightLight
              : theme.typography.fontWeightRegular,
          }}
        >
          {text}
        </Typography>
      </Container>
    </>
  );
}

export default Title;
