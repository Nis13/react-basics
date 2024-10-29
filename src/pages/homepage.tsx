import { Box } from "@mui/material";
import Button from "../components/button";
import Image from "../components/image";

const Homepage = () => {
  return (
    <Box className="homepage">
      <Box className="homepage__main-container">
        <Box className="main-container__left-container">
          <h1 className="left-container__heading">
            Grow your Skills, define your future
          </h1>
          <p className="left-container__paragraph">
            Presenting Academy, the tech school of the future. We teach you the
            right skills to be prepared for tomorrow.
          </p>
          <Box className="left-container__btn-container">
            <Button
              btnText="EXPLORE COURSES"
              btnSX={{ backgroundColor: "blue", color: "white" }}
            />
            <Button btnText="LEARN MORE" />
          </Box>
        </Box>

        <Box className="main-container__right-container">
          <Image
            src="src/assets/vase.jpg"
            alt="a vase"
            imgSX={{ height: "30rem", width: "25rem", borderRadius: "5%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
