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
import Image15 from "../../assets/photography/1 (15).jpg";
import Image16 from "../../assets/photography/1 (16).jpg";
import Image17 from "../../assets/photography/1 (17).jpg";
import Image18 from "../../assets/photography/1 (18).jpg";
import Image19 from "../../assets/photography/1 (19).jpg";
import Image20 from "../../assets/photography/1 (20).jpg";
import "../../styles/Digital.css";

const photographs = [
  { src: Image15, description: "Product Brand (The Boss)" },
  { src: Image11, },
  { src: Image12, },
  { src: Image13, },
  { src: Image1, description: "Live Flowers Shoot" },
  { src: Image2, },
  { src: Image3 },
  { src: Image4, },
  { src: Image7, description: "Tree Shoot " },
  { src: Image10, description: "Flower Shoot" },
  { src: Image6,description : "Tree Shoot"},
  { src: Image9, description : "Tree Shoot" },
  { src: Image18, description: "Creative Shoot" },
  { src: Image17, description: "" },
  { src: Image19, description: "" },
  { src: Image8, description: "Live Flower" },
  { src: Image5, description: "Still Live Photography" },
  { src: Image20, description: "Still Live Photography" },
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
              color: "Black",
            }}
          >
            Photography
          </h2>
        </div>

        <div className="row d-flex justify-content-evenly">
          {photographs.map((photograph, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={photograph.src}
                  className="card-img-top img border border-1 border-black"
                  alt={`Photography ${index + 1}`}
                />
                <div className="card-body">
                  <p className="card-text">{photograph.description}</p  >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photograph;
