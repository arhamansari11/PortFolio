import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/painting/p1.jpg";
import Image2 from "../../assets/painting/p2.jpg";
import Image3 from "../../assets/painting/p3.jpg";
import Image4 from "../../assets/painting/p4.jpg";
import Image5 from "../../assets/painting/p5.jpg";
import Image6 from "../../assets/painting/p6.jpg";
import Image7 from "../../assets/painting/p7.jpg";
import Image8 from "../../assets/painting/p8.jpg";
import Image9 from "../../assets/painting/p9.jpg";
import Image10 from "../../assets/painting/p10.jpg";
import Image11 from "../../assets/painting/p11.jpg";
import Image12 from "../../assets/painting/p12.jpg";
import Image13 from "../../assets/painting/p13.jpg";
import Image14 from "../../assets/painting/p14.jpg";
import Image15 from "../../assets/painting/p15.jpg";
import "../../styles/Digital.css";

const paintings = [
  { src: Image9, description: "Figurative Painting", size: "6×8" },
  { src: Image11, description: "Architect View Painting", size: "4×6" },
  { src: Image12, description: "Window Painting", size: "4×6" },
  { src: Image15, description: "Mix Elements Painting", size: "6×12" },
  { src: Image5, description: "Still live Painting", size: "4×6" },
  { src: Image6, description: "Drapry", size: "3×6" },
  { src: Image7, description: "Figurative painting", size: "3×6" },
  { src: Image14, description: "House fly coffee and oil paints", size: "4×6" },
  { src: Image2, description: "Landscape Painting", size: "4×6" },
  { src: Image13, description: "Landscape painting", size: "4×8" },
  { src: Image1, description: "Mono Crome Still Life Painting", size: "3×4" },
  { src: Image8, description: "Landscape Painting", size: "4×6" },
  { src: Image3, description: "Replicate Painting", size: "3×3" },
  { src: Image4, description: "Hand Painting", size: "4×4" },
  { src: Image10, description: "Girl with a Pearl Earring ", size: "4×6" },
];

const Painting = () => {
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
            Painting
          </h2>
        </div>

        <div className="row d-flex justify-content-evenly">
          {paintings.map((painting, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={painting.src}
                  className="card-img-top img border border-1 border-black"
                  alt={`Digital Art ${index + 1}`}
                />
                <div className="card-body">
                  <p className="card-text text-center">{painting.description}</p>
                  <p className="card-text text-center">{painting.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Painting;
