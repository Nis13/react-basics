import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useSignupMutation } from "../hooks/signupmutation";
import Select from "react-select";

const SignupPage = () => {
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const { response, isLoading, isError, mutateAsync, error } =
    useSignupMutation();

  const options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
  ];

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

  if (isLoading) return <Box>Loading...</Box>;

  if (isError) return <Box>{error.message}</Box>;

  return (
    <Container>
      <Typography variant="h3">Signup</Typography>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
          role: options[0].value,
        }}
        validationSchema={signupSchema}
        onSubmit={async (values, { resetForm }) => {
          mutateAsync(values);
          setResponseStatus(response);
          resetForm();
        }}
      >
        {(props) => {
          const {
            values,
            handleChange,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
          } = props;
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

                <Select
                  options={options}
                  name="role"
                  defaultValue={options[0]}
                  isSearchable={false}
                  onChange={(option) => setFieldValue("role", option?.value)}
                />
                {errors.role && touched.role ? (
                  <Box color={"red"}>{errors.role}</Box>
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
