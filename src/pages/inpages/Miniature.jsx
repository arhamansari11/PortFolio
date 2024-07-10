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
import "../../styles/Digital.css";

const images = [
  { src: Image8, description: "Mughal portrait ", title: "gouche on wasli", size: "11x14”, 2020" },
  { src: Image6, description: "Neem Rang", title: "gouche on wasli", size: "11x14”, 2020" },
  { src: Image12, description: "Court Scence Replica", title: "wasli with jadwal", size: "11x14”, 2020" },
  { src: Image18, description: "Calligraphy", title: "Gouche on wasli", size: "11x14”, 2020" },
  { src: Image7, description: "Flora", title: "Calligraphy on wasli", size: "11x14”, 2021" },
  { src: Image16, description: " Calligraphy", title: " Gouche On Wasli", size: "11x14”, 2020" },
  { src: Image11, description: "Indian Portrait", title: " Gouche On Wasli", size: "11x14”, 2020" },
  { src: Image9, description: "Indian Painting", title: "Gouche On Wasli", size: "11x14” 2019" },
  { src: Image3, description: " Siyah", title: "Qalam on wasli", size: "11x14”, 2020" },
  { src: Image5, description: " Siyah", title: "Qalam on wasli", size: "11x14”, 2020" },
  { src: Image4, description: " Siyah", title: "Qalam on wasli", size: "11x14”, 2020" },
  { src: Image2, description: " Siyah", title: "Qalam on wasli", size: "11x14”, 2020" },
  { src: Image17, description: "Siyah", title: "Qalam on wasli", size: "11x14”, 2020" },
  { src: Image15, description: "Impulsive Decisions", title: " gauche on wasli", size: "11x14”, 2022" },
  { src: Image1, description: "Led pencil on ivory sheet", title: "", size: "11x14”, 2019" },
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
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={image.src}
                  className="card-img-top img border border-1 border-black"
                  alt={`Miniature Art ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{image.description}</h5>
                  <h5 className="card-title text-center">{image.size}</h5>
                  <p className="card-text text-center">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Miniature;
