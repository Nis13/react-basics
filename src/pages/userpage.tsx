import React, { useState } from "react";
import { PostUser } from "../hooks/userapi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Select from "react-select";

const Userpage = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    contact: 0,
    email: "",
  });
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await PostUser(data);
    setResponseStatus(result);
  };
  // const options = [
  //   { value: "female", label: "Female" },
  //   { value: "male", label: "Male" },
  //   { value: "other", label: "Other" },
  // ];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
            className="basic-single"
            classNamePrefix="select"
            options={options}
            defaultValue={options[0]}
            name="gender"
            isSearchable={false}
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
