import React from "react";
import { FaLinkedin, FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="about pt-3">
          <h2
            style={{
              fontWeight: "bolder",
              fontFamily: "var(--font-poppins)",
              color: "#34A1CD",
            }}
          >
            About Me
          </h2>
          <p className="line-class">
            I am Aqib Javed. I am skilled in various artistic mediums, including
            sketching, painting, printmaking, sculpture, and photography. I am
            proficient in creating portraits using diverse techniques and have
            experience as an Art Instructor, developing and implementing
            engaging art curricula for middle and high school students.
          </p>
          <hr />
          <p className="line-class">
            A detail-oriented Fine Arts graduate with expertise in miniature
            painting and recognition for distinction in the Final Year Project.
            As a previous Interior Design Intern, I contributed to space
            planning, furniture selection, and practical project management
            skills.
          </p>
          <hr />
          <p className="line-class">
            From 2019 to 2023, I collaborated on life-size sculptures and
            organized workshops at the University of Gujrat, gaining valuable
            teamwork skills. I achieved 3rd place in the Street Art Pakistan
            competition in 2020 and interned as an interior designer. In 2021, I
            secured 2nd place in a district-level wall painting contest and
            contributed to the success of our annual party. My art has been
            featured in exhibitions at VM Art Gallery Karachi, O Art Space
            Lahore, Gallery 6 Islamabad, and Lahore Arts Council Alhamra.
            Notably, I have participated in public collections, including the
            18th Emerging Talent at VM Art Gallery Karachi, the 19th ARRIVING at
            Alhamra Art Council Lahore, O Art Space Lahore, and Gallery 6
            Islamabad.
          </p>
          <hr />
        </div>
        <div className="education">
          <h2
            style={{
              fontWeight: "bolder",
              fontFamily: "var(--font-poppins)",
              color: "#34A1CD",
            }}
          >
            Education
          </h2>
          <ul style={{ fontFamily: "var(--font-poppins)" }}>
            <li>
              <span style={{ fontWeight: "bolder" }}>Sep 2018 - Nov 2022</span>
              <h2 style={{ fontFamily: "var(--font-poppins)" }}>
                Bachelor of Fine Arts - BFA (Miniature Painting)
              </h2>
              <p
                style={{ fontFamily: "var(--font-poppins)" }}
                className="line-class"
              >
                University of Gujrat
              </p>
            </li>
          </ul>
        </div>
      </div>
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
    </>
  );
};

export default About;
