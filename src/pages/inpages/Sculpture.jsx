import React from "react";
import Navbar from "../../components/Navbar";
import Image1 from "../../assets/sculpture/01.jpg";
import Image2 from "../../assets/sculpture/02.png";
import Image3 from "../../assets/sculpture/03.jpg";
import Image4 from "../../assets/sculpture/04.png";
import Image5 from "../../assets/sculpture/05.jpg";
import Image6 from "../../assets/sculpture/06.png";
import Image7 from "../../assets/sculpture/07.jpg";
import Image8 from "../../assets/sculpture/08.png";
import Image9 from "../../assets/sculpture/09.jpg";
import Image10 from "../../assets/sculpture/10.png";
import Image11 from "../../assets/sculpture/11.jpg";
import Image12 from "../../assets/sculpture/12.png";
import Image13 from "../../assets/sculpture/13.jpg";
import Image14 from "../../assets/sculpture/14.png";
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
  { src: Image20,  description: 'Body gestures sculpture' },
  { src: Image26,  },
  { src: Image25,  },
  { src: Image24,  },

  { src: Image21, size: '28 inches', description: 'Metal machine sculpture' },
  { src: Image16 },
  { src: Image23 },
  { src: Image17, size: '22 inches', description: 'Ant life size wood sticks' },

  { src: Image3, size: '8 inches', description: 'Plaster human face sculpture' },
  { src: Image8, size: '40 inches', description: 'Ant life size wood sticks' },
  { src: Image4, size: '40 inches', description: 'Wall Soft fabric sculpture' },
  { src: Image12, size: '28 inches', description: 'Life size bottle sculpture' },

  { src: Image19, size: '26 inches', description: 'Carboard wall sculpture ' },
  { src: Image5, size: '20 inches', description: 'Ostrich egg metal sculpture' },
  { src: Image7, size: '10 inches', description: 'Plaster of Paris tree sculpture' },
  { src: Image15, size: '10 inches', description: 'Molding,casting sculpture' },

  { src: Image11, size: '5 inches', description: 'Marble sculpture' },
  { src: Image2, size: '8 inches', description: 'Metal wire tree round sculpture' },
  { src: Image1, size: '4 inches', description: 'Frog plaster sculpture' },
  { src: Image6, size: '8 inches', description: 'Wood craving tress sculpture' },

  { src: Image10, size: '12 inches', description: 'Stone ball sculpture' },
  { src: Image13, size: '10 inches', description: 'Molding,casting body part 2' },
  { src: Image22, size: '29 inches', description: 'Telephone cardboard life size' },
  { src: Image27, size: '3 feet', description: 'Life size cubes sculpture' },

  { src: Image14, size: '18 inches', description: 'Plaster human gesture' },
  { src: Image9, size: '11 inches', description: 'Paper shadow sculpture' },
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
                  src={image.src}
                  className="card-img-top img border border-1 border-black"
                  alt={`Sculpture ${index + 1}`}
                />
                <div className="card-body">
                  <b className="card-text text-center">{image.description}</b>
                  <p className="card-text text-center">{image.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sculpture;
