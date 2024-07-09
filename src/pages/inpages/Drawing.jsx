import React from "react";
import Navbar from "../../components/Navbar";
import '../../styles/Digital.css'
import Image1 from "../../assets/drawing/1.jpg";
import Image2 from "../../assets/drawing/2.jpg";
import Image3 from "../../assets/drawing/3.jpg";
import Image4 from "../../assets/drawing/4.jpg";
import Image5 from "../../assets/drawing/5.jpg";
import Image6 from "../../assets/drawing/6.jpg";
import Image7 from "../../assets/drawing/7.jpg";
import Image8 from "../../assets/drawing/8.jpg";
import Image9 from "../../assets/drawing/9.jpg";
import Image10 from "../../assets/drawing/10.jpg";
import Image11 from "../../assets/drawing/11.jpg";
import Image12 from "../../assets/drawing/12.jpg";
import Image13 from "../../assets/drawing/13.jpg";
// import Image14 from "../../assets/drawing/1";
import Image15 from "../../assets/drawing/15.jpg";
import Image16 from "../../assets/drawing/16.jpg";
import Image17 from "../../assets/drawing/17.jpg";
import Image18 from "../../assets/drawing/18.jpg";
import Image19 from "../../assets/drawing/19.jpg";
import Image20 from "../../assets/drawing/20.jpg";
import Image21 from "../../assets/drawing/21.jpg";
import Image22 from "../../assets/drawing/IMG_22.jpg";
import Image23 from "../../assets/drawing/IMG_23.jpg";
import Image24 from "../../assets/drawing/IMG_24.jpg";
import Image25 from "../../assets/drawing/IMG_25.jpg";
import Image26 from "../../assets/drawing/IMG_26.jpg";
import Image27 from "../../assets/drawing/IMG_27.jpg";
import Image28 from "../../assets/drawing/IMG_28.jpg";
import Image29 from "../../assets/drawing/IMG_4838.JPG.jpg";
import Image30 from "../../assets/drawing/IMG_4839.JPG.jpg";

const images = [
  Image5,
  Image6,
  Image7,
  Image29,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image13,
  Image27,
  Image28,
  Image30,
  Image1,
  Image2,
  Image3,
  Image4,
];

const Drawing = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="text-center">
          <h2 style={{ fontWeight: "bolder", fontFamily: "var(--font-poppins)", color: "#34A1CD" }}>Drawing Arts</h2>
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

export default Drawing;
