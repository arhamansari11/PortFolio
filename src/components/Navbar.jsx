import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Image from "../assets/images/Simple_Beautiful_Letter_A_Logo___DesignEvo_Logo_Maker_-_Google_Chrome_7_21_2023_3_42_55_PM__1_-removebg-preview.png";


const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md "
      style={{ backgroundColor: "#768597" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: "var(--font-poppins)",
            textDecoration: "none",
            color: "white",
          }}
        >
          <i>Aqib Javed</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active me-lg-4"
                to="/"
                style={styles.link}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active me-lg-4"
                to="/about"
                style={styles.link}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active me-lg-4"
                to="/thesis"
                style={styles.link}
              >
                Thesis
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active me-lg-4"
                to="/projects"
                style={styles.link}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/contact"
                style={styles.link}
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex me-lg-4" role="search">
            <button className="butto" type="submit">
              Resume
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  link: {
    fontSize: "1.25rem",
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
