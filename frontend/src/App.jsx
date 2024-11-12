import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import "./App.css"

import { Content } from "./components/Content";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center'
}));

export const App = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%", backgroundColor: "#111" }}>
      <Container maxWidth="lg">
        <Content />
      </Container>
    </Box>
  );
}
