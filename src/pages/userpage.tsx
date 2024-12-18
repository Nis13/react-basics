import { useState } from "react";
import { PostUser } from "../hooks/postuserapi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Select from "react-select";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import GetUserpage from "./getuserpage";
import { useMutation, useQueryClient } from "react-query";

const Userpage = () => {
  // const { fetchUser } = GetUserApi();
  const queryClient = useQueryClient();
  const mutation = useMutation(PostUser, {
    onSuccess: () => queryClient.invalidateQueries("user"),
  });
  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is Required"),
    email: Yup.string()
      .email("should be in email format eg: abc@mail.com")
      .required("Email is Required"),
    gender: Yup.string(),
    contact: Yup.string()
      .required("Required")
      .matches(/^[0-9+]*$/, "Phone numbers can only contain numbers and +")
      .min(10, "Phone number must be Minimum 10 Digits")
      .max(10, "Phone number must be Maximum 10 Digits"),
  });

  return (
    <>
      <Container>
        <Typography variant="h3">Register Account</Typography>
        <Formik
          initialValues={{
            name: "",
            address: "",
            contact: "",
            email: "",
            gender: options[0].value,
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, { resetForm }) => {
            // const result = await PostUser(values);
            mutation.mutate(values);
            // setResponseStatus(result);
            resetForm();
          }}
        >
          {(props) => {
            const {
              values,
              setFieldValue,
              handleChange,
              errors,
              touched,
              isSubmitting,
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
                    label="address"
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                  {errors.address && touched.address ? (
                    <Box color={"red"}>{errors.address}</Box>
                  ) : null}

                  <TextField
                    label="contact"
                    type="number"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                  />
                  {errors.contact && touched.contact ? (
                    <Box color={"red"}>{errors.contact}</Box>
                  ) : null}

                  <Select
                    options={options}
                    defaultValue={options[0]}
                    name="gender"
                    isSearchable={false}
                    onChange={(option) =>
                      setFieldValue("gender", option?.value)
                    }
                  />
                  {errors.gender && touched.gender ? (
                    <Box color={"red"}>{errors.gender}</Box>
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
      <Container>
        <GetUserpage />
      </Container>
    </>
  );
};

export default Userpage;
