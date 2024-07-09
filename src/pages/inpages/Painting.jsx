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
import '../../styles/Digital.css'

const images = [
  Image15,
  Image12,
  Image9,
  Image11,
  Image5,
  Image6,
  Image7,
  Image1,
  Image2,
  Image3,
  Image4,
  Image8,
  Image10,
  Image13,
  Image14,
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
              color: "#34A1CD",
            }}
          >
            Painting
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

export default Painting;
