import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/printmaking/0 (1).jpg";
import Image2 from "../../assets/printmaking/0 (2).jpg";
import Image3 from "../../assets/printmaking/0 (3).jpg";
import Image4 from "../../assets/printmaking/0 (4).jpg";
import Image5 from "../../assets/printmaking/0 (5).jpg";
import Image6 from "../../assets/printmaking/0 (6).jpg";
import Image7 from "../../assets/printmaking/0 (7).jpg";
import Image8 from "../../assets/printmaking/0 (8).jpg";
import Image9 from "../../assets/printmaking/0 (9).jpg";
import Image10 from "../../assets/printmaking/0 (10).jpg";
import Image11 from "../../assets/printmaking/0 (11).jpg";
import '../../styles/Digital.css'

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
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

export default Printmaking;
