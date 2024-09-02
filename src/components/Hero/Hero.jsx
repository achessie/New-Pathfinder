import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-items">
        <h1 className="hero-header">Road To Organized Learning</h1>

        <p className="hero-description">
          We provide tools that enable our users find optimal and personalized study paths.{" "}
          <br /> Start today win tommorrow
        </p>

        <div className="get-started-container">
          <Link to="/get-started">
            <button>Register</button>
          </Link>
          <Link to="/input">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
