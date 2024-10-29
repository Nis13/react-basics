import React, { useState } from "react";
import { PostUser } from "../hooks/userapi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Select, { SingleValue } from "react-select";

const Userpage = () => {
  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];
  const [data, setData] = useState({
    name: "",
    address: "",
    contact: 0,
    email: "",
    gender: options[0].value,
  });
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSelectChange = (
    gender: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    console.log(gender);
    setData({
      ...data,
      gender: gender!.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    const result = await PostUser(data);
    setResponseStatus(result);
  };

  return (
    <Container>
      <Typography variant="h3">Login Account</Typography>
      <form onSubmit={handleSubmit}>
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
            value={data.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="address"
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
            required
          />
          <TextField
            label="contact"
            type="number"
            name="contact"
            value={data.contact}
            onChange={handleChange}
            required
          />

          <Select
            options={options}
            defaultValue={options[0]}
            name="gender"
            isSearchable={false}
            onChange={handleSelectChange}
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
