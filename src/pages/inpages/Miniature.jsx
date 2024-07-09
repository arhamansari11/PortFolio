import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/miniature/IMG_1.jpg";
import Image2 from "../../assets/miniature/IMG_2.jpg";
import Image3 from "../../assets/miniature/IMG_3.jpg";
import Image4 from "../../assets/miniature/IMG_4.jpg";
import Image5 from "../../assets/miniature/IMG_5.jpg";
import Image6 from "../../assets/miniature/IMG_8.jpg";
import Image7 from "../../assets/miniature/IMG_9.jpg";
import Image8 from "../../assets/miniature/IMG_10.jpg";
import Image9 from "../../assets/miniature/IMG_11.jpg";
import Image11 from "../../assets/miniature/IMG_13.jpg";
import Image12 from "../../assets/miniature/IMG_14.jpg";
import Image13 from "../../assets/miniature/IMG_15.jpg";
import Image14 from "../../assets/miniature/IMG_16.jpg";
import Image15 from "../../assets/miniature/IMG_17.jpg";
import Image16 from "../../assets/miniature/IMG_29.jpg";
import Image17 from "../../assets/miniature/7.jpg";
import Image18 from "../../assets/miniature/1716364176936 - Copy.jpg";

const images = [
  Image6,
  Image7,
  Image18,
  Image8,
  Image9,
  Image11,
  Image12,
  Image15,
  Image16,
  Image17,
  Image1,
  Image2,
  Image3,
  Image5,
  Image4,
];

const Miniature = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="text-center">
          <h2 style={{ fontWeight: "bolder", fontFamily: "var(--font-poppins)", color: "#34A1CD" }}>Miniature Arts</h2>
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
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Miniature;
