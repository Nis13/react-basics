import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { SignupApi } from "../hooks/signupapi";

const SignupPage = () => {
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("should be in email format eg: abc@mail.com")
      .required("Email is Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  return (
    <Container>
      <Typography variant="h3">Register Account</Typography>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async (values, { resetForm }) => {
          const result = await SignupApi(values);
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
                  label="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <Box color={"red"}>{errors.name}</Box>
                ) : null}

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

export default SignupPage;
