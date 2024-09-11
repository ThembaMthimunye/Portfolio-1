import React, { useState } from "react";
import logo from "../assets/Pictures/SouthAfrica.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const goToContact = () => {
    navigate('/Contact');
  };

  const goToHome = () => {
    navigate('/');
  };
  
  const goToCV = () => {
    navigate('/cv');
  };
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 object-cover  border-2 border-gray-700"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:space-x-8 font-serif font-bold text-lg absolute lg:relative bg-black lg:bg-transparent lg:static top-16 left-0 w-full lg:w-auto lg:top-auto lg:left-auto transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
        >
          <a href="#" onClick={goToHome} className="py-2 px-4 hover:text-red-500">
            HOME
          </a>
          <a href="#projects" className="py-2 px-4 hover:text-red-500">
            PROJECTS
          </a>
          <a href="#about" onClick={goToCV} className="py-2 px-4 hover:text-red-500">
            ABOUT
          </a>
          <a href="/contact" onClick={goToContact} className="py-2 px-4 hover:text-red-500">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
