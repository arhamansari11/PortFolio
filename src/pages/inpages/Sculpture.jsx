import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/sculpture/01.jpg";
import Image2 from "../../assets/sculpture/02.png";
import Image3 from "../../assets/sculpture/03.jpg";
import Image4 from "../../assets/sculpture//04.png";
import Image5 from "../../assets/sculpture/05.jpg";
import Image6 from "../../assets/sculpture/06.png";
import Image7 from "../../assets/sculpture/07.jpg";
import Image8 from "../../assets/sculpture/08.png";
import Image9 from "../../assets/sculpture/09.jpg";
import Image10 from "../../assets/sculpture/10.png";
import Image11 from "../../assets/sculpture/11.jpg";
import Image12 from "../../assets/sculpture/12.png";
import Image13 from "../../assets/sculpture/13.jpg";
// import Image14 from "../../assets/sculpture/1";
import Image15 from "../../assets/sculpture/15.jpg";
import Image16 from "../../assets/sculpture/16.png";
import Image17 from "../../assets/sculpture/17.jpg";
// import Image18 from "../../assets/sculpture/18";
import Image19 from "../../assets/sculpture/19.jpg";
import Image20 from "../../assets/sculpture/20.jpg";
import Image21 from "../../assets/sculpture/21.jpg";
import Image22 from "../../assets/sculpture/22.jpg";
import Image23 from "../../assets/sculpture/23.jpg";
import Image24 from "../../assets/sculpture/24.jpg";
import Image25 from "../../assets/sculpture/25.jpg";
import Image26 from "../../assets/sculpture/26.jpg";
import Image27 from "../../assets/sculpture/27.jpg";
import '../../styles/Digital.css'

const images = [
  Image20,
  Image26,
  Image25,
  Image24,

  Image4,
  Image8,
  Image12,
  Image3,
  Image5,

  Image1,
  Image2,
  Image6,
  Image7,
  

  Image9,
  Image10,
  Image11,
  

  Image13,
//   Image14,
  Image15,
  Image17,
//   Image18,
  Image22,
  Image27,
  Image16,
  Image21,
  Image23,
  Image19,
];

const Sculpture = () => {
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
            Sculpture
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

export default Sculpture;
