import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle'; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Artwork from "./components/Artwork";
import Writing from "./components/Writing";
import Work from "./components/Work";



export default function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="skills"><Skills /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />
        {/* Dedicated pages */}
        <Route path="/work" element={<Work />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </Router>
  );
}
