import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import LoginApi from "../hooks/loginapi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const LoginPage = () => {
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setToken } = useAuth();
  return (
    <Container>
      <Typography variant="h3">Login</Typography>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
        onSubmit={async (values) => {
          const result = await LoginApi(values, setToken);
          setResponseStatus(result ? "Login Successful" : "Login Failed");
          if (result) navigate("/blog");
        }}
      >
        {(props) => {
          const { values, handleChange, errors, touched, isSubmitting } = props;
          return (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "60%",
                  gap: "2rem",
                }}
              >
                <TextField
                  label="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <Box color={"red"}>{errors.email}</Box>
                ) : null}

                <TextField
                  label="password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <Box color={"red"}>{errors.password}</Box>
                ) : null}
                <Box>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ backgroundColor: "" }}
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
      {responseStatus && <p>{responseStatus}</p>}
    </Container>
  );
};

export default LoginPage;
