import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        404: Not Found Page
        <Link to="/">
          <Button color="secondary">Return to Homepage</Button>
        </Link>
      </Typography>
    </Container>
  );
};

export default Notfoundpage;
