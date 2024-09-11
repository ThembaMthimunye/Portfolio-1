import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Section/Hero";
 import SkillsPage from "./Section/SkillsPage";
import Projects from "./Section/Projects";
import Banner from "./Section/Banner";
import Footer from "./Section/Footer";
import CV from "./Section/AboutMe";
import ContactPage from "./Section/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="Hero">
                  <Hero />
                </section>
                <SkillsPage/>
                <section id="projects">
                  <Projects />
                </section>
               
                <Banner />
                <Footer />
              </>
            }
          />
          <Route path="/CV" element={<CV />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
