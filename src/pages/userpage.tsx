import React, { useState } from "react";
import { PostUser } from "../hooks/userapi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Select from "react-select";
import { useFormik } from "formik";

const Userpage = () => {
  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: 0,
      email: "",
      gender: options[0].value,
    },
    onSubmit: async (values) => {
      const result = await PostUser(values);
      setResponseStatus(result);
    },
  });

  return (
    <Container>
      <Typography variant="h3">Login Account</Typography>
      <form onSubmit={formik.handleSubmit}>
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
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
          <TextField
            label="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
          <TextField
            label="address"
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            required
          />
          <TextField
            label="contact"
            type="number"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            required
          />

          <Select
            options={options}
            defaultValue={options[0]}
            name="gender"
            isSearchable={false}
            onChange={(option) => formik.setFieldValue("gender", option?.value)}
          />
          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </form>
      {responseStatus && <p>{responseStatus}</p>}
    </Container>
  );
};

export default Userpage;
