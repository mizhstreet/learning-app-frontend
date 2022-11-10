import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Header } from "../components/header/Header";

const MyCourse: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box mt={2}>
          <Typography sx={{ mb: 2 }} variant="h1">
            My learning
          </Typography>
          <Typography variant="body1">
            Dont forget to learn and get better everyday!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export { MyCourse };
