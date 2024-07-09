import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/miniature/IMG_1.jpg";
import Image2 from "../../assets/miniature/IMG_2.jpg";
import Image3 from "../../assets/miniature/IMG_3.jpg";
import Image4 from "../../assets/miniature/IMG_4.jpg";
import Image5 from "../../assets/miniature/IMG_5.jpg";
import Image6 from "../../assets/miniature/IMG_8.jpg";
import Image7 from "../../assets/miniature/IMG_9.jpg";
import Image8 from "../../assets/miniature/IMG_10.jpg";
import Image9 from "../../assets/miniature/IMG_11.jpg";
import Image11 from "../../assets/miniature/IMG_13.jpg";
import Image12 from "../../assets/miniature/IMG_14.jpg";
import Image13 from "../../assets/miniature/IMG_15.jpg";
import Image14 from "../../assets/miniature/IMG_16.jpg";
import Image15 from "../../assets/miniature/IMG_17.jpg";
import Image16 from "../../assets/miniature/IMG_29.jpg";
import Image17 from "../../assets/miniature/7.jpg";
import Image18 from "../../assets/miniature/1716364176936 - Copy.jpg";
import '../../styles/Digital.css'

const images = [
  { src: Image8, description: "Description for Image 8" },
  { src: Image6, description: "Description for Image 6" },
  { src: Image12, description: "Description for Image 12" },
  { src: Image18, description: "Description for Image 18" },
  { src: Image7, description: "Description for Image 7" },
  { src: Image16, description: "Description for Image 16" },
  { src: Image11, description: "Description for Image 11" },
  { src: Image9, description: "Description for Image 9" },
  { src: Image3, description: "Description for Image 3" },
  { src: Image5, description: "Description for Image 5" },
  { src: Image4, description: "Description for Image 4" },
  { src: Image2, description: "Description for Image 2" },
  { src: Image17, description: "Description for Image 17" },
  { src: Image15, description: "Description for Image 15" },
  { src: Image1, description: "Description for Image 1" },
];

const Miniature = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="text-center">
          <h2 style={{ fontWeight: "bolder", fontFamily: "var(--font-poppins)", color: "#34A1CD" }}>Miniature Arts</h2>
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
                  alt={`Miniature Art ${index + 1}`}
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

export default Miniature;
