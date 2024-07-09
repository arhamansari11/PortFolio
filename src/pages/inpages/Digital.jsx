import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/digitalart/1.jpg";
import Image2 from "../../assets/digitalart/2.jpg";
import Image3 from "../../assets/digitalart/3.jpg";
import Image4 from "../../assets/digitalart/4.jpg";
import Image5 from "../../assets/digitalart/5.jpg";
import Image6 from "../../assets/digitalart/6.jpg";
import Image7 from "../../assets/digitalart/7.jpg";
import Image8 from "../../assets/digitalart/8.jpg";
import Image9 from "../../assets/digitalart/9.jpg";
import Image10 from "../../assets/digitalart/10.jpg";
import Image11 from "../../assets/digitalart/11.jpg";
import Image12 from "../../assets/digitalart/12.jpg";
import Image13 from "../../assets/digitalart/13.jpg";
import Image14 from "../../assets/digitalart/14.jpg";
import Image15 from "../../assets/digitalart/15.jpg";
import Image16 from "../../assets/digitalart/16.jpg";
import Image17 from "../../assets/digitalart/17.jpg";
import Image18 from "../../assets/digitalart/18.jpg";

const images = [
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image1,
  Image2,
  Image3,
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
              {/* <div className="card" style={{ width: "18rem" }}> */}
                <img
                  src={image}
                  className="card-img-top img border-3"
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

export default Digital;
