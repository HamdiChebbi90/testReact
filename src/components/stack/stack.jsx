import Navbar from "../navbar/navbar";
import img1 from "../../assets/slider/1.png";
import img2 from "../../assets/slider/2.png";
import img3 from "../../assets/slider/3.png";
import "./style.css";
import Marquee from "react-fast-marquee";

const Stack = () => {


  return (
    <div className="stack">
      <Navbar />
      <div className="container">
        <img src={img1} alt="1" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>

      <Marquee className="follow">
        FOLLOW FOR MORE FOLLOW FOR MORE FOLLOW FOR MORE FOLLOW FOR MORE FOLLOW
        FOR MOREFOLLOW FOR MORE FOLLOW FOR MORE
      </Marquee>
      <div className="stack__content">
        <video width="100%" height="387" controls>
          <source src="movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Stack;
