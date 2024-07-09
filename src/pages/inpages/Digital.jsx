import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/digitalart/1.jpg";
import Image2 from "../../assets/digitalart/2.jpg";
import Image3 from "../../assets/digitalart/3.jpg";
import Image4 from "../../assets/digitalart/4.jpg";
import Image5 from "../../assets/digitalart/5.jpg";
import Image6 from "../../assets/digitalart/6.jpg";
import Image8 from "../../assets/digitalart/8.jpg";
import Image9 from "../../assets/digitalart/9.jpg";
import Image10 from "../../assets/digitalart/10.jpg";
import Image11 from "../../assets/digitalart/11.jpg";
import Image12 from "../../assets/digitalart/12.jpg";
import Image13 from "../../assets/digitalart/13.jpg";
import Image14 from "../../assets/digitalart/14.jpg";
import Image15 from "../../assets/digitalart/15.jpg";
import Image17 from "../../assets/digitalart/17.jpg";
import '../../styles/Digital.css'

const images = [
  { src: Image10, description: "Description for Image 10" },
  { src: Image8, description: "Description for Image 8" },
  { src: Image11, description: "Description for Image 11" },
  { src: Image14, description: "Description for Image 14" },
  { src: Image15, description: "Description for Image 15" },
  { src: Image6, description: "Description for Image 6" },
  { src: Image13, description: "Description for Image 13" },
  { src: Image5, description: "Description for Image 5" },
  { src: Image17, description: "Description for Image 17" },
  { src: Image4, description: "Description for Image 4" },
  { src: Image12, description: "Description for Image 12" },
  { src: Image9, description: "Description for Image 9" },
  { src: Image1, description: "Description for Image 1" },
  { src: Image2, description: "Description for Image 2" },
  { src: Image3, description: "Description for Image 3" },
];

const Digital = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="text-center">
          <h2 style={{ fontWeight: "bolder", fontFamily: "var(--font-poppins)", color: "#34A1CD" }}>Digital Arts</h2>
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

export default Digital;
