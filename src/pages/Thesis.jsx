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
  { src: Image2, description: "Untitled - II ", title: "Gouache on Wasli" , size: "11” ×14”"},
  { src: Image10, description: "Carving Our Own Path ", title: "Gouache on Wasli" , size : "20” × 30”"},
  { src: Image7, description: "Nothing is Futile", title: "Gouache on Wasli", size : " 14” × 22”" },
  { src: Image3, description: "Untitled - III", title: "Gouache on Wasli" , size : "11” ×14”"},
  { src: Image6, description: "Untitled - V", title: "Gouache on Wasli" , size : " 14” ×22”"},
  { src: Image4, description: "Untitled - VI", title: "Gouache on Wasli" , size : "14” ×22”"},
  { src: Image8, description: "Untitled X", title: "Gouache on Wasli" , size : "11”×14”" },
  { src: Image1, description: "Untitled IX", title: "Gouache on Wasli" , size  : "18”×21”"},
  { src: Image5, description: "Untitled - VI", title: "Gouache on Wasli" , size : "14” ×22”"},
  { src: Image9, description: "Untitled - VIII", title: "Gouache on Wasli" , size : "20” ×30”"},
  { src: Image12, description: "Untitled - VII", title: "Gouache on Wasli"  , size : "14” ×22"},
  { src: Image11, description: "Untitled XI", title: "Gouache on Wasli" , size : "11”×14”" },
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
              color: "Black",
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
                  <p className="card-title text-center">{image.description}</p>
                  <p className="card-title text-center">{image.size}</p>
                  <p className="card-text text-center">{image.title}</p>
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
