import Button from "../components/button";
import Image from "../components/image";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__main-container">
        <div className="main-container__left-container">
          <h1 className="left-container__heading">
            Grow your Skills, define your future
          </h1>
          <p className="left-container__paragraph">
            Presenting Academy, the tech school of the future. We teach you the
            right skills to be prepared for tomorrow.
          </p>
          <div className="left-container__btn-container">
            <Button
              btnText="EXPLORE COURSES"
              btnSX={{ backgroundColor: "blue", color: "white" }}
            />
            <Button btnText="LEARN MORE" />
          </div>
        </div>
      

      <div className="main-container__right-container">
        <Image
          src="src/assets/vase.jpg"
          alt="a vase"
          imgSX={{ height: "30rem", width: "25rem", borderRadius: "5%" }}
        />
      </div>
    </div>
    </div>
  );
};

export default Homepage;
