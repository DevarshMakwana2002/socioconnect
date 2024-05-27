import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width="50%"
        backgroundColor={theme.palette.background.alt}
        margin="2rem auto"
        borderRadius="1.5rem"
        padding="2rem"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
