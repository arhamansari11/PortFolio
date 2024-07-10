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
  Image22,
  Image23,
  Image7, 
  Image18,

  Image4,
  Image28,
  Image5,
  Image16,
  
  
  
  Image14,
  Image17,
  Image19,
  Image20,
  
  
  Image29,
  Image21,
  Image6,
  Image24,
  
  Image12,
  Image2,
  Image10,
  Image11,
  

  Image1,
  Image25,
  Image8,
  Image9,
  
  

  
  
  
  
  Image26,
  Image13,
  Image27,
];

const Developement = () => {
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
            Developement
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

export default Developement;
