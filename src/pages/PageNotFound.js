import { useNavigate } from "react-router-dom";
import "../styles/notfound.css"

function PageNotFound() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    console.log("Back to Home");
    navigate("/");
  };

  return (
    <div className="display">
      <div className="display__img">
        <img
          src={require("../assets/images/gojo.png")}
          alt="404-Scarecrow"
        />
      </div>
      <div className="display__content">
        <h1 className="display__content--info text-white">I have bad news for you</h1>
        <p className="display__content--text text-white">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button label="Back to Home" handleClick={navigateToHome} ></button>
      </div>
    </div>
  );
}

export default PageNotFound;
