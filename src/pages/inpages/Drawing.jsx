import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Digital.css";
import Image1 from "../../assets/drawing/1.jpg";
import Image2 from "../../assets/drawing/2.jpg";
import Image3 from "../../assets/drawing/3.jpg";
import Image4 from "../../assets/drawing/4.jpg";
import Image5 from "../../assets/drawing/5.jpg";
import Image6 from "../../assets/drawing/6.jpg";
import Image7 from "../../assets/drawing/7.jpg";
import Image8 from "../../assets/drawing/8.jpg";
import Image9 from "../../assets/drawing/9.jpg";
import Image10 from "../../assets/drawing/10.jpg";
import Image11 from "../../assets/drawing/11.jpg";
import Image13 from "../../assets/drawing/13.jpg";
// import Image14 from "../../assets/drawing/1";
import Image15 from "../../assets/drawing/15.jpg";
import Image16 from "../../assets/drawing/16.jpg";
import Image17 from "../../assets/drawing/17.jpg";
import Image18 from "../../assets/drawing/18.jpg";
import Image19 from "../../assets/drawing/19.jpg";
import Image20 from "../../assets/drawing/20.jpg";
import Image21 from "../../assets/drawing/21.jpg";
import Image22 from "../../assets/drawing/IMG_22.jpg";
import Image23 from "../../assets/drawing/IMG_23.jpg";
import Image24 from "../../assets/drawing/IMG_24.jpg";
import Image26 from "../../assets/drawing/IMG_26.jpg";
import Image27 from "../../assets/drawing/IMG_27.jpg";
import Image28 from "../../assets/drawing/IMG_28.jpg";
import Image29 from "../../assets/drawing/IMG_4838.JPG.jpg";
import Image30 from "../../assets/drawing/IMG_4839.JPG.jpg";

const images = [
  { src: Image11, description: "Side Pose Live Potrait" },
  { src: Image5, description: "Front Live Potrait" },
  { src: Image10, description: "Pencil Potrait" },
  { src: Image9, description: "Copy Work" },
  { src: Image6, description: "Left Side Live Potrait" },
  { src: Image8, description: "3 / 4 Potrait" },
  { src: Image29, description: "Pencil Potrait" },
  { src: Image7, description: "Profile Potrait Right Side" },
  { src: Image4, description: "Hand Practice" },
  { src: Image15, description: "Tree Pencil Sketch" },
  { src: Image3, description: "Ear Study" },
  { src: Image2, description: "Eye Study" },
  { src: Image21, description: "Live View Drawing(BallPoint)" },
  { src: Image22, description: "Still Live Drawing (Water Color) " },
  { src: Image23, description: "Live View Drawing(BallPoint) " },
  { src: Image18, description: "Still Live Drawing(Pastel Colors)" },
  { src: Image24, description: "Still Live Drawing(Water Colors)" },
  { src: Image19, description: "Still Live Drawing (Pencil)" },
  { src: Image16, description: "Still Live Drawing (ContePencil)" },
  { src: Image17, description: "Still Live Drawing (Pastel)" },
  { src: Image28, description: "Still Live Drawing (Pastel)" },
  { src: Image13, description: "Copy Work (Pencil Drawing)" },
  { src: Image27, description: "Still Live Drawing (Water Color)" },
  { src: Image20, description: "Still Live Drawing (BallPoint)" },
  { src: Image26, description: "Still Live Drawing (Texture)" },
  { src: Image30, description: "Copy Work (CharCoal)" },
  { src: Image1, description: "Skll Study" },
];

const Drawing = () => {
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
            Drawing Arts
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
                  alt={`Drawing Art ${index + 1}`}
                />
                <div className="card-body">
                  <b className="card-text">{image.description}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drawing;
