import React from "react";
import { FaLinkedin, FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center mt-3">
          <h1
            style={{
              fontWeight: "bolder",
              fontFamily: "var(--font-poppins)",
              color: "#34A1CD",
            }}
          >
            Projects
          </h1>
          <p className="line-class">
            I have worked on a wide range of projects. Here are some of my Projects.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {[
            { id: 1, title: "Digital Arts", link: "/projects/digital" },
            { id: 2, title: "Drawing Arts", link: "/projects/drawing" },
            { id: 3, title: "Miniature", link: "/projects/miniature" },
            { id: 4, title: "Painting", link: "/projects/painting" },
            { id: 5, title: "Photography", link: "/projects/photograph" },
            { id: 6, title: "Print making", link: "/projects/printmaking" },
            { id: 7, title: "Sculpture", link: "/projects/sculpture" },
            { id: 8, title: "Developement", link: "/projects/developement" },
          ].map((accordion) => (
            <div key={accordion.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="accordion mt-lg-3 mt-5" id={`accordionExample${accordion.id}`}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${accordion.id}`}
                      aria-expanded="true"
                      aria-controls={`collapse${accordion.id}`}
                    >
                      {accordion.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${accordion.id}`}
                    className="accordion-collapse collapse show"
                    data-bs-parent={`#accordionExample${accordion.id}`}
                  >
                    <div className="accordion-body d-flex justify-content-center">
                      <Link to={accordion.link}>
                        <button className="btn btn-outline-primary">
                          {accordion.title}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Projects;
