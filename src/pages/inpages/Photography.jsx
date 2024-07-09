import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/photography/1 (1).jpg";
import Image2 from "../../assets/photography/1 (2).jpg";
import Image3 from "../../assets/photography/1 (3).jpg";
import Image4 from "../../assets/photography/1 (4).jpg";
import Image5 from "../../assets/photography/1 (5).jpg";
import Image6 from "../../assets/photography/1 (6).jpg";
import Image7 from "../../assets/photography/1 (7).jpg";
import Image8 from "../../assets/photography/1 (8).jpg";
import Image9 from "../../assets/photography/1 (9).jpg";
import Image10 from "../../assets/photography/1 (10).jpg";
import Image11 from "../../assets/photography/1 (11).jpg";
import Image12 from "../../assets/photography/1 (12).jpg";
import Image13 from "../../assets/photography/1 (13).jpg";
import Image14 from "../../assets/photography/1 (14).jpg";
import Image15 from "../../assets/photography/1 (15).jpg";
import Image16 from "../../assets/photography/1 (16).jpg";
import Image17 from "../../assets/photography/1 (17).jpg";
import Image18 from "../../assets/photography/1 (18).jpg";
import Image19 from "../../assets/photography/1 (19).jpg";
import Image20 from "../../assets/photography/1 (20).jpg";
import '../../styles/Digital.css'
const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
];

const Photograph = () => {
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
            Photo Graphy
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
                  src={image}
                  className="card-img-top img border border-1 border-black"
                  alt={`Digital Art ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photograph;
