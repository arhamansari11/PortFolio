import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Digital.css";
import Image1 from "../../assets/development/1 (1).jpg";
import Image2 from "../../assets/development/1 (2).jpg";
import Image3 from "../../assets/development/1 (3).JPG";
import Image4 from "../../assets/development/1 (4).jpg";
import Image5 from "../../assets/development/1 (5).jpg";
import Image6 from "../../assets/development/1 (6).jpg";
import Image7 from "../../assets/development/1 (7).jpg";
import Image8 from "../../assets/development/1 (8).jpg";
import Image9 from "../../assets/development/1 (9).jpg";
import Image10 from "../../assets/development/1 (10).jpg";
import Image11 from "../../assets/development/1 (11).jpg";
import Image12 from "../../assets/development/1 (12).jpg";
import Image13 from "../../assets/development/1 (13).jpg";
import Image14 from "../../assets/development/1 (14).jpg";
// import Image15 from "../../assets/development/1 (15).jpg";
import Image16 from "../../assets/development/1 (16).jpg";
import Image17 from "../../assets/development/1 (17).jpg";
import Image18 from "../../assets/development/1 (18).jpg";
import Image19 from "../../assets/development/1 (19).jpg";
import Image20 from "../../assets/development/1 (20).jpg";
import Image21 from "../../assets/development/1 (21).jpg";
import Image22 from "../../assets/development/1 (22).jpg";
import Image23 from "../../assets/development/1 (23).jpg";
import Image24 from "../../assets/development/1 (24).jpg";
import Image25 from "../../assets/development/1 (25).jpg";
import Image26 from "../../assets/development/1 (26).png";
import Image27 from "../../assets/development/1 (27).png";
import Image28 from "../../assets/development/IMG_468y.jpg";
import Image29 from "../../assets/development/IMG_4501.JPG";
// import Image28 from "../../""

const images = [
  { src: Image22, size: '15 / 30 ', description: 'Wing Developement' },
  { src: Image23, size: '15 / 30', description: 'Destraction' },
  { src: Image7, size: '15 / 30', description: 'Complication Of Mind,mix media' },
  { src: Image18, size: '15 / 30', description: 'Head of Fly' },

  { src: Image4, size: '15 / 30', description: 'Collage Work' },
  { src: Image28, size: '15 / 30', description: 'Marbelling on Paper' },
  { src: Image5, size: '15 / 30', description: 'Carving Our Own Path, spray and water color' },
  { src: Image16, size: '15 / 30', description: 'Thought Process' },

  { src: Image14, size: '15 / 30', description: 'Fly Illusion ' },
  { src: Image17, size: '15 / 30', description: 'Action Technique on Paper' },
  { src: Image19, size: '15 / 30', description: 'Pipes with Element' },
  { src: Image20, size: '15 / 30', description: 'Collage Work on Fly' },

  { src: Image29, size: '15 / 30', description: 'Imagination, water pastle color' },
  { src: Image21, size: '15 / 30', description: 'UnTitle' },
  { src: Image6, size: '15 / 30', description: 'Wings of world,water and pencil colors' },
  { src: Image24, size: '15 / 30', description: 'In Large Wing' },

  { src: Image12, size: '15 / 30', description: 'Rope on paper' },
  { src: Image2, size: '15 / 30', description: 'Connectivity' },
  { src: Image10, size: '15 / 30', description: 'In Large Chain' },
  { src: Image11, size: '15 / 30', description: 'Screw Drive' },

  { src: Image1, size: '15 / 30', description: 'In Large Rope' },
  { src: Image25, size: '15 / 30', description: 'Actual Size Wing' },
  { src: Image8, size: '15 / 30', description: 'In Large Screw' },
  { src: Image9, size: '15 / 30', description: 'In Large' },

  { src: Image26, size: '15 / 30', description: 'Connectivity with society,coffee and water color on canvas' },
  { src: Image13, size: '15 / 30', description: 'Illusion, pencil and water' },
  { src: Image3, size: '15 / 30', description: 'Eye Study Water Colors' },
  { src: Image27, size: '20 / 40', description: 'Elements project,Mix media' },
];

const Development = () => {
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
            Development
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
                  alt={`Development ${index + 1}`}
                />
                <div className="card-body">
                  <p className="card-text text-center">{image.description}</p>
                  <p className="card-text text-center">{image.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Development;
