import { Container, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Link from "next/link";

function BackHomeButton() {
  return (
    <Container style={{ textAlign: "center", paddingBottom: "8rem" }}>
      <Link href="/" passHref>
        <Button
          style={{ marginTop: "5rem" }}
          component="a"
          color="secondary"
          size="large"
          href="/"
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
        >
          Go back home
        </Button>
      </Link>
    </Container>
  );
}

export default BackHomeButton;
