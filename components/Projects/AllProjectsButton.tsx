import { Container, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Link from "next/link";

function AllProjectsButton() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Link href="/projects" passHref>
        <Button
          style={{ marginTop: "5rem" }}
          component="a"
          color="secondary"
          size="large"
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
        >
          View All Projects
        </Button>
      </Link>
    </Container>
  );
}

export default AllProjectsButton;
