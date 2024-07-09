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
  Image12,
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
              color: "#34A1CD",
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
              {/* <div className="card"> */}
                <img
                  src={image}
                  className="card-img-top img border-2"
                  alt={`Digital Art ${index + 1}`}
                />
              </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thesis;