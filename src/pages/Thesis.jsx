import React from "react";
import Navbar from "../components/Navbar";
import Image1 from "../assets/thesis/01 (1).jpg";
import Image2 from "../assets/thesis/01 (2).jpg";
import Image3 from "../assets/thesis/01 (3).jpg";
import Image4 from "../assets/thesis/01 (4).jpg";
import Image5 from "../assets/thesis/01 (5).jpg";
import Image6 from "../assets/thesis/01 (6).jpg";
import Image7 from "../assets/thesis/01 (7).jpg";
import Image8 from "../assets/thesis/01 (8).jpg";
import Image9 from "../assets/thesis/01 (9).jpg";
import Image10 from "../assets/thesis/01 (10).jpg";
import Image11 from "../assets/thesis/01 (11).jpg";
import Image12 from "../assets/thesis/01 (12).jpg";
import "../styles/Digital.css"

const images = [
  { src: Image2, description: "Description for Image 2" },
  { src: Image10, description: "Description for Image 10" },
  { src: Image7, description: "Description for Image 7" },
  { src: Image3, description: "Description for Image 3" },
  { src: Image6, description: "Description for Image 6" },
  { src: Image4, description: "Description for Image 4" },
  { src: Image8, description: "Description for Image 8" },
  { src: Image1, description: "Description for Image 1" },
  { src: Image5, description: "Description for Image 5" },
  { src: Image9, description: "Description for Image 9" },
  { src: Image12, description: "Description for Image 12" },
  { src: Image11, description: "Description for Image 11" },
];

const Thesis = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="text-center">
          <h2
            style={{
              fontWeight: "bolder",
              fontFamily: "var(--font-poppins)",
              color: "#34A1CD",
            }}
          >
            Thesis
          </h2>
        </div>

        <div className="row d-flex justify-content-evenly">
          {images.map((image, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={image.src}
                  className="card-img-top img border border-1 border-black"
                  alt={`Digital Art ${index + 1}`}
                />
                <div className="card-body">
                  <p className="card-text">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thesis;
