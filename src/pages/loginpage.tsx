import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import LoginApi from "../hooks/loginapi";

const LoginPage = () => {
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  return (
    <Container>
      <Typography variant="h3">Register Account</Typography>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const result = await LoginApi(values);
          console.log(result);
          setResponseStatus(result);
          resetForm();
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
