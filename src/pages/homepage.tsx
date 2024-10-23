import Button from "../components/button";
import Image from "../components/image";

const Homepage = () =>{
    return <div className="homepage">
        <h1>Grow your Skills, define your future</h1>
        <p>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
        <Button btnText="test" btnSX={{backgroundColor:"yellow"}}/>
        <Button btnText="test 2"/>
        <Image src="src/assets/vase.jpg" alt="a vase" imgSX={{height:"30rem",width:"20rem"}}/>
    </div>
}

export default Homepage;