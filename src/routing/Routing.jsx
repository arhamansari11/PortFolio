import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Project from "../pages/Projects"
import Error from '../pages/Error';
import Digital from "../pages/inpages/Digital";
import Drawing from "../pages/inpages/Drawing"
import Miniature from "../pages/inpages/Miniature"
import Painting from "../pages/inpages/Painting"
import Photograph from "../pages/inpages/Photography"
import Printmaking from "../pages/inpages/Printmaking"
import Sculpture from "../pages/inpages/Sculpture"
import Thesis from "../pages/Thesis"
import Developement from "../pages/inpages/Developement"

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/projects/digital" element={<Digital/>} />
        <Route path="/projects/drawing" element={<Drawing/>} />
        <Route path="/projects/miniature" element={<Miniature/>} />
        <Route path="/projects/painting" element={<Painting/>} />
        <Route path="/projects/photograph" element={<Photograph/>} />
        <Route path="/projects/printmaking" element={<Printmaking/>} />
        <Route path="/projects/sculpture" element={<Sculpture/>} />
        <Route path="/projects/developement" element={<Developement/>} />
        <Route path="/thesis" element={<Thesis/>} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </>
  )
}

export default Routing