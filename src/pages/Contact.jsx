import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const notify = () => toast("Wow so easy!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mwnolfb", "template_mqkumts", form.current, "lpqUxO63t6AfHBBeS")
      .then(
        () => {
          console.log("SUCCESS!");  
          form.current.reset();
          toast.success("Message submitted successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error submitting form."); 
        }
      );
  };

  return (
    <>
      <Navbar />
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <div className="col-lg-6 col-md-10 col-sm-10 col-10 mx-auto">
            <h2
              className="d-flex justify-content-center mt-5"
              style={{ fontWeight: "bold" }}
            >
              Contact
            </h2>
            <p
              className="d-flex justify-content-center mt-4"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-10 col-10">
              <div className="row">
                <div className="mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    style={{ height: "45px" }}
                    name="user_name"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address..."
                    style={{ height: "45px" }}
                    name="user_email"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="">
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows="5"
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row mt-4">
                  <div className="col-2">
                    <button
                      className="btn btn-outline-dark pt-1"
                      type="submit"
                      value="Send"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </form>
      <div className="container-fluid">
        <footer className="footer">
          <h2
            style={{
              fontWeight: "bolder",
              fontFamily: "var(--font-poppins)",
              color: "Black",
            }}
          >
            Connect with Me
          </h2>
          <div className="container-fluid">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/aqibjarts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} color="Black" />
              </a>
              <a
                href="https://www.behance.net/aqibjaved29/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance size={30} color="Black" />
              </a>
              <a
                href="https://www.facebook.com/share/hJo4r1aNXHGZ7Q21/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color="Black" />
              </a>
              <a
                href="https://www.instagram.com/studio_aqib_javed?igsh=MWVvcWltbWlueDJsZw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} color="Black" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
