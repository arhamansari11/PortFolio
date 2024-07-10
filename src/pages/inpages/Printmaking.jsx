import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/printmaking/123 (1).jpg";
import Image2 from "../../assets/printmaking/123 (2).png";
import Image3 from "../../assets/printmaking/123 (3).jpg";
import Image4 from "../../assets/printmaking/123 (4).jpg";
import Image5 from "../../assets/printmaking/123 (5).jpg";
import Image6 from "../../assets/printmaking/123 (6).jpg";
import Image7 from "../../assets/printmaking/123 (7).jpg";
import Image8 from "../../assets/printmaking/123 (8).jpg";
import Image9 from "../../assets/printmaking/123 (9).jpg";
import Image10 from "../../assets/printmaking/123 (10).jpg";
import Image11 from "../../assets/printmaking/123 (11).jpg";
import Image12 from "../../assets/printmaking/123 (12).png";
import Image13 from "../../assets/printmaking/123 (13).jpg";
import Image14 from "../../assets/printmaking/123 (14).png";
import Image15 from "../../assets/printmaking/123 (15).png";
import Image16 from "../../assets/printmaking/123 (16).png";
import '../../styles/Digital.css'

const images = [

  Image10,
  Image4,
  Image13,
  Image14,

  Image7,
  Image6,
  Image15,  
  Image9,
  
  Image1,
  Image11,
  Image12,
  Image8,
  
  Image2,
  Image16,
];

const Printmaking = () => {
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
            Print Making
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
                  alt={`Printmaking ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Printmaking;
