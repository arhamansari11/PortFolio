import React from "react";
import Navbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import Hero from "../assets/images/Bg.jpg";
import Aqib from "../assets/images/aqib.jpg";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["A Visual Artist", "An Art Instructor", "A Sketcher", "A Painter"],
    loop: true, // Loop the words array
    typeSpeed: 120,
    deleteSpeed: 20,
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-10 col-12 order-lg-last order-md-last img-class d-flex justify-content-center align-items-center animated-element image-animation">
            <img src={Aqib} alt="" />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10 col-12 animated-element text-animation">
            <div className="height-class">
              <div className="container mt-5">
                <p className="para">Hi There !</p>
                <h1 className="heading">I'm Aqib Javed</h1>
                <h1 className="autoTyping">
                  <span>{text}</span>
                  <span>
                    <Cursor />
                  </span>
                </h1>
                <p className="pt-3 line-class">
                  I help you increase conversion and performance in every
                  possible way.
                </p>
                <Link to="/projects">
                  <button className="button">See my Work</button>
                </Link>
                <Link to="/contact">
                  <button className="button-class">Start a Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-10 col-12 img-class d-flex justify-content-center align-items-center animated-element image-animation">
            <img src={Hero} alt="" />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-10 col-12 animated-element text-animation">
            <div className="height-class">
              <div className="container mt-5">
                <p className="pt-3 line-class">
                  I am Aqib Javed. I am skilled in various artistic mediums, including sketching, painting, printmaking, sculpture, and photography.
                </p>
                <hr />
                <p className="pt-3 line-class">
                  I am proficient in creating portraits using diverse techniques and have experience as an Art Instructor, developing and implementing engaging art curricula for middle and high school students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <footer className="footer">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontFamily: "var(--font-poppins)",
                  color: "#34A1CD",
                }}
              >
                Connect with Me
              </h2>
              <div className="container-fluid">
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/aqibjarts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} color="#34A1CD" />
                  </a>
                  <a
                    href="https://www.behance.net/aqibjaved29/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBehance size={30} color="#34A1CD" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/hJo4r1aNXHGZ7Q21/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} color="#34A1CD" />
                  </a>
                  <a
                    href="https://www.instagram.com/studio_aqib_javed?igsh=MWVvcWltbWlueDJsZw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} color="#34A1CD" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
