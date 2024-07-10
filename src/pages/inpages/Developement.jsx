import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Digital.css";
import Image1 from "../../assets/development/1 (1).jpg";
import Image2 from "../../assets/development/1 (2).jpg";
// import Image3 from "../../assets/development/";
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
  { src: Image22, size: '2x3', description: 'Development 22 description' },
  { src: Image23, size: '3x4', description: 'Development 23 description' },
  { src: Image7, size: '15 / 30', description: 'Complication Of Mind,mix media' },
  { src: Image18, size: '5x6', description: 'Development 18 description' },

  { src: Image4, size: '6x7', description: 'Development 4 description' },
  { src: Image28, size: '7x8', description: 'Development 28 description' },
  { src: Image5, size: '15 / 30', description: 'Carving Our Own Path, spray and water color' },
  { src: Image16, size: '9x10', description: 'Development 16 description' },

  { src: Image14, size: '10x11', description: 'Development 14 description' },
  { src: Image17, size: '11x12', description: 'Development 17 description' },
  { src: Image19, size: '12x13', description: 'Development 19 description' },
  { src: Image20, size: '13x14', description: 'Development 20 description' },

  { src: Image29, size: '15 / 30', description: 'Imagination, water pastle color' },
  { src: Image21, size: '15x16', description: 'Development 21 description' },
  { src: Image6, size: '15 / 30', description: 'Wings of world,water and pencil colors' },
  { src: Image24, size: '17x18', description: 'Development 24 description' },

  { src: Image12, size: '18x19', description: 'Development 12 description' },
  { src: Image2, size: '19x20', description: 'Development 2 description' },
  { src: Image10, size: '20x21', description: 'Development 10 description' },
  { src: Image11, size: '21x22', description: 'Development 11 description' },

  { src: Image1, size: '22x23', description: 'Development 1 description' },
  { src: Image25, size: '23x24', description: 'Development 25 description' },
  { src: Image8, size: '24x25', description: 'Development 8 description' },
  { src: Image9, size: '25x26', description: 'Development 9 description' },

  { src: Image26, size: '26x27', description: 'Development 26 description' },
  { src: Image13, size: '27x28', description: 'Development 13 description' },
  { src: Image27, size: '15 / 30', description: 'connectivity with society,coffee and water color on canvas' },
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
              color: "#34A1CD",
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
                  <b className="card-text text-center">{image.description}</b>
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
